import styled from "styled-components";

export const FindFriendsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Grid = styled.div`
    width: 75%;
    margin: 0 auto;
    margin-top: 15em;
    display: grid;   
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 1em;
    padding: 1em;
`

export const Title = styled.div`
    position: fixed;
    top: 5.5em;
    background-color: white;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding-bottom: 1em;

    .search-bar {
        display: flex;
        gap: 1em;
    }

    input {
        padding: .2em;
        padding-left: 1em;
        border-radius: 10px;
        border: 1px solid lightgray;
    }
`