package mall.shoesmall.Repository;


import mall.shoesmall.Model.Entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountRepository extends JpaRepository<Account,Long> {

    List<Account> findAllByUserId(Long id);

}
