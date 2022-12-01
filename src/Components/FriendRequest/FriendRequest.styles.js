import styled from 'styled-components';

export const Show = styled.div`
    border: 1px solid lightgray;
    position: absolute;
    top: 0;
    right: .1em;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: .5em;
    min-width: 200px;
    min-height: 100px;
    background: white;

    .close {
        width: fit-content;
        position: absolute;
        top: .1em;
        right: .1em;
        z-index: 3;
        align-self: flex-end;
        margin: .5em;
        border-radius: 20px;
        border: none;
    }

`
export const List = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    
`

export const ListElement = styled.p`
    margin: .3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    color: black;
    text-decoration: none;
    background-color: white;

    .notification-buttons {
        display: flex;
        align-items: center;
    }

    button {
        padding: 0;
        height: 2em;
        width: 2.5em;
        border-radius: 20px;
        border: none;
        margin: 0 .5em;
    }
    
    :hover {
        background-color: #ddd;
    }
`