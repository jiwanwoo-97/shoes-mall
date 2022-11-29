package mall.shoesmall.Config;



import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService  {


    private final UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
     User userEntity = userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));

        return new PrincipalDetails(userEntity);

    }
}
