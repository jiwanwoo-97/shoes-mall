package mall.shoesmall.Repository;

import mall.shoesmall.Model.Entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardRepository extends JpaRepository<Card,Long> {
    List<Card> findAllByUserId(Long id);

    Card findByUserId(Long id);
}
