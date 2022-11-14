package mall.shoesmall;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class ShoesmallApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoesmallApplication.class, args);
	}

}
