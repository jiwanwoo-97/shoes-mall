package mall.shoesmall.Controller;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Config.PrincipalDetails;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Repository.UserRepository;
import mall.shoesmall.Service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RequiredArgsConstructor
@Controller
public class UserController {

    private final UserService userService;


    @GetMapping("/")
    public String mainPage() {
        return "/user/mainpage";
    }

    @GetMapping("/login") //로그인
    public String loginPage(
            @RequestParam(value = "error", required = false) String error,
            @RequestParam(value = "exception", required = false) String exception, Model model) {
        model.addAttribute("error", error);
        model.addAttribute("exception", exception);
        return "/user/loginpage";
    }

    @GetMapping("/joinPage") // 회원가입
    public String joinPage() {
        return "/user/joinpage";
    }

    @GetMapping("/find_email") // 이메일찾기
    public String findEmailPage() {
        return "/user/login_find_email";
    }

    @GetMapping("/find_password") // 패스워드찾기
    public String findPwPage() {
        return "/user/login_find_password";
    }

    @GetMapping("/my") // 유저프로필 메인
    public String myPage(@AuthenticationPrincipal PrincipalDetails principalDetails, Model model) {
        User user = userService.findByUser(principalDetails.getUser().getId());
        model.addAttribute("user",user);
        return "/mypage/mypage";
    }

    @GetMapping("/my/profile")// 회원수정
    public String myProfilePage(@AuthenticationPrincipal PrincipalDetails principalDetails, Model model) {
        User user = userService.findByUser(principalDetails.getUser().getId());
        model.addAttribute("user",user);
        return "/mypage/mypage_profile";
    }

    @GetMapping("/my/buying") // 구매내역
    public String myBuyingPage() {
        return "/mypage/mypage_buying";
    }

    @GetMapping("/my/selling") // 판매내역
    public String mySellingPage() {
        return "/mypage/mypage_selling";
    }

    @GetMapping("/my/wish")  // 관심상품
    public String myWishPage() {
        return "/mypage/mypage_wish";
    }

    @GetMapping("/my/address")  // 주소
    public String myAdressPage(@AuthenticationPrincipal PrincipalDetails principalDetails, Model model) {
        User user = userService.findByUser(principalDetails.getUser().getId());
        model.addAttribute("user",user);
        return "/mypage/mypage_address";
    }

    @GetMapping("/my/payment")  // 카드
    public String myPaymentPage(@AuthenticationPrincipal PrincipalDetails principalDetails, Model model) {
        User user = userService.findByUser(principalDetails.getUser().getId());
        model.addAttribute("user",user);
        return "/mypage/mypage_payment";
    }





}
