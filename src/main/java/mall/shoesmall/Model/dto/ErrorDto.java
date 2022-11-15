package mall.shoesmall.Model.dto;

import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ErrorDto<T> {
    private HttpStatus statusCode;
    private T data;

}
