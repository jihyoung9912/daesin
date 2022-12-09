import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostContainer = styled.div`
  width: 70%;
  height: 6.5rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 1px 2px 3px 1px #e0e0e0;
`;

const ReviewPostTitle = styled.p`
  font-size: 1.15rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

const ReviewPostContent = styled.p`
  margin-bottom: 0.4rem;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  color: #717171;
`;

// const ReviewPostDate = styled.span`
//   font-size: 1rem;
//   font-weight: 500;
//   margin-right: 1.5rem;
// `;

const ReviewPostCommentCnt = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const ReviewPostList = (props) => {
  const navigate = useNavigate();
  return (
    <PostContainer onClick={() => navigate(`/review/${props.id}`)}>
      <ReviewPostTitle>{props?.title}</ReviewPostTitle>
      <ReviewPostContent>{props?.content}</ReviewPostContent>
      {/* <ReviewPostDate>{props?.update_at?.split("/")[0]}</ReviewPostDate> */}
      <ReviewPostCommentCnt>{props?.date}</ReviewPostCommentCnt>
    </PostContainer>
  );
};

export default ReviewPostList;
