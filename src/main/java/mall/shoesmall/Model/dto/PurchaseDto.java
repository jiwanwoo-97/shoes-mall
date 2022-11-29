package mall.shoesmall.Model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class PurchaseDto {

    @Getter
    @Setter
    public static class request{
        private Long id;
        private Long price;
        private String deliveryStatus;
        private String bidStatus;
        private Long addressId;
        private Long accountId;
        private Long productId;


    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class response{
        private Long id;
        private Long price;
        private String deliveryStatus;
        private String bidStatus;
        private Long addressId;
        private Long cardId;
        private Long productId;

        private int returnCode;
        private String returnMessage;


    }
}
