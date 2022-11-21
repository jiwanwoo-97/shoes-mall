package mall.shoesmall.Service;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Address;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Model.dto.AddressDto;
import mall.shoesmall.Repository.AddressRepository;
import mall.shoesmall.Repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class AddressService {

    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    @Transactional
    public Address createAddress(AddressDto.request request, Long id) {
        Address address = request.toEntity(userRepository.getById(id));
        return addressRepository.save(address);


    }
    @Transactional(readOnly = true)
    public List<AddressDto.response> AddressList(Long id) {
        List<Address> addressList = addressRepository.findAlLByUserId(id);
        List<AddressDto.response> responseList =
                addressList.stream()
                        .map(AddressDto.response::new)
                        .collect(Collectors.toList());
        return responseList;

    }
}
