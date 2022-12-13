package mall.shoesmall.Controller.RestController;


import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Address;
import mall.shoesmall.Model.dto.AddressDto;
import mall.shoesmall.Service.AddressService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class AddressApiController {

    private final AddressService addressService;


    //주소생성
    @PostMapping("/api/users/{id}/address")
    public ResponseEntity<AddressDto.response> registAddress(@PathVariable Long id, @RequestBody AddressDto.request request) {
        addressService.createAddress(request, id);
        AddressDto.response response = new AddressDto.response(200, "주소 등록이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }
    //주소리스트
    @GetMapping("/api/users/{id}/addressList")
    public ResponseEntity<List<AddressDto.response>> AddressList(@PathVariable Long id) {
        List<AddressDto.response> response = addressService.AddressList(id);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }

    //기본배송지 수정
    @PutMapping("/api/users/{id}/address-flag")
    public ResponseEntity<AddressDto.response> updateFlag(@PathVariable Long id, @RequestBody AddressDto.request request) {
        addressService.updateFlag(request);
        AddressDto.response response = new AddressDto.response(200, "기본 주소 변경이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }
    //주소 수정 정보 가져오기
    @PostMapping("/api/users/{id}/address-info")
    public ResponseEntity<AddressDto.response> getAddress(@PathVariable Long id, @RequestBody AddressDto.request request) {
        Address address = addressService.getAddress(request);
        AddressDto.response response = new AddressDto.response(address);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }
    //주소 수정
    @PutMapping("/api/users/{id}/address")
    public ResponseEntity<AddressDto.response> updateAddress(@PathVariable Long id, @RequestBody AddressDto.request request) {
        addressService.updateAddress(request);
        AddressDto.response response = new AddressDto.response(200, "배송지 변경이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }
    //주소 삭제
    @DeleteMapping("/api/users/{id}/address")
    public ResponseEntity<AddressDto.response> deleteAddress(@PathVariable Long id, @RequestBody AddressDto.request request) {
        addressService.deleteAddress(request.getId());
        AddressDto.response response = new AddressDto.response(200, "배송지 변경이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }
}
