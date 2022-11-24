package mall.shoesmall.Service;


import lombok.RequiredArgsConstructor;

import mall.shoesmall.Model.Entity.Product;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<ProductDto.response> searchList() {
        List<Product> productList = productRepository.findAll();
        List<ProductDto.response> responseList =
                productList.stream()
                .map(ProductDto.response :: new)
                .collect(Collectors.toList());
        return responseList;
    }
}
