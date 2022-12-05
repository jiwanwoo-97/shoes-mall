package mall.shoesmall.Repository.Impl;

import com.querydsl.core.types.ConstantImpl;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.StringTemplate;
import com.querydsl.jpa.impl.JPAQueryFactory;
import mall.shoesmall.Model.Entity.*;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.Enum.DeliveryStatus;
import mall.shoesmall.Model.dto.PurchaseDto;
import mall.shoesmall.Model.dto.SaleDto;
import mall.shoesmall.Model.dto.UserDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import java.util.List;

import static mall.shoesmall.Model.Entity.QProduct.*;
import static mall.shoesmall.Model.Entity.QPurchase.purchase;
import static mall.shoesmall.Model.Entity.QSale.sale;
import static org.assertj.core.api.Assertions.assertThat;
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
                purchase.price.max().as("price")
                ,purchase.id.as("id")))
                .from(purchase)
                .where(
                        purchase.size.eq("250")
                        , purchase.product.id.eq(1L)
                        , purchase.bidStatus.eq(BidStatus.입찰중)
                )
                .fetchOne();

        assertThat(response).isNotNull();


    }

    @Test
    void findFirstBySizeAndProductId() {

        SaleDto.response response = queryFactory.select(Projections.bean(SaleDto.response.class,
                sale.price.min().as("price")
               ,sale.id.as("id")))
                .from(sale)
                .where(
                        sale.size.eq("250")
                        , sale.product.id.eq(1L)
                        , sale.bidStatus.eq(BidStatus.입찰중)
                )
                .fetchOne();

        assertThat(response).isNotNull();


    }

    @Test
    public void bulkSaleStatus () throws Exception {
          //given
          Long count =  queryFactory.update(sale)
                  .set(sale.bidStatus, BidStatus.입찰완료)
                  .set(sale.deliveryStatus, DeliveryStatus.배송중)
                  .where(sale.id.eq(1L))
                  .execute();

          assertThat(count).isEqualTo(1L);


    }

    @Test
    public void bulkPurchaseStatus() throws Exception {
        Long count = queryFactory.update(purchase)
                .set(purchase.bidStatus, BidStatus.입찰완료)
                .set(purchase.deliveryStatus, DeliveryStatus.배송중)
                .where(purchase.id.eq(1L))
                .execute();

        assertThat(count).isEqualTo(1L);
    }


    @Test
    public void find_user_purchase_List() throws Exception {
        StringTemplate formatDate = Expressions.stringTemplate(
                "DATE_FORMAT({0},{1})"
                ,purchase.lastModifyDate
                , ConstantImpl.create("%Y/%m/%d"));

       List<UserDto.user_purchase_response>dto= queryFactory.select(Projections.bean(UserDto.user_purchase_response.class,
                purchase.price.as("price")
                , purchase.size.as("size"),
                purchase.deliveryStatus.as("deliveryStatus")
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
               .where(product.id.eq(1L),
                       formatDate.between("2022/12/04","2022/12/06"))
                .orderBy(formatDate.desc())
                .fetch();

       for( UserDto.user_purchase_response s : dto){

           System.out.println(s.getDate());
           System.out.println(s.getPrice());
           System.out.println(s.getProductId());
           System.out.println(s.getImage());
       }

    }








}