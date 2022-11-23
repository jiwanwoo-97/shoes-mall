package mall.shoesmall.Model.dto;


import lombok.*;
import mall.shoesmall.Model.Entity.Address;
import mall.shoesmall.Model.Entity.User;

import java.util.List;


public class AddressDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class info {
        private Long id;
        private String name;
        private String hp;
        private String zipcode;
        private String detail;
        private String detailsub;
        private String flag;
        private UserDto userDto;

    }

    @Getter
    @Setter
    public static class request {
        private Long id;
        private String name;
        private String hp;
        private String zipcode;
        private String detail;
        private String detailsub;
        private String flag;
        public Address toEntity(User user){
            return Address.builder()
                    .name(name)
                    .hp(hp)
                    .zipcode(zipcode)
                    .detail(detail)
                    .detailsub(detailsub)
                    .flag(flag)
                    .user(user)
                    .build();
        }

    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class response {
        private Long id;
        private String name;
        private String hp;
        private String zipcode;
        private String detail;
        private String detailsub;
        private String flag;
        private int returnCode;
        private String returnMessage;

        public response(int returnCode, String returnMessage) {
            this.returnCode = returnCode;
            this.returnMessage = returnMessage;
        }
        public response(Address address) {
            this.id = address.getId();
            this.name = address.getName();
            this.hp = address.getHp();
            this.zipcode = address.getZipcode();
            this.detail = address.getDetail();
            this.detailsub = address.getDetailsub();
            this.flag = address.getFlag();
        }
    }
}
