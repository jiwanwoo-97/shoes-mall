package mall.shoesmall.Controller.RestController;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Config.PrincipalDetails;
import mall.shoesmall.Model.dto.PurchaseDto;
import mall.shoesmall.Model.dto.SaleDto;
import mall.shoesmall.Service.PurchaseService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class PurchaseApiController {

    private final PurchaseService purchaseService;

    // 구매 상품 등록
    @PostMapping("/api/purchase/create/{productId}")
    public ResponseEntity<PurchaseDto.response> create_purchase_product(@PathVariable("productId") Long id, @RequestBody PurchaseDto.request request, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        purchaseService.create_purchase_product(request, principalDetails.getUser().getId());
        PurchaseDto.response response = new PurchaseDto.response(200, "구매 등록이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

    // 구매 상품 등록
    @PostMapping("/api/purchase/buy/{productId}/{checkId}")
    public ResponseEntity<PurchaseDto.response> buy_purchase_product(@PathVariable("productId") Long id,
                                                                     @PathVariable("checkId") Long checkId,@RequestBody PurchaseDto.request request, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        purchaseService.buy_purchase_product(request, principalDetails.getUser().getId(),checkId);
        PurchaseDto.response response = new PurchaseDto.response(200, "구매가 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }



}
