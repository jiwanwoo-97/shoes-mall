package mall.shoesmall.Controller.RestController;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Config.PrincipalDetails;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Model.dto.SaleDto;
import mall.shoesmall.Service.SaleService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class SaleApiController {

    private final SaleService saleService;

    // 판매 상품 등록
    @PostMapping("/api/sale/create/{productId}")
    public ResponseEntity<SaleDto.response> create_sell_product(@PathVariable("productId") Long id, @RequestBody SaleDto.request request, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        saleService.create_sale_product(request, principalDetails.getUser().getId());
        SaleDto.response response = new SaleDto.response(200, "판매 등록이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

    // 판매 상품 즉시판매
    @PostMapping("/api/sale/now/{productId}/{checkId}")
    public ResponseEntity<SaleDto.response> create_sell_now_product(@PathVariable("productId") Long id,
                                                                @PathVariable("checkId") Long checkId,@RequestBody SaleDto.request request, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        saleService.create_sale_now_product(request, principalDetails.getUser().getId(),checkId);
        SaleDto.response response = new SaleDto.response(200, "판매 등록이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }


}
