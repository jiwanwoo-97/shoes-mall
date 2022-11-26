package mall.shoesmall.Model.Enum;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum DeliveryStatus {
    배송전("del_before"),
    배송중("del_ing"),
    배송완료("del_after");


    private final String key;

}
