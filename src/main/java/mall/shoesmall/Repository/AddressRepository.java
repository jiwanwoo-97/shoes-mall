package mall.shoesmall.Repository;

import mall.shoesmall.Model.Entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address,Long> {

    List<Address> findAlLByUserId(Long id);
}
