package mall.shoesmall.Model.Entity;

import lombok.*;
import mall.shoesmall.Model.dto.AddressDto;
import org.hibernate.annotations.DynamicUpdate;


import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicUpdate
@Entity
public class Address {

    @GeneratedValue
    @Id
    private Long id;

    private String name;

    private String hp;

    private String zipcode;

    private String detail;

    private String detailsub;

    private String flag;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;


    public void update(Long id, String flag) {
        this.id = id;
        this.flag = flag;
    }

    public void update(AddressDto.request request) {
        this.name = request.getName();
        this.hp = request.getHp();
        this.zipcode = request.getZipcode();
        this.detail = request.getDetail();
        this.detailsub = request.getDetailsub();
        this.flag = request.getFlag();
    }
}
