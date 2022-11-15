package mall.shoesmall.Model.Entity;


import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String email;
    private String userid;
    private String userpw;
    private String hp;
    private String shoesize;
    private String image;
    private String role; //권한
}

