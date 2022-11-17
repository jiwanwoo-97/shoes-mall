package mall.shoesmall.Service;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Model.dto.UserDto;
import mall.shoesmall.Repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;

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
}
