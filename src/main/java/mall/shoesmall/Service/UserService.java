package mall.shoesmall.Service;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
