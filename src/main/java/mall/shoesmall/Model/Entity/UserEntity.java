package mall.shoesmall.Model.Entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserEntity {

    @GeneratedValue
    @Id
    private Long id;
}
