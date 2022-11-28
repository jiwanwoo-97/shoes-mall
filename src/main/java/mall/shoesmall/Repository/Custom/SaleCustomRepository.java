package mall.shoesmall.Repository.Custom;

import mall.shoesmall.Model.Entity.Sale;

public interface SaleCustomRepository {

    Sale findFirstBySizeAndProductId(String size, Long id);
}
