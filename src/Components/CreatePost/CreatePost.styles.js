import styled from "styled-components";
import { StandardButton } from "../../Styles/ButtonsStyles";
import { PostHead } from "../Post/Post.Styles";

export const CreatePostWrapper = styled.div`
  border: 1px solid lightgray;
  height: fit-content;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 255, .2);
`

export const CreatePostHead = styled(PostHead)`
  display: flex;
  width: 100%;
  height: fit-content;
  border-radius: 10px;

  input {
    width: 20em;
    height: 2em;
    text-align: center;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  img {
    width: 50px;
    height: 50px;
  }
`

export const Modal = styled.div`
  display: ${props => props.modal === false ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`
export const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 2em;
  border: 1px solid #888;
  border-radius: 20px;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 2em;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    height: 50%;
    margin-top: 20%;

    textarea {
      height: 50%;
      padding-left: .3em;
      padding-top: .2em;
      width: 90%;
      border-radius: 5px;
      font-family: 'Segoe UI', 'Open Sans','Helvetica Neue',sans-serif;
    }
  }

  input::file-selector-button {
    padding: .5em;
    border-radius: 15px;
    border:none;
    cursor: pointer;
    background: ${props => props.background};
  }
`

export const PostCreateButton = styled(StandardButton)`
  padding: .5em 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #C468FF, #6E91F6 );
  color: white;
`

export const CloseButton = styled.button`
  background: linear-gradient(45deg, #C468FF, #6E91F6 );
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  padding-bottom: .2em;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  
`