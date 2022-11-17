package mall.shoesmall.Repository;

import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Model.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

   Optional<User> findByEmail(String username);

    Optional<User> findByHp(String hp);

    Optional<User> findByHpAndEmail(String hp, String email);
}
