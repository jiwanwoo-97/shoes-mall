package mall.shoesmall.Model.Entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import org.hibernate.annotations.DynamicUpdate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicUpdate
@Entity
public class User extends BaseTimeEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String username;
    private String userid;
    private String userpw;
    private String email;
    private String hp;
    private String shoesize;
    private String image;
    private String role; //권한

    @OneToMany(mappedBy = "user")
    private List<Address> address = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Card> card = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Account> account = new ArrayList<>();


}

