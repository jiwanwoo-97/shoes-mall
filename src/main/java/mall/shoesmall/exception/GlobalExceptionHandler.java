package mall.shoesmall.exception;

import mall.shoesmall.Model.dto.ErrorDto;
import mall.shoesmall.exception.ex.RestApiException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RestApiException.class)
    public ResponseEntity restApiException(RestApiException ex){
        return new ResponseEntity(new ErrorDto(ex.getErrorCode().getHttpStatus(), ex.getErrorCode().getMessage()),ex.getErrorCode().getHttpStatus());
    }


}
