package mall.shoesmall.Model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mall.shoesmall.Model.Entity.*;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.Enum.DeliveryStatus;

public class PurchaseDto {

    @Getter
    @Setter
    public static class request{
        private Long id;
        private Long price;
        private DeliveryStatus deliveryStatus;
        private BidStatus bidStatus;
        private Long addressId;
        private Long cardId;
        private Long productId;
        private String period;
        private String size;


        public Purchase toEntity(Product product, Card card, Address address, User user) {
            return Purchase.builder()
                    .price(price)
                    .period(period)
                    .size(size)
                    .deliveryStatus(deliveryStatus)
                    .bidStatus(bidStatus)
                    .product(product)
                    .address(address)
                    .card(card)
                    .user(user)
                    .build();
        }
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


        public response(int returnCode, String returnMessage) {
            this.returnCode = returnCode;
            this.returnMessage = returnMessage;
        }
    }
}
