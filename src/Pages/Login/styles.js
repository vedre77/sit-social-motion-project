import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
`

export const PurpleOverlay = styled.div`
    background-color: rgba(165, 18, 228, 0.4);
    display: block;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
`

export const ContainerLeft = styled.div`
    position: relative;
    background-image: url('background_image.png');
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;    
    color: white; 

`

export const LeftContent = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
`
  
export const LogoContainer = styled.div`
    padding-top: 4em;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    line-height: 2em;

    .store-icons {
        width: 100%;
        height: 20%;
        display: flex;
        gap: 1em;
        align-items: center;
        justify-content: center;

        .google-store-icon {
            position: relative;
            top: .1em;
        }
    }
`
export const IconContainer = styled.div`
    display: flex;
    height: 20%;
    justify-content: center;
    gap: 2em;
    align-items: center;
`
export const Icon = styled.img`
    width: 40px;
    height: 40px;

`
export const CopyRight = styled.div`
    display: flex;
    flex-direction: row;
    text-align:center;
    font-size: medium;

`

export const ContainerRight = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const TopRight = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    gap: 2em;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
    border-radius: 10px;
    padding-top: 2em;
`

export const Submit = styled.form`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 100%;
    align-items: center;
    padding-top: 2em;
`

export const InputContainer = styled.div`
    width: 100%;
    height: 5em;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding-right: 2em;
`

export const Input = styled.input`
    border: 1px solid lightgray;
    border-radius: 15px;
    padding-left: .5em;
    height: 3em;
    width: 20em;

    :focus {
        outline: none;
    }
`

export const SignUp = styled.button`
    display: flex;
    background-color: #FFFFFF;
    border-radius: 30px;
    padding: .7em 1.3em;
    border: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
    font-weight: bold;

`
export const SignIn = styled.button`
    margin-top: 2em;
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    border-radius: 30px; 
    color: #FFFFFF;
    border-color: transparent;
    width: 12em;
    height: 4em;
    :hover{
        border: 2px solid lightblue;
    }
    :active{
        cursor: pointer;
    }
    
`
export const SignInIcons = styled.img`
    width: 30px;
    height: 30px;
`