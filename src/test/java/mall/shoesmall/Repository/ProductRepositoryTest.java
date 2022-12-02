package mall.shoesmall.Repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import mall.shoesmall.Model.Entity.Product;
import mall.shoesmall.Model.Entity.QSale;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.dto.SizeDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import java.util.List;

import static mall.shoesmall.Model.Entity.QProduct.product;
import static mall.shoesmall.Model.Entity.QSale.sale;
import static org.junit.jupiter.api.Assertions.*;

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
    public void name() throws Exception {

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

        for(SizeDto s : fetch){
            System.out.println("Id@" + s.getId());
            System.out.println("price@" + s.getPrice());
            System.out.println("size@" +s.getSize());
        }
    }

}