package mall.shoesmall.Repository.Impl;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import mall.shoesmall.Model.Entity.QPurchase;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.dto.PurchaseDto;
import mall.shoesmall.Model.dto.SaleDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import static mall.shoesmall.Model.Entity.QPurchase.purchase;
import static mall.shoesmall.Model.Entity.QSale.sale;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class PurchaseRepositoryTest {

    @Autowired
    EntityManager em;

    JPAQueryFactory queryFactory;

    @BeforeEach
    public void before() {
        queryFactory = new JPAQueryFactory(em);
    }


    @Test
    void findByBuyNowPrice() {

        PurchaseDto.response response = queryFactory.select(Projections.bean(PurchaseDto.response.class,
                purchase.price.max().as("price")))
                .from(purchase)
                .where(
                        purchase.size.eq("250")
                        , purchase.product.id.eq(1L)
                        , purchase.bidStatus.eq(BidStatus.입찰중)
                )
                .fetchOne();

        Assertions.assertThat(response).isNotNull();

    }

    @Test
    void findFirstBySizeAndProductId() {

        SaleDto.response response = queryFactory.select(Projections.bean(SaleDto.response.class,
                sale.price.min().as("price")))
                .from(sale)
                .where(
                        sale.size.eq("250")
                        , sale.product.id.eq(1L)
                        , sale.bidStatus.eq(BidStatus.입찰중)
                )
                .fetchOne();

        Assertions.assertThat(response).isNotNull();


    }


}