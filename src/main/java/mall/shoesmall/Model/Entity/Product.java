package mall.shoesmall.Model.Entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mall.shoesmall.Model.Enum.Category;
import mall.shoesmall.Model.Enum.PostStatus;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Product  {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String brand;

    private String name;

    private String release_first;

    private Long release_price;

    private String model_number;

    private String image;



    @Enumerated(EnumType.STRING)
    private Category category;

    @Enumerated(EnumType.STRING)
    private PostStatus postStatus;
}
