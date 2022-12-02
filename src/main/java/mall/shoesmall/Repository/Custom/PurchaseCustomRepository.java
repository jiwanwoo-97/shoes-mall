package mall.shoesmall.Repository.Custom;

import mall.shoesmall.Model.dto.PurchaseDto;

public interface PurchaseCustomRepository {

    PurchaseDto.response findByBuyNowPrice(String size,Long id);

    Long bulkPurchaseStatus(Long checkId);
}
