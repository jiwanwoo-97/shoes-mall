package mall.shoesmall.Repository;

import mall.shoesmall.Model.Entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card,Long> {
}
