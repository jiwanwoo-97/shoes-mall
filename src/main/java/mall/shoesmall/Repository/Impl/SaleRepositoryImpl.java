package mall.shoesmall.Repository.Impl;


import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.QSale;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.Enum.DeliveryStatus;
import mall.shoesmall.Model.dto.SaleDto;
import mall.shoesmall.Repository.Custom.SaleCustomRepository;

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
}
