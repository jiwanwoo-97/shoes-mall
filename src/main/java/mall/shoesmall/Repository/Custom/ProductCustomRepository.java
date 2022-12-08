package mall.shoesmall.Repository.Custom;


import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Model.dto.SizeDto;

import java.util.List;

public interface ProductCustomRepository {

    List<SizeDto> findBySizeMinPrice(Long ProductId);

    List<ProductDto.product_search_response> searchFilterList(ProductDto.product_search_request request);
}
