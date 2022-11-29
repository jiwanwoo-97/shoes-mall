package mall.shoesmall.Config;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mall.shoesmall.Model.Entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@Data
@Getter
@NoArgsConstructor
public class PrincipalDetails implements UserDetails  {

    private User user;

    public PrincipalDetails(User user){
        this.user = user;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities()  {
        Collection<GrantedAuthority>collector = new ArrayList<>();
        collector.add(() -> {
            return user.getRole();
        });
        return collector;
    }



    @Override
    public String getPassword() {
        return user.getUserpw();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


}
