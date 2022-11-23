package mall.shoesmall.Service;


import lombok.RequiredArgsConstructor;
import mall.shoesmall.Model.Entity.Card;
import mall.shoesmall.Model.Entity.User;
import mall.shoesmall.Model.dto.AddressDto;
import mall.shoesmall.Model.dto.CardDto;
import mall.shoesmall.Repository.CardRepository;
import mall.shoesmall.Repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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

    @Transactional(readOnly = true)
    public List<CardDto.response> findByCardList(Long id) {
        List<Card> cardList = cardRepository.findAllByUserId(id);
        List<CardDto.response> responseList =
                cardList.stream()
                        .map(CardDto.response::new)
                        .collect(Collectors.toList());
        return responseList;
    }

    @Transactional
    public void updateFlag(CardDto.request request) {
        Card card = cardRepository.getById(request.getId());
        card.update(request.getId(), request.getCardFlag());
    }

    @Transactional
    public void deleteCard(CardDto.request request) {
        Card card = cardRepository.findById(request.getId()).orElseThrow(() -> new IllegalArgumentException("카드가 존재하지 않습니다."));
        cardRepository.delete(card);
    }
}
