package mall.shoesmall.Service;


import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Card;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Model.dto.CardDto;
import mall.shoesmall.Repository.CardRepository;
import mall.shoesmall.Repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class CardService {

    private final UserRepository userRepository;
    private final CardRepository cardRepository;

    @Transactional
    public Card createCard(CardDto.request request, Long id) {
        Card card = request.toEntity(userRepository.getById(id));
        return cardRepository.save(card);


    }
}
