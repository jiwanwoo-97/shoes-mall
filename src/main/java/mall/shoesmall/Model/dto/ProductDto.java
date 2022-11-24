package mall.shoesmall.Model.dto;

import lombok.*;
import mall.shoesmall.Model.Entity.Product;
import org.springframework.web.multipart.MultipartFile;

public class ProductDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class info{
        private Long id;
        private String brand;
        private String name;
        private String releaseFirst;
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
        private String releaseFirst;
        private Long releasePrice;
        private String model_number;
        private MultipartFile image;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class response {
        private Long id;
        private String brand;
        private String name;
        private String releaseFirst;
        private Long releasePrice;
        private String model_number;
        private String image;
        private int returnCode;
        private String returnMessage;

        public response(Product product) {
            this.id = product.getId();
            this.brand = product.getBrand();
            this.name = product.getName();
            this.releaseFirst = product.getRelease_first();
            this.releasePrice = product.getRelease_price();
            this.model_number = product.getModel_number();
            this.image = product.getImage();
        }
    }
}
