package mall.shoesmall.Repository.Impl;

import com.querydsl.core.types.ConstantImpl;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.StringTemplate;
import com.querydsl.core.types.dsl.Wildcard;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.Enum.DeliveryStatus;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Model.dto.PurchaseDto;
import mall.shoesmall.Model.dto.UserDto;
import mall.shoesmall.Repository.Custom.PurchaseCustomRepository;

import java.util.List;

import static mall.shoesmall.Model.Entity.QProduct.product;
import static mall.shoesmall.Model.Entity.QPurchase.purchase;

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

    @Override
    public List<UserDto.user_purchase_response> getUserPurchaseList(Long id,String startDate,String endDate,String status) {
        return queryFactory.select(Projections.bean(UserDto.user_purchase_response.class,
                purchase.price.as("price")
                , purchase.size.as("size")
                ,purchase.period.as("period")
                ,purchase.deliveryStatus.as("deliveryStatus")
                , purchase.bidStatus.as("bidStatus")
                , formatDate.as("date")
                , product.id.as("productId")
                , product.image.as("image")
                , product.name.as("name")
                , product.krname.as("krname")))
                .from(purchase)
                .join(product)
                .fetchJoin()
                .on(purchase.product.id.eq(product.id))
                .where(product.id.eq(id),
                        statusEq(status),
                        formatDate.between(startDate,endDate))
                .orderBy(formatDate.desc())
                .fetch();

    }

    @Override
    public List<UserDto.user_purchase_response> getUserPurchaseListCount(Long id, String startDate, String endDate) {
        return queryFactory.select(Projections.bean(UserDto.user_purchase_response.class,
                 purchase.bidStatus.as("bidStatus")))
                .from(purchase)
                .join(product)
                .fetchJoin()
                .on(purchase.product.id.eq(product.id))
                .where(product.id.eq(id),
                        formatDate.between(startDate,endDate))
                .orderBy(formatDate.desc())
                .fetch();

    }

    StringTemplate formatDate = Expressions.stringTemplate(
            "DATE_FORMAT({0},{1})"
            ,purchase.createDate
            , ConstantImpl.create("%Y-%m-%d"));

    private BooleanExpression statusEq(String status) {
        if(status.equals("입찰중")){
           return purchase.bidStatus.eq(BidStatus.입찰중);
        }else if(status.equals("입찰완료")){
            return purchase.bidStatus.eq(BidStatus.입찰완료);
        }else{
            return null;
        }
    }

    private BooleanExpression sizeEq(String size) {
        return size.equals("all") ? null : purchase.size.eq(size);
    }

}
