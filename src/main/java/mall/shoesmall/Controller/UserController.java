package mall.shoesmall.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class UserController {


    @GetMapping("/")
    public String mainPage() {
        return "/user/mainpage";
    }

    @GetMapping("/login")
    public String loginPage() {
        return "/user/loginpage";
    }

    @GetMapping("/joinPage")
    public String joinPage() {
        return "/user/joinpage";
    }


}
