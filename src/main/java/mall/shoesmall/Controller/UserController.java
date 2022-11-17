package mall.shoesmall.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class UserController {


    @GetMapping("/")
    public String mainPage() {
        return "/user/mainpage";
    }

    @GetMapping("/login")
    public String loginPage(
            @RequestParam(value = "error", required = false) String error,
            @RequestParam(value = "exception", required = false) String exception, Model model) {
        model.addAttribute("error", error);
        model.addAttribute("exception", exception);
        return "/user/loginpage";
    }

    @GetMapping("/joinPage")
    public String joinPage() {
        return "/user/joinpage";
    }

    @GetMapping("/find_email")
    public String findEmailPage() {
        return "/user/login_find_email";
    }

    @GetMapping("/find_password")
    public String findPwPage() {
        return "/user/login_find_password";
    }

}
