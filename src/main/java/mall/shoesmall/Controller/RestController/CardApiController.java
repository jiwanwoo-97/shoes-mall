package mall.shoesmall.Controller.RestController;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Address;
import mall.shoesmall.Model.dto.AddressDto;
import mall.shoesmall.Model.dto.CardDto;
import mall.shoesmall.Service.CardService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    //카드 조회
    @PostMapping("/api/users/{id}/cardList")
    public ResponseEntity<List<CardDto.response>> cardList(@PathVariable Long id) {
        List<CardDto.response> response = cardService.findByCardList(id);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

    @PutMapping("/api/users/{id}/card-flag")
    public ResponseEntity<CardDto.response> updateFlag(@PathVariable Long id, @RequestBody CardDto.request request) {
        cardService.updateFlag(request);
        CardDto.response response = new CardDto.response(200, "기본 결제 등록이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

    @DeleteMapping("/api/users/{id}/card")
    public ResponseEntity<CardDto.response> deleteCard(@PathVariable Long id, @RequestBody CardDto.request request) {
        cardService.deleteCard(request);
        CardDto.response response = new CardDto.response(200, "카드 삭제가 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }


}
