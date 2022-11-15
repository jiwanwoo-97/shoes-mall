package mall.shoesmall.exception.errorcode;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum CommonErrorCode implements ErrorCode {

    INVALID_PARAMETER(HttpStatus.BAD_REQUEST, "유효하지 않은 파라미터입니다."),
    RESOURCE_NOT_FOUND(HttpStatus.NOT_FOUND, "리소스를 찾을 수 없습니다."),
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "서버 에러 입니다."),
    ;
    private final HttpStatus httpStatus;
    private final String message;
}
