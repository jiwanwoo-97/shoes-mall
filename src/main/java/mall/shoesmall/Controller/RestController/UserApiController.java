package mall.shoesmall.Controller.RestController;


import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Model.dto.UserDto;
import mall.shoesmall.Service.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@RestController
public class UserApiController {

    private final UserService userService;

    @PostMapping("/api/users/join")
    public ResponseEntity<UserDto.response> Join(@RequestBody UserDto.request request) throws Exception {
        HttpHeaders headers = new HttpHeaders();
        User user = request.toEntity();
        userService.saveUserJoin(user);

        UserDto.response response = new UserDto.response(200, "회원가입 성공");

        return ResponseEntity.ok()
                .headers(headers)
                .body(response);
    }
    @PostMapping("/api/users/mail")
    public ResponseEntity<UserDto.response>findMail(@RequestBody UserDto.request request) throws Exception{
        String getEmail = userService.getUserEmail(request.getHp());

        UserDto.response response = new UserDto.response(200, getEmail);

        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

    @PostMapping("/api/users/password")
    public ResponseEntity<UserDto.response>findPw(@RequestBody UserDto.request request) throws Exception{
        userService.findByHpAndEmail(request.getHp(),request.getEmail());
        UserDto.response response = new UserDto.response(200, "비밀번호가 초기화 되었습니다.");

        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }

    @PatchMapping("/api/users/info/{id}")
    public ResponseEntity<UserDto.response>updateInfo(@PathVariable Long id,@RequestBody UserDto.request request) throws Exception{
        userService.patchUser(request,id);
        UserDto.response response = new UserDto.response(200, "정보 수정이 완료되었습니다.");

        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }
    @PostMapping("/api/users/image/{id}")
    public ResponseEntity<UserDto.response>updateImage(@PathVariable Long id,@RequestParam(value = "file") MultipartFile file) throws Exception{
        userService.updateImage(file,id);
        UserDto.response response = new UserDto.response(200, "파일 수정이 완료되었습니다.");

        return ResponseEntity.ok()
                .headers(new HttpHeaders())
                .body(response);
    }




}
