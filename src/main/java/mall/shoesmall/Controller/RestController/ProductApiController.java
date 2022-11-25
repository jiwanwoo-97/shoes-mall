package mall.shoesmall.Controller.RestController;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Product;
import mall.shoesmall.Model.dto.AddressDto;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Service.ProductService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ProductApiController {
    private final ProductService productService;

    //주소리스트
    @PostMapping("/api/products/search")
    public ResponseEntity<List<ProductDto.response>> searchList() {
        List<ProductDto.response> response = productService.searchList();
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }


    // product 페이지
    @PostMapping("/api/products/{id}")
    public ResponseEntity<ProductDto.response> productPage(@PathVariable("id") Long id, Model model) {
        ProductDto.response response = productService.getProduct(id);
        model.addAttribute("product", response);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }


}
