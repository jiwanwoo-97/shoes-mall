package mall.shoesmall.Controller.RestController;


import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Model.dto.UserDto;
import mall.shoesmall.Service.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserApiController {

    private final UserService userService;

    @PostMapping("/api/userJoin")
    public ResponseEntity<UserDto.response> userJoin(@RequestBody UserDto.request request) throws Exception {
        HttpHeaders headers = new HttpHeaders();

        User user = request.toEntity();
        userService.saveUserJoin(user);

        UserDto.response response = new UserDto.response(200, "회원가입 성공");

        return ResponseEntity.ok()
                .headers(headers)
                .body(response);
    }
}
