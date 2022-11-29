package mall.shoesmall.Service;


import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Sale;
import mall.shoesmall.Model.dto.SaleDto;
import mall.shoesmall.Repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class SaleService {
    private final SaleRepository saleRepository;
    private final ProductRepository productRepository;
    private final AccountRepository accountRepository;
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    @Transactional
    public void create_sale_product(SaleDto.request request, Long id) {
        Sale sale = request.toEntity(
                productRepository.getById(request.getProductId())
                , accountRepository.getById(request.getAccountId())
                , addressRepository.getById(request.getAddressId())
                , userRepository.getById(id)
        );

        saleRepository.save(sale);

    }
}
