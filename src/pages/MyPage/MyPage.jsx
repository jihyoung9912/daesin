import { FlexBox, FlexTextBox } from "components/Common";
import Searchbar from "components/Navbar/Searchbar";
import Profile from "components/MyPage/Profile";
import MyArticleCard from "components/MyPage/MyArticleCard";

const MyPage = () => {
  return (
    <>
      <FlexBox width="100%" column margin="2rem 0 0 0" gap="2.2rem">
        <Searchbar />
        <FlexBox width="100%" column gap="4rem" margin="2rem 0 0 0">
          <Profile />
          <FlexBox width="100%" gap="7%">
            <FlexBox width="90%" gap="1.25rem" column>
              <FlexTextBox fontSize="1.25rem">내가 쓴 리뷰</FlexTextBox>
              <MyArticleCard />
              <MyArticleCard />
            </FlexBox>
            <FlexBox width="90%" gap="1.25rem" column>
              <FlexTextBox fontSize="1.25rem">내가 쓴 홍보</FlexTextBox>
              <MyArticleCard />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};
export default MyPage;
