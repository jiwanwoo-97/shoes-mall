package mall.shoesmall.Repository.Impl;

import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.QSale;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Model.dto.SizeDto;
import mall.shoesmall.Repository.Custom.ProductCustomRepository;
import org.springframework.util.StringUtils;

import java.util.List;

import static mall.shoesmall.Model.Entity.QProduct.product;
import static mall.shoesmall.Model.Entity.QPurchase.purchase;
import static mall.shoesmall.Model.Entity.QSale.sale;

@RequiredArgsConstructor
public class ProductRepositoryImpl implements ProductCustomRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<SizeDto> findBySizeMinPrice(Long ProductId) {
        QSale subSale = new QSale("subSale");
        return queryFactory.select(Projections.bean(SizeDto.class
                , product.id.as("id")
                , sale.size.as("size")
                , sale.price.as("price")))
                .from(product)
                .join(sale)
                .fetchJoin()
                .on(product.id.eq(sale.product.id))
                .where(sale.bidStatus.eq(BidStatus.입찰중)
                        , product.id.eq(ProductId)
                        , sale.price.eq(
                                JPAExpressions
                                        .select(subSale.price.min())
                                        .from(subSale)
                                        .where(subSale.size.eq(sale.size))))
                .fetch();
    }

    @Override
    public List<ProductDto.product_search_response> searchFilterList(ProductDto.product_search_request request) {
        return queryFactory.select(Projections.bean(ProductDto.product_search_response.class,
                product.id.as("id")
                , product.release_price.as("releasePrice")
                , product.brand.as("brand")
                , product.krname.as("krname")
                , product.name.as("name")
                , product.image.as("image")))
                .from(product)
                .leftJoin(sale)
                .on(product.id.eq(sale.product.id))
                .fetchJoin()
                .leftJoin(purchase)
                .on(product.id.eq(purchase.product.id))
                .fetchJoin()
                .where(
                        sizeEq(request.getSize())
                        , brandEq(request.getBrand())
                        , priceBetween(request.getPrice())
                )
                .groupBy(product.id)
                .orderBy(sorting(request.getSort()))
                .fetch();
    }
    private BooleanExpression priceBetween(String priceStr){
        if(!StringUtils.hasText(priceStr)){
            return null;
        }
        switch (priceStr) {
            case "10":
                return product.release_price.between(0, 100000);
            case "30":
                return product.release_price.between(100000, 300000);
            case "50":
                return product.release_price.between(300000, 500000);
            case "50+":
                return product.release_price.goe(500000);
            default:
                return null;
        }
    }

    private OrderSpecifier<?> sorting(String sort) {
        if (!StringUtils.hasText(sort)){
            return product.id.asc();
        }
        switch (sort) {
            case"productLow":
                return product.release_price.asc();
            case "saleLow":
                return sale.price.asc();
            case "purLow":
                return purchase.price.asc();
            default:
                return product.id.asc();
        }
    }


    private BooleanExpression brandEq(String brandStr){
        if(!StringUtils.hasText(brandStr)){
            return null;
        }
        String[] split = brandStr.split(",");
        String val = returnValue(split);
        return product.brand.in(Expressions.stringTemplate("("+val+")", split));
    }


    private BooleanExpression sizeEq(String str) {
        if(!StringUtils.hasText(str)){
            return null;
        }
        String[] split = str.split(",");
        String val = returnValue(split);

        return sale.size.in(Expressions.stringTemplate("("+val+")", split));
    }

    private String returnValue(String[] arryStr) {
        String val = "";

        for (int i = 0; i < arryStr.length; i++) {
            val += "{" + i + "}";
            if (arryStr.length - 1 != i) {
                val += ",";
            }
        }
        return val;
    }


}
