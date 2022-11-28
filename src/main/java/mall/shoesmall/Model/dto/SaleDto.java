package mall.shoesmall.Model.dto;

import lombok.*;
import mall.shoesmall.Model.Entity.*;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.Enum.DeliveryStatus;
import org.springframework.web.multipart.MultipartFile;

public class SaleDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @Data
    public static class info {
        private Long id;
        private Long price;
        private String deliveryStatus;
        private String bidStatus;
        private Long addressId;
        private Long accountId;
        private Long productId;

        private String period;
        private String size;


    }

    @Getter
    @Setter
    public static class request {
        private Long id;
        private Long price;
        private DeliveryStatus deliveryStatus;
        private BidStatus bidStatus;
        private Long addressId;
        private Long accountId;
        private Long productId;

        private String period;
        private String size;

        public Sale toEntity(Product product, Account account, Address address, User user) {
            return Sale.builder()
                    .price(price)
                    .period(period)
                    .size(size)
                    .deliveryStatus(deliveryStatus)
                    .bidStatus(bidStatus)
                    .product(product)
                    .account(account)
                    .address(address)
                    .user(user)
                    .build();
        }
    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class response {

        private int returnCode;
        private String returnMessage;

        public response(int returnCode, String returnMessage) {
            this.returnCode = returnCode;
            this.returnMessage = returnMessage;
        }


    }
}

