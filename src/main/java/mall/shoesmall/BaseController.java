package mall.shoesmall;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@AllArgsConstructor
public class BaseController {


    // 공지사항 리스트
    @GetMapping(" /notice/postmange")
    public String ad_notice_postmange() {
        return " /ad_notice_postmange";
    }

    //대시보드
    @GetMapping(" ")
    public String ad_dash () {
        return " /ad_dash ";
    }

    //미결제확인
    @GetMapping(" /order/paycheck")
    public String ad_order_paycheck() {
        return " /ad_order_paycheck";
    }

    //구매
    @GetMapping(" /order/search")
    public String ad_order_search() {
        return " /ad_order_search ";
    }

    //상품문의
    @GetMapping(" /inquire/product")
    public String ad_inquire_product() {
        return " /ad_inquire_product ";
    }

    //고객문의
    @GetMapping(" /inquire/customer")
    public String ad_inquire_customer() {
        return " /ad_inquire_customer ";
    }

    //블랙리스트
    @GetMapping(" /member/leave")
    public String ad_member_leave() {
        return " /ad_member_leave ";
    }

    //상품등록
    @GetMapping(" /product/regist")
    public String ad_product_regist() {
        return " /ad_product_regist ";
    }

    //상품조회수정
    @GetMapping(" /product/check")
    public String ad_product_check() {
        return " /ad_product_check ";
    }

    //상품등록 디테일
    @GetMapping(" /product/detail/{id}")
    public String ad_product_detail(@PathVariable("id") Long id){
        return " /ad_product_detail ";
    }

    //전체회원
    @GetMapping(" /member/all")
    public String ad_member_all() {
        return " /ad_member_all ";
    }

    //탈퇴회원
    @GetMapping(" /member/withdrawal")
    public String ad_member_withdrawal() {
        return " /ad_member_withdrawal ";
    }

    //배송현황
    @GetMapping(" /order/delivery")
    public String ad_order_delivery() {
        return " /ad_order_delivery ";
    }

    //판매
    @GetMapping(" /order/sales")
    public String ad_order_sales() {
        return " /ad_order_sales ";
    }

    //글생성
    @GetMapping(" /content/manage")
    public String ad_content_manage() {
        return " /ad_content_manage ";
    }



    //고객문의상세
    @GetMapping(" /customer_info/{id}")
    public String customer_info(@PathVariable("id") Long id){
        return " /ad_inquire_customer_info ";
    }

    //상품문의상세
    @GetMapping(" /product_info/{id}")
    public String product_info(@PathVariable("id") Long id){
        return " /ad_inqurie_product_info ";
    }

    //고객문의답변
    @GetMapping(" /customer_edit/{id}")
    public String customer_edit(@PathVariable("id") Long id){
        return " /ad_inquire_customer_edit ";
    }

    //상품문의답변
    @GetMapping(" /product_edit/{id}")
    public String product_edit(@PathVariable("id") Long id){
        return " /ad_inqurie_product_edit ";
    }

    //게시글수정
    @GetMapping(" /postm_info/{idx}")
    public String postm_info(@PathVariable("idx") Long idx){
        return " /ad_notice_postmange_info ";
    }

    //게시글 상세 추가
    @GetMapping(" /postm_detail/{idx}")
    public String postmange_detail(@PathVariable("idx") Long idx){ return " /ad_notice_postmange_detail "; }

    //탈퇴회원정보
    @GetMapping(" /black_info/{id}")
    public String black_info(@PathVariable("id") Long id){
        return " /ad_member_black_info ";
    }

    //구매정보
    @GetMapping(" /search_info/{id}")
    public String search_info(@PathVariable("id") Long id){
        return " /ad_order_search_info ";
    }

    //판매정보
    @GetMapping(" /sales_info/{id}")
    public String sales_info(@PathVariable("id") Long id){ return " /ad_order_sales_info "; }

    //배송정보
    @GetMapping(" /delivery_info/{id}")
    public String delivery_info(@PathVariable("id") Long id){
        return " /ad_order_delivery_info ";
    }

    //상품수정
    @GetMapping(" /product/edit/{id}")
    public String edit(@PathVariable("id") Long id){
        return " /ad_product_edit ";
    }

