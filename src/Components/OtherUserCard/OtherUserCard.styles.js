import styled from "styled-components";

export const UsersCard = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  width: 100%;
  min-height: 20em;
  
`;

export const UsersInnerWrapp = styled.div`
    border: 2px solid lightgray;
    border-radius: 20px;
    width: 80%;
    max-width: 18em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .edit {
      border-bottom: 1px solid lightgray;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .5em;
      padding: .5em;
      width: 90%;
      margin: 0 auto;
    }

    .info {
      width: 100%;
    }

    img {
      max-width: 100px;
    }

    .about {
      border-bottom: 1px solid lightgray;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: .5em;
      padding: .5em;
      padding-bottom: 1em;
      text-align: center;
    }
`

export const UsersLikes = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5em;
  padding-bottom: 1em;
  margin-top: .5em;

  .likes-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5em;
    button {
      width: 50%;
      margin: 0 auto;
    }
  }
`

export const UsersNavMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2em;
  padding: 1em;

  button {
    width: fit-content;
    padding: .3em .5em;
    border-radius: 10px;
  }
`
