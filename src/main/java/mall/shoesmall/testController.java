package mall.shoesmall;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {



    @GetMapping("/test6")
    public String test6() {
        return "/user/mainpage";
    }
    @GetMapping("/test2")
    public String test11() {
        return "/user/loginpage";
    }

    @GetMapping("/test3")
    public String test() {
        return "/user/joinpage";
    }

    @GetMapping("/test1")
    public String test1() {
        return "/user/login_find_email";
    }

    @GetMapping("/test4")
    public String test4() {
        return "/user/login_find_password";
    }

}
