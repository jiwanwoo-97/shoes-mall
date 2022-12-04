package mall.shoesmall.Repository.Impl;


import com.querydsl.core.types.ConstantImpl;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.StringTemplate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.QSale;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.Enum.DeliveryStatus;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Model.dto.SaleDto;
import mall.shoesmall.Repository.Custom.SaleCustomRepository;

import java.util.List;

import static mall.shoesmall.Model.Entity.QSale.*;

@RequiredArgsConstructor
public class SaleRepositoryImpl implements SaleCustomRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public SaleDto.response findFirstBySizeAndProductId(String size, Long id) {
        return queryFactory.select(Projections.bean(SaleDto.response.class,
                sale.price.min().as("price")
                , sale.id.as("id")))
                .from(sale)
                .where(
                        sale.size.eq(size)
                        , sale.product.id.eq(id)
                        , sale.bidStatus.eq(BidStatus.입찰중)
                )
                .fetchOne();


    }

    @Override
    public long bulkSaleStatus(Long checkId) {
        return queryFactory.update(sale)
                .set(sale.bidStatus, BidStatus.입찰완료)
                .set(sale.deliveryStatus, DeliveryStatus.배송중)
                .where(sale.id.eq(checkId))
                .execute();

    }

    @Override
    public Long getRecentPrice(Long id, String size) {
        return queryFactory.select(
                sale.price.as("price"))
                .from(sale).where(sale.product.id.eq(id)
                        , sale.size.eq(size)
                        , sale.bidStatus.eq(BidStatus.입찰완료))
                .orderBy(sale.lastModifyDate.asc())
                .limit(1)
                .fetchOne();
    }

    @Override
    public List<ProductDto.product_size_info_list_response> getFinishBidList(Long id) {
        StringTemplate formatDate = Expressions.stringTemplate(
                "DATE_FORMAT({0},{1})"
                ,sale.lastModifyDate
                , ConstantImpl.create("%Y/%m/%d"));
        return queryFactory.select(Projections.bean(ProductDto.product_size_info_list_response.class,
                sale.size.as("size")
                , sale.price.as("price")
                , formatDate.as("date"))).from(sale)
                .where(sale.product.id.eq(id)
                        , sale.bidStatus.eq(BidStatus.입찰완료))
                .orderBy(formatDate.asc())
                .fetch();
    }

    @Override
    public List<ProductDto.product_size_info_response> getBuyBidPrice(Long id,String size) {
        return queryFactory.select(Projections.bean(ProductDto.product_size_info_response.class,
                sale.price.as("price")
                , sale.count().as("count")
                , sale.size.as("size")))
                .from(sale)
                .where(sale.product.id.eq(id)
                        , sale.bidStatus.eq(BidStatus.입찰중)
                        , sizeEq(size))
                .groupBy(sale.price)
                .fetch();

    }


    private BooleanExpression sizeEq(String size) {
        return size.equals("all") ? null : sale.size.eq(size);
    }


}
