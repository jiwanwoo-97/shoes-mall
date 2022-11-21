package mall.shoesmall.Model.Entity;

import lombok.*;


import javax.persistence.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
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

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;


}
