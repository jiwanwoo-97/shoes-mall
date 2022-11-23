package mall.shoesmall.Model.dto;

import lombok.*;
import mall.shoesmall.Model.Entity.Card;
import mall.shoesmall.Model.Entity.User;

public class CardDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class info {
        private String card_company;
        private String card_number;
        private String expiration;
        private String birth;
        private String card_flag;
        private String cardpw;
    }

    @Getter
    @Setter
    public static class request {
        private Long id;
        private String card_company;
        private String card_number;
        private String expiration;
        private String birth;
        private String card_flag;
        private String cardpw;

        public Card toEntity(User user){
            return Card.builder()
                    .card_company(card_company)
                    .card_number(card_number)
                    .expiration(expiration)
                    .birth(birth)
                    .card_flag(card_flag)
                    .cardpw(cardpw)
                    .user(user)
                    .build();
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class response {
        CardDto.info info;
        private int returnCode;
        private String returnMessage;

        public response(int returnCode, String returnMessage) {
            this.returnCode = returnCode;
            this.returnMessage = returnMessage;

        }
    }

}
