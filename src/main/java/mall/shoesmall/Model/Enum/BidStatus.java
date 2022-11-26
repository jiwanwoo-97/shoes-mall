package mall.shoesmall.Model.Enum;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BidStatus {
    입찰전("bid_before"),
    입찰중("bid_ing"),
    입찰완료("bid_after");

    private final String key;
}
