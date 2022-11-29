package mall.shoesmall.Repository.Impl;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.QPurchase;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.dto.PurchaseDto;
import mall.shoesmall.Repository.Custom.PurchaseCustomRepository;

import static mall.shoesmall.Model.Entity.QPurchase.purchase;

@RequiredArgsConstructor
public class PurchaseRepositoryImpl implements PurchaseCustomRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public PurchaseDto.response findByBuyNowPrice(String size,Long id){
        return queryFactory.select(Projections.bean(PurchaseDto.response.class,
                purchase.price.max().as("price")))
                .from(purchase)
                .where(
                        purchase.size.eq(size)
                        , purchase.product.id.eq(id)
                        ,purchase.bidStatus.eq(BidStatus.입찰중)
                )
                .fetchOne();
    }


}
