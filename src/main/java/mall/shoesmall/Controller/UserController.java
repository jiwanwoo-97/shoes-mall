package mall.shoesmall.Controller;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Config.PrincipalDetails;
import mall.shoesmall.Model.Entity.Product;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Model.dto.ProductDto;
import mall.shoesmall.Repository.ProductRepository;
import mall.shoesmall.Repository.UserRepository;
import mall.shoesmall.Service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;


@RequiredArgsConstructor
@Controller
public class UserController {

    private final UserService userService;
    private final ProductRepository productRepository;

    //메인 페이지
    @GetMapping("/")
    public String mainPage() {
        return "/user/mainpage";
    }

    //로그인 페이지
    @GetMapping("/login")
    public String loginPage(
            @RequestParam(value = "error", required = false) String error,
            @RequestParam(value = "exception", required = false) String exception, Model model) {
        model.addAttribute("error", error);
        model.addAttribute("exception", exception);
        return "/user/loginpage";
    }

    // 회원가입 페이지
    @GetMapping("/joinPage")
    public String joinPage() {
        return "/user/joinpage";
    }

    // 이메일찾기 페이지
    @GetMapping("/find_email")
    public String findEmailPage() {
        return "/user/login_find_email";
    }

    // 패스워드찾기 페이지
    @GetMapping("/find_password")
    public String findPwPage() {
        return "/user/login_find_password";
    }

    // 유저프로필 메인 페이지
    @GetMapping("/my")
    public String myPage(@AuthenticationPrincipal PrincipalDetails principalDetails, Model model) {
        User user = userService.findByUser(principalDetails.getUser().getId());
        model.addAttribute("user",user);
        return "/mypage/mypage";
    }
    // 회원수정 페이지
    @GetMapping("/my/profile")
    public String myProfilePage(@AuthenticationPrincipal PrincipalDetails principalDetails, Model model) {
        User user = userService.findByUser(principalDetails.getUser().getId());
        model.addAttribute("user",user);
        return "/mypage/mypage_profile";
    }

    // 구매내역
    @GetMapping("/my/buying")
    public String myBuyingPage() {
        return "/mypage/mypage_buying";
    }

    // 판매내역 페이지
    @GetMapping("/my/selling")
    public String mySellingPage() {
        return "/mypage/mypage_selling";
    }


    // 관심상품 페이지
    @GetMapping("/my/wish")
    public String myWishPage() {
        return "/mypage/mypage_wish";
    }


    // 주소등록 페이지
    @GetMapping("/my/address")
    public String myAdressPage(@AuthenticationPrincipal PrincipalDetails principalDetails, Model model) {
        User user = userService.findByUser(principalDetails.getUser().getId());
        model.addAttribute("user",user);
        return "/mypage/mypage_address";
    }
    // 카드등록 페이지
    @GetMapping("/my/payment")
    public String myPaymentPage(@AuthenticationPrincipal PrincipalDetails principalDetails, Model model) {
        User user = userService.findByUser(principalDetails.getUser().getId());
        model.addAttribute("user",user);
        return "/mypage/mypage_payment";
    }

    // 계좌등록 페이지
    @GetMapping("/my/account")
    public String myAccountPage(@AuthenticationPrincipal PrincipalDetails principalDetails, Model model) {
        User user = userService.findByUser(principalDetails.getUser().getId());
        model.addAttribute("user",user);
        return "/mypage/mypage_account";
    }

    // 상품 리스트 페이지
    @GetMapping("/search")
    public String productListPage() { return "/product/shop_search"; }

    // 상품 디테일 페이지
    @GetMapping("/products/{id}")
    public String productPage(@PathVariable("id") Long id,Model model) {
        model.addAttribute("productId",id);
        return "/product/shop_product"; }

    // 상품 체크 페이지
    @GetMapping("/products/sellcheck/{id}/{size}")
    public String product_sell_check_Page(@PathVariable("id") Long id,
                                          @PathVariable("size") int size ,Model model) {
        model.addAttribute("productId",id);
        model.addAttribute("size",size);
        return "/product/shop_sell_check"; }

    // 상품 판매 등록 페이지
    @GetMapping("/products/selling/{id}/{size}")
    public String product_selling_Page(@PathVariable("id") Long id,
                                          @PathVariable("size") int size ,Model model) {
        model.addAttribute("productId",id);
        model.addAttribute("size",size);
        return "/product/shop_selling"; }

    // 상품 판매 등록 페이지
    @GetMapping("/products/sellfinal/{id}/{size}/{price}/{date}")
    public String product_sellfinal_Page(@PathVariable("id") Long id,
                                         @PathVariable("size") int size,
                                         @PathVariable("price") Long price,
                                         @PathVariable("date") String date, Model model) {
        model.addAttribute("productId",id);
        model.addAttribute("size",size);
        model.addAttribute("price",price);
        model.addAttribute("date",date);
        return "/product/shop_sell_final"; }

    // 상품 판매 등록 완료 페이지
    @GetMapping("/products/sellfinish/{id}/{size}/{price}/{date}")
    public String product_sell_finish_Page(@PathVariable("id") Long id,
                                           @PathVariable("size") int size,
                                           @PathVariable("price") Long price,
                                           @PathVariable("date") String date, Model model) {
        String image = productRepository.findById(id).get().getImage();
        model.addAttribute("productId",id);
        model.addAttribute("size",size);
        model.addAttribute("price",price);
        model.addAttribute("date",date);
        model.addAttribute("image",image);
        return "/product/shop_sell_finish"; }

    // 상품 구매 체크 페이지
    @GetMapping("/products/buycheck/{id}/{size}")
    public String product_buy_check_Page(@PathVariable("id") Long id,
                                          @PathVariable("size") int size ,Model model) {
        model.addAttribute("productId",id);
        model.addAttribute("size",size);
        return "/product/shop_buy_check"; }


    // 상품 구매 등록 페이지
    @GetMapping("/products/buying/{id}/{size}")
    public String product_buying_Page(@PathVariable("id") Long id,
                                       @PathVariable("size") int size ,Model model) {
        model.addAttribute("productId",id);
        model.addAttribute("size",size);
        return "/product/shop_buying"; }






}
