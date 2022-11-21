package mall.shoesmall.Controller.RestController;



import lombok.RequiredArgsConstructor;
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

    @PostMapping("/api/users/address/{id}")
    public ResponseEntity<AddressDto.response>registAddress(@PathVariable Long id, @RequestBody AddressDto.request request){
        addressService.createAddress(request,id);
        AddressDto.response response = new AddressDto.response(200, "주소 등록이 완료되었습니다.");
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }

    @PostMapping("/api/users/addressList/{id}")
    public ResponseEntity<List<AddressDto.response>> AddressList(@PathVariable Long id){
        List<AddressDto.response> response= addressService.AddressList(id);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }


    @PutMapping("/api/users/addressList/{id}")
    public ResponseEntity<List<AddressDto.response>>updateflag (@PathVariable Long id,@RequestBody AddressDto.request request){
        List<AddressDto.response> response= addressService.AddressList(id);
        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);

    }
}