    //회원정보
    @GetMapping(" /info/{id}")
    public String info(@PathVariable("id") Long id){
        return " /ad_member_info ";
    }

    //블랙리스트 등록
    @GetMapping(" /black/{id}")
    public String black(@PathVariable("id") Long id){ return " /ad_member_black "; }

    //등급수정
    @GetMapping(" /rank/{id}")
    public String rank(@PathVariable("id") Long id){ return " /ad_member_rank "; }





    // 메인 페이지
    @GetMapping("/")
    public String mainpage(){
        return "/mainpage ";
    }

    // 어바웃 페이지
    @GetMapping("/about")
    public String aboutpage() { return "/about "; }

    // 로그인 페이지
    @GetMapping("/login")
    public String login(){
        return "/loginpage ";
    }

    // 회원가입 페이지
    @GetMapping("/join")
    public String userRegister(){
        return "/joinpage ";
    }

    // 아이디 찾기 페이지
    @GetMapping("/login/find_email")
    public String findEmail(){
        return "/login_find_email ";
    }

    // 비밀번호 찾기 페이지
    @GetMapping("/login/find_password")
    public String findPassword(){
        return "/login_find_password ";
    }

    // 마이페이지
    @GetMapping("/my")
    public String mypage() { return "/mypage/mypage"; }

    // 마이페이지 구매 내역
    @GetMapping("/my/buying")
    public String myBuying() { return "/mypage/mypage_buying"; }

 /*   // 마이페이지 구매 내역 상세페이지(품목의 id 값 넘김)
    @RequestMapping(value = "/my/buying/{no}", method = {RequestMethod.GET})
    public String myBuyingDetail(@PathVariable("no")Long no, Model model){
        model.addAttribute("id", no);
        return "/mypage_buying_detail ";
    }*/

    // 마이페이지 판매 내역
    @GetMapping("/my/selling")
    public String mySelling() { return "/mypage/mypage_selling"; }

   /* // 마이페이지 구매 내역 상세페이지
    @RequestMapping(value = "/my/selling/{no}", method = {RequestMethod.GET})
    public String mySellingDetail(@PathVariable("no")Long no, Model model){
        model.addAttribute("id", no);
        return "/mypage_selling_detail ";
    }*/

    // 마이페이지 관심상품
    @GetMapping("/my/wish")
    public String myWish() { return "/mypage/mypage_wish"; }

    // 마이페이지 프로필 수정
    @GetMapping("/my/profile")
    public String myProfile() { return "/mypage/mypage_profile"; }

    // 마이페이지 탈퇴 페이지
    @GetMapping("/my/withdrawal")
    public String withdrawalpage() { return "/mypage/mypage_withdrawal"; }

    // 마이페이지 주소록
    @GetMapping("/my/address")
    public String myAddress() { return "/mypage/mypage_address"; }

    // 마이페이지 결제 정보
    @GetMapping("/my/payment")
    public String myPayment() { return "/mypage/mypage_payment"; }

    // 마이페이지 판매 정산 계좌
    @GetMapping("/my/account")
    public String myAccount() { return "/mypage/mypage_account"; }

    ///////////////////////////////////////////////////////////

    // 공지사항 리스트
    @GetMapping("/notice")
    public String NoticeList(){ return "/notice "; }

    // 공지사항 디테일 페이지
    @GetMapping("/notice_24/{id}")
    public String Notice(@PathVariable("id") Long id){ return "/notice_24 "; }

    // 검수기준 리스트
    @GetMapping("/auth_polic")
    public String InspectionList(){ return "/auth_polic "; }

    // 검수기준 의류
    @GetMapping("/auth_polic/str")
    public String streetwear(){return "/auth_polic_streetwear ";}

    // 검수기준 패션잡화
    @GetMapping("/auth_polic/acc")
    public String acc(){return "/auth_polic_accessories ";}

    // 검수기준 테크
    @GetMapping("/auth_polic/ele")
    public String elect() {return "/auth_polic_electronics ";}

    // 검수기준 라이프
    @GetMapping("/auth_polic/life")
    public String life() { return "/auth_polic_life ";}

    // 자주 묻는 질문
    @GetMapping("/faq")
    public String QnaList(){ return "/faq ";}

