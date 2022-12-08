package mall.shoesmall.Service;


import lombok.RequiredArgsConstructor;

import mall.shoesmall.Model.Entity.Account;
import mall.shoesmall.Model.Entity.Address;
import mall.shoesmall.Model.Entity.Card;
import mall.shoesmall.Model.Entity.Product;
import mall.shoesmall.Model.dto.*;
import mall.shoesmall.Repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final AddressRepository addressRepository;
    private final AccountRepository accountRepository;
    private final SaleRepository saleRepository;
    private final PurchaseRepository purchaseRepository;
    private final CardRepository cardRepository;

    @Transactional(readOnly = true)
    public List<ProductDto.response> searchList() {
        List<Product> productList = productRepository.findAll();

        return productList.stream()
                .map(ProductDto.response::new)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProductDto.response find_product_info(Long id) {
        Product product = productRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("등록된 상품이 아닙니다."));
        List<SizeDto> findBySizeMinPrice =productRepository.findBySizeMinPrice(id);
        return new ProductDto.response(product,findBySizeMinPrice);
    }

    @Transactional(readOnly = true)
    public ProductDto.product_sell_final_response find_product_sell_final_info(Long productId, Long id) {
        Product product = productRepository.findById(productId).orElseThrow(()-> new IllegalArgumentException("등록된 상품이 아닙니다."));
        List<Address> addressList = addressRepository.findAlLByUserId(id);
        List<AddressDto.response> address = addressList.stream()
                .map(AddressDto.response::new)
                .collect(Collectors.toList());
        Account account = accountRepository.findByUserId(id);
        return new ProductDto.product_sell_final_response(product,address,account);


    }


    public ProductDto.response find_product_buy_info(Long id, String size) {
        Product product = productRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("등록된 상품이 아닙니다."));
        SaleDto.response buyPrice = saleRepository.findFirstBySizeAndProductId(size, id); //즉시 구매 가격
        PurchaseDto.response sellPrice = purchaseRepository.findByBuyNowPrice(size,id); //즉시 판매 가격
        return new ProductDto.response(product,buyPrice.getId(),buyPrice.getPrice(), sellPrice.getPrice(),sellPrice.getId());
    }

    public ProductDto.product_buy_final_response find_product_buy_final_info(Long productId, Long id) {
        Product product = productRepository.findById(productId).orElseThrow(()-> new IllegalArgumentException("등록된 상품이 아닙니다."));
        List<Address> addressList = addressRepository.findAlLByUserId(id);
        List<AddressDto.response> address = addressList.stream()
                .map(AddressDto.response::new)
                .collect(Collectors.toList());
        Card card = cardRepository.findByUserId(id);
        return new ProductDto.product_buy_final_response(product,address,card);

    }

    public ProductDto.product_size_info_all_list_response find_product_size_info(Long id, String size) {

        List<ProductDto.product_size_info_response> saleBidPriceList = saleRepository.getBuyBidPrice(id,size); //구매 입찰
        List<ProductDto.product_size_info_response> buyBidPriceList = purchaseRepository.getSaleBidPrice(id,size);//판매 입찰
        List<ProductDto.product_size_info_list_response> bidFinishList = saleRepository.getFinishBidList(id);//거래 완료 목록
        Long buyPrice = saleRepository.findFirstBySizeAndProductId(size, id).getPrice(); //즉시 구매 가격
        Long sellPrice = purchaseRepository.findByBuyNowPrice(size, id).getPrice(); //즉시 판매 가격
        Long recentPrice = saleRepository.getRecentPrice(id, size);// 최근 거래가

        return new ProductDto.product_size_info_all_list_response(buyPrice, sellPrice, buyBidPriceList, saleBidPriceList, recentPrice, bidFinishList);
    }

    public List<ProductDto.product_search_response> searchFilterList(ProductDto.product_search_request request) {
        return productRepository.searchFilterList(request);
    }
}


