package mall.shoesmall.Repository;

import mall.shoesmall.Model.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
