package mall.shoesmall.Model.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class SizeDto {

    private Long id;
    private String size;
    private Long price;

}
