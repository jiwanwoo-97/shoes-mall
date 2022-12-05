package mall.shoesmall.Service;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Model.dto.UserDto;
import mall.shoesmall.Repository.PurchaseRepository;
import mall.shoesmall.Repository.SaleRepository;
import mall.shoesmall.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class UserService {

    @Value("${file.path}")
    private String uploadFolder;


    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;
    private final PurchaseRepository purchaseRepository;
    private final SaleRepository saleRepository;

    @Transactional
    public User saveUserJoin(User user) {
        String encPasswd =bCryptPasswordEncoder.encode(user.getUserpw());
        user.setUserpw(encPasswd);
        user.setRole("ROLE_USER");
     return userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public String getUserEmail(String hp) throws Exception {
        User user= userRepository.findByHp(hp).orElseThrow(() -> new IllegalArgumentException("일치하는 번호가 없습니다."));
        return user.getEmail();

    }

    @Transactional
    public User findByHpAndEmail(String hp, String email) throws Exception{
        User user = userRepository.findByHpAndEmail(hp,email).orElseThrow(() -> new IllegalArgumentException("일치하는 사용자가 존재하지 않습니다."));
        String encPasswd =bCryptPasswordEncoder.encode("abcd1234!@");
        user.setUserpw(encPasswd);
        return userRepository.save(user);
    }
    @Transactional(readOnly = true)
    public User findByUser(Long id) {
        return userRepository.findById(id).get();
    }

    @Transactional
    public User patchUser(UserDto.request request, Long id) {
         User user = userRepository.findById(id).get();


        if(request.getEmail()!=null && !request.getEmail().isEmpty()){
            user.setEmail(request.getEmail());

        }else if(request.getUserid()!=null && !request.getUserid().isEmpty()){
            user.setUserid(request.getUserid());

        }else if(request.getUserpw()!=null && !request.getUserpw().isEmpty()){
            String encPasswd =bCryptPasswordEncoder.encode(request.getUserpw());
            user.setUserpw(encPasswd);

        }else if(request.getHp()!=null && !request.getHp().isEmpty()){
            user.setHp(request.getHp());

        }else if(request.getUsername()!=null && !request.getUsername().isEmpty()){
            user.setUsername(request.getUsername());

        }else if(request.getShoesize()!=null && !request.getShoesize().isEmpty()){
            user.setShoesize(request.getShoesize());
        }

        return userRepository.saveAndFlush(user);
    }

    @Transactional
    public User updateImage(MultipartFile file, Long id) {

        UUID uuid = UUID.randomUUID();
        String imageFileName = uuid + "_" + file.getOriginalFilename();
        System.out.println("이미지 파일 이름 :" + imageFileName);

        Path imageFilePath = Paths.get(uploadFolder + imageFileName);
        try {
            Files.write(imageFilePath, file.getBytes());
        } catch (Exception e) {
            e.printStackTrace();
        }
        User user = userRepository.findById(id).get();
        user.setImage(imageFileName);

        return userRepository.save(user);

    }

    @Transactional(readOnly = true)
    public List<UserDto.user_purchase_response> find_user_purchase_List(Long id, String startDate, String endDate, String status) {
        return purchaseRepository.getUserPurchaseList(id, startDate, endDate, status);
    }

    @Transactional(readOnly = true)
    public List<UserDto.user_purchase_response> find_user_purchase_list_count(Long id, String startDate, String endDate) {
        return purchaseRepository.getUserPurchaseListCount(id, startDate, endDate);


    }
    @Transactional(readOnly = true)
    public List<UserDto.user_sale_response> find_user_sale_List(Long id, String startDate, String endDate, String status) {
        return saleRepository.getUserSaleList(id, startDate, endDate, status);
    }

    public List<UserDto.user_sale_response> find_user_sale_list_count(Long id, String startDate, String endDate) {
        return saleRepository.getUserSaleListCount(id, startDate, endDate);
    }
}
