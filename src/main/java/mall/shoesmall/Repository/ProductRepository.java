package mall.shoesmall.Repository;

import mall.shoesmall.Model.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