    // 자주 묻는 질문(이용정책)
    @GetMapping("/faq/policy")
    public String policy() { return "/faq_policy ";}

    // 자주 묻는 질문(공통)
    @GetMapping("/faq/common")
    public String common(){ return "/faq_common ";}

    // 자주 묻는 질문(구매)
    @GetMapping("/faq/buying")
    public String buying(){return "/faq_buying ";}

    // 자주 묻는 질문(판매)
    @GetMapping("/faq/selling")
    public String selling() {return "/faq_selling ";}

    ////////////////////////////////////////////////////////

    // 스타일 인기
    @GetMapping("/social/trending")
    public String style() {return "/style ";}

    // 스타일 hashtag
    @GetMapping("/social/tags/{tagName}")
    public String hashtag(@PathVariable("tagName") String tagName) {return "/hashtag ";}

    // 스타일 popular
    @GetMapping("/social/popular")
    public String popular() {return "/popular ";}

    // 스타일 following_empty
    @GetMapping("/social/following/empty")
    public String f_empty() {return "/following_empty ";}

    // 스타일 following
    @GetMapping("/social/following")
    public String following() {return "/following ";}

    // 스타일 프로필 (my/empty)
    @GetMapping("/social/myprofile/empty")
    public String m_empty() {return "/myprofile_empty ";}

    // 스타일 프로필 (my)
    @GetMapping("/social/myprofile")
    public String myprofile() {return "/myprofile ";}

    // 스타일 프로필 (my) 수정하기
    @GetMapping("/social/myprofile/edit")
    public String styleProfileEdit() { return "/style_profile_edit "; }

    // 스타일 프로필
    @GetMapping("/social/profile/{id}")
    public String profile(@PathVariable("id") Long id) {return "/profile ";}

    // 스타일 게시글 업로드
    @GetMapping("/social/upload")
    public String upload() {return "/upload ";}

    // 스타일 게시글 수정
    @GetMapping("/social/edit/{id}")
    public String styleEdit(@PathVariable("id") Long id) {return "/edit ";}

    // 스타일 업로드, 수정, 삭제..?
    @GetMapping("/social/upload_edit/delete")
    public String u_delete() {return "/upload_edit_delete ";}

    ///////////////////////////////////////////////////////

    // 샵 search 페이지
    @GetMapping("/search")
    public String adminList() { return "/product/shop_search"; }

    // 샵 product 페이지
    @GetMapping("/product")
    public String shopproduct() { return "/product/shop_product"; }

    @GetMapping("/kream/buying")
    public String userBuying() {
        return "shop_buying";
    }

    @GetMapping("/kream/selling")
    public String userSelling() {
        return "shop_selling";
    }

    @GetMapping("/kream/buycheck")
    public String userBuyCheck(@PathVariable("id") Long id, @PathVariable("size") String size) {
        return "/product/BuyCheck ";
    }

    @GetMapping("/kream/sellcheck")
    public String userSellCheck(@PathVariable("id") Long id, @PathVariable("size") String size) {
        return "/product/SellCheck ";
    }

    @GetMapping("/kream/buyfinish")
    public String userBuynowFinish(@PathVariable("id") Long id,  @PathVariable("price") Long price, @PathVariable("date") Long date) {
        return "/product/BuynowFinish ";
    }

    @GetMapping("/kream/sellfinish")
    public String userSellFinish(@PathVariable("productId") Long productId,@PathVariable("price") Long price,@PathVariable("date") Long date) {
        return "/product/SellFinish ";
    }

    @GetMapping("/kream/product_list")
    public String adminRegist() {
        return "/product/shop_register ";
    }

    @GetMapping("/kream/buyfinal")
    public String userBuyFinal(@PathVariable("id")Long id, @PathVariable("size")String size, @PathVariable("price") Long price, @PathVariable Long date,@PathVariable("checkId") Long checkId){
        return "/product/BuyFinal ";
    }

    @GetMapping("/kream/sellfinal")
    public String userSellFinal(@PathVariable("productId") Long productId,@PathVariable("size") String size,@PathVariable("price") Long price,@PathVariable("date") Long date,@PathVariable("checkId") Long checkId) {
        return "/product/SellFinal ";
    }



}
