package mall.shoesmall.Controller.RestController;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.dto.AccountDto;
import mall.shoesmall.Model.dto.AddressDto;
import mall.shoesmall.Service.AccountService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class AccountApiController {

    private final AccountService accountService;
    //계좌 생성
    @PostMapping("/api/users/{id}/account")
    public ResponseEntity<AccountDto.response> registAccount(@PathVariable Long id, @RequestBody AccountDto.request request) {
        accountService.createAccount(request, id);
        AccountDto.response response = new AccountDto.response(200, "계좌 등록이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }
    //계좌 리스트 불러오기
    @PostMapping("/api/users/{id}/accountList")
    public ResponseEntity<List<AccountDto.response>> accountList (@PathVariable Long id) {
       List<AccountDto.response>response = accountService.findByAccountList(id);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }
    //계좌 수정
    @PutMapping("/api/users/{id}/account")
    public ResponseEntity<AccountDto.response> updateAccount(@PathVariable Long id, @RequestBody AccountDto.request request) {
        accountService.updateAccount(request);
        AccountDto.response response = new AccountDto.response(200, "계좌 수정이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }
}
