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
        private String cardCompany;
        private String cardNumber;
        private String expiration;
        private String birth;
        private String cardFlag;
        private String cardpw;
    }

    @Getter
    @Setter
    public static class request {
        private Long id;
        private String cardCompany;
        private String cardNumber;
        private String expiration;
        private String birth;
        private String cardFlag;
        private String cardpw;

        public Card toEntity(User user){
            return Card.builder()
                    .card_company(cardCompany)
                    .card_number(cardNumber)
                    .expiration(expiration)
                    .birth(birth)
                    .card_flag(cardFlag)
                    .cardpw(cardpw)
                    .user(user)
                    .build();
        }


    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class response {
        private Long id;
        private String cardCompany;
        private String cardNumber;
        private String expiration;
        private String birth;
        private String cardFlag;
        private String cardpw;
        private int returnCode;
        private String returnMessage;

        public response(int returnCode, String returnMessage) {
            this.returnCode = returnCode;
            this.returnMessage = returnMessage;

        }

        public response(Card card) {
            this.id = card.getId();
            this.cardCompany = card.getCard_company();
            this.cardNumber = card.getCard_number();
            this.cardpw = card.getCardpw();
            this.cardFlag = card.getCard_flag();
            this.expiration = card.getExpiration();
            this.birth = card.getBirth();
        }
    }

}
