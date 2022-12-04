package mall.shoesmall.Model.dto;

import lombok.*;
import mall.shoesmall.Model.Entity.Account;
import mall.shoesmall.Model.Entity.Card;
import mall.shoesmall.Model.Entity.Product;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.Date;
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

        private String size;


        private Long buyId;
        private Long buyPrice;
        private Long sellId;
        private Long sellPrice;
        private List<SizeDto> priceList;


        public response(Product product ,List<SizeDto> findBySizeMinPrice) {
            this.id = product.getId();
            this.brand = product.getBrand();
            this.name = product.getName();
            this.krname = product.getKrname();
            this.releasePrice = product.getRelease_price();
            this.modelNumber = product.getModel_number();
            this.image = product.getImage();
            this.priceList = findBySizeMinPrice;

        }

        public response(Product product) {
            this.id = product.getId();
            this.brand = product.getBrand();
            this.name = product.getName();
            this.krname = product.getKrname();
            this.releasePrice = product.getRelease_price();
            this.modelNumber = product.getModel_number();
            this.image = product.getImage();
        }


        public response(Product product, Long buyId, Long buyPrice, Long sellPrice, Long sellId) {
            this.id = product.getId();
            this.brand = product.getBrand();
            this.name = product.getName();
            this.krname = product.getKrname();
            this.releasePrice = product.getRelease_price();
            this.modelNumber = product.getModel_number();
            this.image = product.getImage();
            this.buyId = buyId;
            this.buyPrice = buyPrice;
            this.sellId = sellId;
            this.sellPrice = sellPrice;
        }

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class product_size_info_response {
        private Long price;
        private Long count;
        private String size;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class product_size_info_list_response {
        private String date;
        private Long price;
        private String size;
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

    @Getter
    @Setter
    @NoArgsConstructor
    public static class product_buy_final_response {
        private Long id;
        private String brand;
        private String name;
        private String krname;
        private Long releasePrice;
        private String modelNumber;
        private String image;
        List<AddressDto.response> addressList;
        private Long cardId;
        private String cardCompany;
        private String cardNumber;
        private String cardFlag;

        public product_buy_final_response(Product product, List<AddressDto.response> addressList, Card card) {
            this.id = product.getId();
            this.brand = product.getBrand();
            this.name = product.getName();
            this.krname = product.getKrname();
            this.releasePrice = product.getRelease_price();
            this.modelNumber = product.getModel_number();
            this.image = product.getImage();
            this.addressList = addressList;
            this.cardId = card.getId();
            this.cardCompany = card.getCard_company();
            this.cardNumber = card.getCard_number();
            this.cardFlag = card.getCard_flag();
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class product_size_info_all_list_response {
        private Long buyPrice;
        private Long sellPrice;
        private Long recentPrice;

        private List<product_size_info_response> buyBidPriceList;

        private List<product_size_info_response> saleBidPriceList;

        private List<product_size_info_list_response> bidFinishList;


        public product_size_info_all_list_response(Long buyPrice, Long sellPrice, List<product_size_info_response> buyBidPriceList, List<product_size_info_response> saleBidPriceList, Long recentPrice, List<product_size_info_list_response> bidFinishList) {
        this.buyPrice = buyPrice;
        this.sellPrice = sellPrice;
        this.recentPrice = recentPrice;
        this.buyBidPriceList = buyBidPriceList;
        this.saleBidPriceList = saleBidPriceList;
        this.bidFinishList = bidFinishList;
        }
    }
}
