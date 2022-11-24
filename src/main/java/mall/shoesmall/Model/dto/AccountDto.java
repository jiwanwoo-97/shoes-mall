package mall.shoesmall.Model.dto;

import lombok.*;
import mall.shoesmall.Model.Entity.Account;
import mall.shoesmall.Model.Entity.User;

public class AccountDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class info {
        private Long id;
        private String bank;
        private String name;
        private String accountNumber;
    }

    @Getter
    @Setter
    public static class request {
        private Long id;
        private String bank;
        private String name;
        private String accountNumber;

        public Account toEntity(User user){
            return Account.builder()
                    .bank(bank)
                    .name(name)
                    .account_number(accountNumber)
                    .user(user)
                    .build();
        }
    }
    @Getter
    @Setter
    @AllArgsConstructor
    public static class response {
        private Long id;
        private String bank;
        private String name;
        private String accountNumber;

        private int returnCode;
        private String returnMessage;

        public response(Account account) {
            this.id = account.getId();
            this.bank = account.getBank();
            this.name = account.getName();
            this.accountNumber = account.getAccount_number();
        }

        public response(int returnCode , String returnMessage){
            this.returnCode = returnCode;
            this.returnMessage = returnMessage;
        }
    }
}
