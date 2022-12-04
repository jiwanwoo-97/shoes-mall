package mall.shoesmall.Repository.Impl;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.QSale;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Model.dto.SizeDto;
import mall.shoesmall.Repository.Custom.ProductCustomRepository;

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




}
