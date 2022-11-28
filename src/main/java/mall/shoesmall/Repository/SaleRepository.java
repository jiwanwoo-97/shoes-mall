package mall.shoesmall.Repository;

import mall.shoesmall.Model.Entity.Sale;
import mall.shoesmall.Repository.Custom.SaleCustomRepository;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale,Long>, SaleCustomRepository {

}
