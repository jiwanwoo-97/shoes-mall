package mall.shoesmall.Controller.RestController;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Address;
import mall.shoesmall.Model.dto.AddressDto;
import mall.shoesmall.Model.dto.CardDto;
import mall.shoesmall.Service.CardService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class CardApiController {

     private final CardService cardService;
    //카드 등록
    @PostMapping("/api/users/{id}/card")
    public ResponseEntity<CardDto.response> createCard(@PathVariable Long id, @RequestBody CardDto.request request) {
        cardService.createCard(request,id);
        CardDto.response response = new CardDto.response(200, "카드 등록이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

}
