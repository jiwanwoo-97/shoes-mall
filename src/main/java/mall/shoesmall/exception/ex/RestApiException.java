package mall.shoesmall.exception.ex;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import mall.shoesmall.exception.errorcode.ErrorCode;

@Getter
@RequiredArgsConstructor
public class RestApiException extends RuntimeException {

    private final ErrorCode errorCode;
}
