package mall.shoesmall.Config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http
                .csrf()
                .disable()
                .authorizeRequests()
                .antMatchers("/","/my","/product","/api/**")
                .permitAll()
                .and()
                .formLogin()
                .loginPage("/login")//Get
                .loginProcessingUrl("/login")//Post ->시큐리티 로그인 프로세스 진행// .defaultSuccessUrl("/")
                .failureHandler(new LoginfailureHandler())
                .defaultSuccessUrl("/")
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/") // 로그아웃 성공시 리다이렉트 주소
                .permitAll()
                .invalidateHttpSession(true); // 세션 날리기
    }
}
