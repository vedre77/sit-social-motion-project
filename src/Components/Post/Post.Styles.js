import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 15px;
  padding: .5em;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  background-color: white;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 255, .2);
  width: 100%;

  .post-paragraph {
    margin: 0;
    padding: 0;
  }

  .post-content {
    display: flex;
    align-items: center;
    padding: .5em;
  }

`;

export const UserAvatar = styled.img`
    width: 20px;
    height: 20px;
`

export const PostHead = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  padding: .5em;
`;

export const PostInfo = styled.div`
  display: flex;
  padding: 0 .5em;
  flex-direction: column;
  
`;

export const PostFoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em;
  
`;

export const CommentSection = styled.section`
  border-top: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: .5em;
  padding-top: .5em;

  .comment-icon {
    align-self: flex-start;
    margin-right: .5em;
  }

  .Collapsible {
    width: 100%;
    padding: .5em;
  }
`

export const PostSocial = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  
`;

export const PostImage = styled.img`
  width: 100px;
  
`;