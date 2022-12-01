import styled from "styled-components";

export const Form = styled.form`
    
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    width: 90%;
    margin: 8em auto 2em auto;
    padding: 1em 0;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    input::file-selector-button {
        padding: .5em;
        border-radius: 15px;
        border:none;
        cursor: pointer;
        background: ${props => props.background};
    }
    
    input {
        border: none;
        border: 1px solid lightgray;
        border-radius: 10px;
        padding: .5em;
        width: 50%;
        /* box-shadow: 10px 5px 5px lightgrey; */

    }

    textarea {
        border: 1px solid lightgray;
        padding: .5em;
        min-height: 9em;
        border-radius: 10px;
        min-width: 25em;
        width: 50%;
    }

    .dropdown-container {
        text-align: center;
        min-height: 100px;
        min-width: 300px;
        max-width: 400px;
    }

    .dropdown-container > input { // make it work :)
        box-shadow: none;
    }

    button {
        width: 10em;
        padding: .5em;
    }

    .avatarimg {
        max-width: 100px;
        border: 1px solid lightgray;
        border-radius: 75px;
    }

    .user-likes {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: .5em;
        width: 50%;

        input {
            width: 75%;
        }
    }

`;