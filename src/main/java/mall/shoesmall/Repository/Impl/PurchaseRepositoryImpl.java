package mall.shoesmall.Repository.Impl;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.QPurchase;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.Enum.DeliveryStatus;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Model.dto.PurchaseDto;
import mall.shoesmall.Repository.Custom.PurchaseCustomRepository;

import java.util.List;

import static mall.shoesmall.Model.Entity.QPurchase.purchase;
import static mall.shoesmall.Model.Entity.QSale.sale;

@RequiredArgsConstructor
public class PurchaseRepositoryImpl implements PurchaseCustomRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public PurchaseDto.response findByBuyNowPrice(String size,Long id){
        return queryFactory.select(Projections.bean(PurchaseDto.response.class,
                purchase.price.max().as("price")
               ,purchase.id.as("id")))
                .from(purchase)
                .where(
                        purchase.size.eq(size)
                        , purchase.product.id.eq(id)
                        ,purchase.bidStatus.eq(BidStatus.입찰중)
                )
                .fetchOne();
    }

    @Override
    public Long bulkPurchaseStatus(Long checkId){
        return queryFactory.update(purchase)
                .set(purchase.bidStatus,BidStatus.입찰완료)
                .set(purchase.deliveryStatus, DeliveryStatus.배송중)
                .where(purchase.id.eq(checkId))
                .execute();
    }

    @Override
    public List<ProductDto.product_size_info_response> getSaleBidPrice(Long id,String size) {
        return queryFactory.select(Projections.bean(ProductDto.product_size_info_response.class,
                purchase.price.as("price")
                , purchase.count().as("count")
                , purchase.size.as("size")))
                .from(purchase).where(purchase.product.id.eq(id)
                        , purchase.bidStatus.eq(BidStatus.입찰중)
                         ,sizeEq(size))
                .groupBy(purchase.price)
                .fetch();
    }

    private BooleanExpression sizeEq(String size) {
        return size.equals("all") ? null : purchase.size.eq(size);
    }

}
