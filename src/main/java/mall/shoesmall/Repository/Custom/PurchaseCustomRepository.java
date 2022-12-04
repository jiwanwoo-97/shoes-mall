package mall.shoesmall.Repository.Custom;

import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Model.dto.PurchaseDto;

import java.util.List;

public interface PurchaseCustomRepository {

    PurchaseDto.response findByBuyNowPrice(String size,Long id);

    Long bulkPurchaseStatus(Long checkId);

    List<ProductDto.product_size_info_response> getSaleBidPrice(Long id,String size);
}
