package mall.shoesmall.Service;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Purchase;
import mall.shoesmall.Model.Entity.Sale;
import mall.shoesmall.Model.dto.PurchaseDto;
import mall.shoesmall.Repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class PurchaseService {
    private final SaleRepository saleRepository;
    private final ProductRepository productRepository;
    private final AccountRepository accountRepository;
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;
    private final CardRepository cardRepository;
    private final PurchaseRepository purchaseRepository;

    @Transactional
    public void create_purchase_product(PurchaseDto.request request, Long id) {
        Purchase purchase = request.toEntity(
                productRepository.getById(request.getProductId())
                , cardRepository.getById(request.getCardId())
                , addressRepository.getById(request.getAddressId())
                , userRepository.getById(id)
        );
        purchaseRepository.save(purchase);

    }

    @Transactional
    public void buy_purchase_product(PurchaseDto.request request, Long id, Long checkId) {
        Purchase purchase = request.toEntity(
                productRepository.getById(request.getProductId())
                , cardRepository.getById(request.getCardId())
                , addressRepository.getById(request.getAddressId())
                , userRepository.getById(id)
        );
        purchaseRepository.save(purchase);

        saleRepository.bulkSaleStatus(checkId);


    }
}
