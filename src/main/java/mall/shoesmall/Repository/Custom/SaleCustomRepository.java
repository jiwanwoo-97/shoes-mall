package mall.shoesmall.Repository.Custom;

import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Model.dto.SaleDto;
import mall.shoesmall.Model.dto.UserDto;

import java.util.List;

public interface SaleCustomRepository {

    SaleDto.response findFirstBySizeAndProductId(String size, Long id);

    long bulkSaleStatus(Long checkId);

    Long getRecentPrice(Long id, String size);

    List<ProductDto.product_size_info_response> getBuyBidPrice(Long id,String size);

    List<ProductDto.product_size_info_list_response> getFinishBidList(Long id);

    List<UserDto.user_sale_response> getUserSaleList(Long id, String startDate, String endDate, String status);

    List<UserDto.user_sale_response> getUserSaleListCount(Long id, String startDate, String endDate);
}
