package mall.shoesmall.Service;

import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Account;
import mall.shoesmall.Model.Entity.BaseTimeEntity;
import mall.shoesmall.Model.dto.AccountDto;
import mall.shoesmall.Repository.AccountRepository;
import mall.shoesmall.Repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class AccountService {

    private final AccountRepository accountRepository;
    private final UserRepository userRepository;

    @Transactional
    public Account createAccount(AccountDto.request request, Long id) {
      Account account = request.toEntity(userRepository.getById(id));
      return accountRepository.save(account);

    }

    @Transactional(readOnly = true)
    public List<AccountDto.response> findByAccountList(Long id) {
        List<Account> accountList = accountRepository.findAllByUserId(id);
        List<AccountDto.response> responseList =
                accountList.stream()
                        .map(AccountDto.response::new)
                        .collect(Collectors.toList());
        return responseList;
    }

    @Transactional
    public void updateAccount(AccountDto.request request) {
       Account account = accountRepository.findById(request.getId()).orElseThrow(() -> new IllegalArgumentException("주소가 존재하지 않습니다."));
       account.update(request);
    }
}
