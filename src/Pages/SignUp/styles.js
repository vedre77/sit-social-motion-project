import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`

export const SignupContainer = styled.div`
    width: 60%;

    input {
        
    }
`


export const SignInEmail = styled.button`
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    border-radius: 30px;
    padding: .5em 2em; 
    color: #FFFFFF;
    border-color: transparent;
`

export const InputContainerEmail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    margin-top: 4em;
    height: fit-content;
    width: 100%;
`
export const SignInIcons = styled.img`
    width: 25px;
    height: 25px;
`
export const Input = styled.input`
    border: 1px solid lightgray;
    /* border-bottom: 3px solid beige; */
    :focus {
        outline: none;
    }
`

export const SubmitForm = styled.form`
    display: flex;
    margin-top: 5em;
    flex-direction: column;
    align-items: center;
    height: 100%;
`