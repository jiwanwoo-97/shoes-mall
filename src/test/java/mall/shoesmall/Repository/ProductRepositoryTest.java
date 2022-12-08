package mall.shoesmall.Repository;

import com.querydsl.core.types.ConstantImpl;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.StringTemplate;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import mall.shoesmall.Model.Entity.QSale;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Model.dto.SizeDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import java.util.List;

import static mall.shoesmall.Model.Entity.QProduct.product;
import static mall.shoesmall.Model.Entity.QPurchase.*;
import static mall.shoesmall.Model.Entity.QSale.sale;

@SpringBootTest
@Transactional
class ProductRepositoryTest {

    @Autowired
    EntityManager em;

    JPAQueryFactory queryFactory;

    @BeforeEach
    public void before() {
        queryFactory = new JPAQueryFactory(em);
    }

    @Test
    public void findBySizeMinPrice() throws Exception {

        QSale subSale = new QSale("subSale");

        List<SizeDto> fetch = queryFactory.select(Projections.bean(SizeDto.class
                , product.id.as("id")
                , sale.size.as("size")
                , sale.price.as("price")))
                .from(product)
                .join(sale)
                .fetchJoin()
                .on(product.id.eq(sale.product.id))
                .where(sale.bidStatus.eq(BidStatus.입찰중)
                        , product.id.eq(1L)
                        , sale.price.eq(
                                JPAExpressions
                                        .select(subSale.price.min())
                                        .from(subSale)
                                        .where(subSale.size.eq(sale.size))))
                .fetch();

        for (SizeDto s : fetch) {
            System.out.println("Id@" + s.getId());
            System.out.println("price@" + s.getPrice());
            System.out.println("size@" + s.getSize());
        }
    }

    @Test
    public void getBuyBidPrice() throws Exception {
        String str = "all";

        List<ProductDto.product_size_info_response> fetch = queryFactory.select(Projections.bean(ProductDto.product_size_info_response.class,
                sale.price.as("price")
                , sale.count().as("count")
                , sale.size.as("size")))
                .from(sale)
                .where(sale.product.id.eq(1L)
                        , sale.bidStatus.eq(BidStatus.입찰중)
                        ,sizeEq(str))
                .groupBy(sale.price)
                .fetch();

        for (ProductDto.product_size_info_response s : fetch) {
            System.out.println("가격" + s.getPrice());
            System.out.println("개수" + s.getCount());
            System.out.println("사이즈" + s.getSize());
        }

    }

    private BooleanExpression sizeEq(String size) {
        return size != null ? purchase.size.eq(size): null;
    }
    @Test
    public void getSaleBidPrice(String size) throws Exception {

        size = null;

        List<ProductDto.product_size_info_response> fetch = queryFactory.select(Projections.bean(ProductDto.product_size_info_response.class,
                purchase.price.as("price")
                , purchase.count().as("count")
                , purchase.size.as("size")))
                .from(purchase).where(purchase.product.id.eq(1L)
                        , purchase.bidStatus.eq(BidStatus.입찰중)
                        ,sizeEq(size))
                .groupBy(purchase.price)
                .fetch();

        for (ProductDto.product_size_info_response s : fetch) {
            System.out.println("가격" + s.getPrice());
            System.out.println("개수" + s.getCount());
            System.out.println("사이즈" + s.getSize());
        }


    }


    @Test
    public void getRecentPrice() throws Exception {
        Long price = queryFactory.select(
                sale.price.as("price"))
                .from(sale).where(sale.product.id.eq(1L)
                        , sale.size.eq("250")
                        , sale.bidStatus.eq(BidStatus.입찰완료))
                .orderBy(sale.lastModifyDate.asc())
                .limit(1)
                .fetchOne();
        System.out.println(price);
    }

    @Test
    public void product_size_info_list_response () throws Exception {
        StringTemplate formatDate = Expressions.stringTemplate(
                "DATE_FORMAT({0},{1})"
                ,sale.lastModifyDate
                , ConstantImpl.create("%Y/%m/%d"));

        List<ProductDto.product_size_info_list_response> fetch = queryFactory.select(Projections.bean(ProductDto.product_size_info_list_response.class,
                sale.size.as("size")
                , sale.price.as("price")
                , formatDate.as("date"))).from(sale)
                .where(sale.product.id.eq(1L)
                        , sale.bidStatus.eq(BidStatus.입찰완료))
                .orderBy(formatDate.asc())
                .fetch();

        for (ProductDto.product_size_info_list_response s : fetch){
            System.out.println(s.getDate());
            System.out.println(s.getSize());
            System.out.println(s.getPrice());
        }

    }

    @Test
    public void searchFilterList() throws Exception {

        String str = null;
        String brandStr = "Jordan,Asics,New Balance";
        String sort = "purLow";
        String priceStr = "50+";
        List<ProductDto.product_search_response> fetch = queryFactory.select(Projections.bean(ProductDto.product_search_response.class,
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
                        size2Eq(str)
                        , brandEq(brandStr)
                        , priceBetween(priceStr)
                )
                .groupBy(product.id)
                .orderBy(sorting(sort))
                .fetch();


    }
    private BooleanExpression priceBetween(String priceStr){
        if(priceStr==null){
            return null;
        }
        switch (priceStr) {
            case "10":
                product.release_price.between(0, 100000);
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
        if(brandStr==null){
            return null;
        }
        String[] split = brandStr.split(",");
        String val = returnValue(split);
        return product.brand.in(Expressions.stringTemplate("("+val+")", split));
    }


    private BooleanExpression size2Eq(String str) {
        if(str==null){
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