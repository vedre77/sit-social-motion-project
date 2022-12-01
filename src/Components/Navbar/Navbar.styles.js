import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  margin-top: 5em;
  padding-top: 1em;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  background-color: #F2F2F2;
  margin-bottom: 1em;
  

  .likedButton,
  .friendsButton,
  .followButton {
    border: none;
    background-color: transparent;
    font-family:'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    margin: 0 1em;
    font-weight: 400;
    line-height: 18.75px;
    padding-bottom: .5em;
    

    :active {
      border-bottom: 3px solid gray;
    }
    :focus {
      border-bottom: 3px solid lightgray;
      border-radius: 10px;
    }
  }

  .followButton {
    margin-right: 202px;
  }
  
  .searchBar{
    margin-left: 100px;
    display: flex;
  

    .searchLogo {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      
    }

    .searchField{
      border: none;
      width: fit-content;
      height: 1.2em;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      size: 16px;
      line-height: 18.75px;
      background: #F2F2F2;
    }
  }


`;

export const Options = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
`;

