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

    private final UserRepository userRepository;

    @Transactional
    public User saveUserJoin(User user) {
        user.setRole("ROLE_USER");
        User userEntity = userRepository.save(user);
     return userEntity;
    }
}
