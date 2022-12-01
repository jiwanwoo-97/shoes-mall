package mall.shoesmall.Repository.Custom;

import mall.shoesmall.Model.dto.SaleDto;

public interface SaleCustomRepository {

    SaleDto.response findFirstBySizeAndProductId(String size, Long id);

    long bulkSaleStatus(Long checkId);
}
