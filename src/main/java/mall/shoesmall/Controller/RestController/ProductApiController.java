package mall.shoesmall.Controller.RestController;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Config.PrincipalDetails;
import mall.shoesmall.Model.Entity.Product;
import mall.shoesmall.Model.dto.AddressDto;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Service.ProductService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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

    //주소 리스트
    @PostMapping("/api/products/search")
    public ResponseEntity<List<ProductDto.response>> searchList() {
        List<ProductDto.response> response = productService.searchList();
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }


    // 상품 정보 호출
    @PostMapping("/api/products/{id}")
    public ResponseEntity<ProductDto.response> product_info(@PathVariable("id") Long id, Model model) {
        ProductDto.response response = productService.find_product_info(id);
        model.addAttribute("product", response);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

    // 상품 정보 호출
    @PostMapping("/api/products/size_info/{id}/{size}")
    public ResponseEntity<ProductDto.response> product_size_info(@PathVariable("id") Long id,
                                                                 @PathVariable("size") String size,Model model) {
        ProductDto.response response = productService.find_product_size_info(id,size);
        model.addAttribute("product", response);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }



    // 상품 판매 정보 호출
    @PostMapping("/api/products/sell_info/{id}/{size}")
    public ResponseEntity<ProductDto.response> product_sell_info(@PathVariable("id") Long id,
                                                                      @PathVariable("size") String size, Model model) {
        ProductDto.response response = productService.find_product_buy_info(id,size);
        model.addAttribute("product", response);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

    // 상품 판매 및 주소 계좌 정보 호출
    @PostMapping("/api/products/sell_final_info/{id}/{size}/{price}/{date}")
    public ResponseEntity<ProductDto.product_sell_final_response> product_sell_final_info(@PathVariable("id") Long productId,
                                                                                          @PathVariable("size") int size,
                                                                                          @PathVariable("price") Long price,
                                                                                          @PathVariable("date") int date, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        ProductDto.product_sell_final_response response = productService.find_product_sell_final_info(productId, principalDetails.getUser().getId());
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

    // 상품 판매 정보 호출
    @PostMapping("/api/products/buy_info/{id}/{size}")
    public ResponseEntity<ProductDto.response> product_buy_info(@PathVariable("id") Long id,
                                                                 @PathVariable("size") String size, Model model) {
        ProductDto.response response = productService.find_product_buy_info(id,size);
        model.addAttribute("product", response);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

    // 상품 구매 및 주소 카드 정보 호출
    @PostMapping("/api/products/buy_final_info/{id}/{size}/{price}/{date}")
    public ResponseEntity<ProductDto.product_buy_final_response> product_buy_final_info(@PathVariable("id") Long productId,
                                                                                          @PathVariable("size") int size,
                                                                                          @PathVariable("price") Long price,
                                                                                          @PathVariable("date") int date, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        ProductDto.product_buy_final_response response = productService.find_product_buy_final_info(productId, principalDetails.getUser().getId());
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }




}
