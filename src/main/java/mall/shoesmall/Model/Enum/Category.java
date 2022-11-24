package mall.shoesmall.Model.Enum;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Category {
    스니커즈("CATE_sneak", "sneakers"),
    의류("CATE_clothing", "clothing"),
    패션잡화("CATE_fashion", "fashion"),
    테크("CATE_tech", "tech"),
    라이프("CATE_life", "life");

    private final String key;
    private final String title;
}
