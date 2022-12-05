package mall.shoesmall.Model.dto;

import lombok.*;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Model.Enum.BidStatus;
import mall.shoesmall.Model.Enum.DeliveryStatus;

public class UserDto {



    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class info {
        private String email;
        private String username;
        private String userid;
        private String userpw;
        private String hp;
        private String shoesize;
        private String image;
        private String role; //권한
    }

    @Getter
    @Setter
    public static class request {
        private String email;
        private String username;
        private String userid;
        private String userpw;
        private String hp;
        private String shoesize;
        private String role; //권한
        public User toEntity() {
            return User.builder()
                    .email(email)
                    .username(username)
                    .userid(userid)
                    .userpw(userpw)
                    .hp(hp)
                    .shoesize(shoesize)
                    .build();
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class response {
        private UserDto.info user;
        private int returnCode;
        private String returnMessage;

        public response(int returnCode, String returnMessage) {
            this.returnCode = returnCode;
            this.returnMessage = returnMessage;
        }
    }

    @Getter
    @Setter
    @RequiredArgsConstructor
    public static class user_purchase_response {

        private Long price;
        private String size;
        private DeliveryStatus deliveryStatus;
        private BidStatus bidStatus;
        private String period;
        private String date;
        private Long productId;
        private String image;
        private String name;
        private String krname;




    }

    @Getter
    @Setter
    @RequiredArgsConstructor
    public static class user_sale_response {

        private Long price;
        private String size;
        private DeliveryStatus deliveryStatus;
        private BidStatus bidStatus;
        private String period;
        private String date;
        private Long productId;
        private String image;
        private String name;
        private String krname;


    }






}
