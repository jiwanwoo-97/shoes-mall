package mall.shoesmall.Repository;

import mall.shoesmall.Model.Entity.Purchase;
import mall.shoesmall.Repository.Custom.PurchaseCustomRepository;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase,Long>, PurchaseCustomRepository {
}
