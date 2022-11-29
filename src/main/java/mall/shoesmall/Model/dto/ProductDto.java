package mall.shoesmall.Model.dto;

import lombok.*;
import mall.shoesmall.Model.Entity.Account;
import mall.shoesmall.Model.Entity.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class ProductDto {


    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class info{
        private Long id;
        private String brand;
        private String name;
        private String krname;
        private Long releasePrice;
        private String model_number;
        private String image;
    }

    @Getter
    @Setter
    public static class request {
        private Long id;
        private String brand;
        private String name;
        private String krname;
        private Long releasePrice;
        private String modelNumber;
        private MultipartFile image;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class response {
        private Long id;
        private String brand;
        private String name;
        private String krname;
        private Long releasePrice;
        private String modelNumber;
        private String image;
        private int returnCode;
        private String returnMessage;

        private Long buyPrice;
        private Long sellPrice;

        public response(Product product) {
            this.id = product.getId();
            this.brand = product.getBrand();
            this.name = product.getName();
            this.krname = product.getKrname();
            this.releasePrice = product.getRelease_price();
            this.modelNumber = product.getModel_number();
            this.image = product.getImage();
        }


        public response(Product product, Long buyPrice, Long sellPrice) {
            this.id = product.getId();
            this.brand = product.getBrand();
            this.name = product.getName();
            this.krname = product.getKrname();
            this.releasePrice = product.getRelease_price();
            this.modelNumber = product.getModel_number();
            this.image = product.getImage();
            this.buyPrice = buyPrice;
            this.sellPrice = sellPrice;
        }
    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class product_sell_final_response {
        private Long id;
        private String brand;
        private String name;
        private String krname;
        private Long releasePrice;
        private String modelNumber;
        private String image;
        List<AddressDto.response> addressList;
        private Long accountId;
        private String accountBank;
        private String accountName;
        private String accountNumber;

        public product_sell_final_response(Product product, List<AddressDto.response> addressList, Account account) {
            this.id = product.getId();
            this.brand = product.getBrand();
            this.name = product.getName();
            this.krname = product.getKrname();
            this.releasePrice = product.getRelease_price();
            this.modelNumber = product.getModel_number();
            this.image = product.getImage();
            this.addressList = addressList;
            this.accountId = account.getId();
            this.accountNumber = account.getAccount_number();
            this.accountName = account.getName();
            this.accountBank = account.getBank();
        }
    }
}
