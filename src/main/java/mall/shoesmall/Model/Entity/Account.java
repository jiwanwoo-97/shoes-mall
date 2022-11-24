package mall.shoesmall.Model.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mall.shoesmall.Model.dto.AccountDto;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Account extends BaseTimeEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String bank;

    private String name;

    private String account_number;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;


    public void update(AccountDto.request request) {
        this.id = request.getId();
        this.bank = request.getBank();
        this.name = request.getName();
        this.account_number = request.getAccountNumber();
    }
}
