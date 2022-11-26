package mall.shoesmall.Repository;

import mall.shoesmall.Model.Entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale,Long> {
}
