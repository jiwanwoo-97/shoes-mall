package mall.shoesmall.Repository.Impl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Sale;
import mall.shoesmall.Repository.Custom.SaleCustomRepository;

import static mall.shoesmall.Model.Entity.QSale.sale;
import static org.springframework.util.StringUtils.hasText;

@RequiredArgsConstructor
public class SaleCustomRepositoryImpl implements SaleCustomRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public Sale findFirstBySizeAndProductId(String size, Long id) {




        return queryFactory.selectFrom(sale)
                .where(
                        sale.size.eq(size)
                        , sale.product.id.eq(id)
                ).orderBy(sale.price.desc())
                .fetchFirst();




    }
}
