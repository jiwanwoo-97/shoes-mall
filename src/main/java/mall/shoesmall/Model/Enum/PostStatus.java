package mall.shoesmall.Model.Enum;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum PostStatus {
    게시중("posting","posting"),
    게시종료("closed","closed");

    private final String status;
    private final String title;

}
