import styled from "styled-components";
import { StandardButton } from "../../Styles/ButtonsStyles";

export const Profile = styled.div`
    position: relative;
`

export const ProfileStandardButton = styled(StandardButton)`
    padding: .5em .3em;
    width: 6em;
    background: linear-gradient(45deg, #C468FF, #6E91F6 );
    color: white;
`

export const ProfileLikesButton = styled(ProfileStandardButton)`
    padding: .1em .05em;
    width: 6em;
    background: white;
    color: black;
    border: 1px solid lightgray;
`

export const Cover = styled.nav`
    /* cover image */
    display: flex;
    align-items: center;
    min-width: 100%;
    min-height: 200px;
    overflow: hidden;
    margin-top: 4.5em;

.coverImage {
    width: 100%;
    margin: 0 auto;
} 
`;

export const UserCard = styled.nav`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 10em;
    width: 100%;
`

export const NavMenu = styled.nav`
    /* option buttons at the bottom */
    display: flex;
    justify-content: space-between;
    margin: 1em;
    width: 100%;
    gap: .2em;
    padding: 0 .5em;

    button {
        width: 20%;
    }
`

export const InnerWrapp = styled.div`
    width: 75%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    justify-content: center;
    padding: 1em;

    .edit {
        border: 1px solid lightgray;
        width: 30%;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.95);
        display: flex;
        padding: 1em;
        gap: .5em;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    p {
        display: flex;
        gap: .5em;
        align-self: flex-start;
        min-width: 10em;
        margin: .2em 0;
    }

    .name-location {
        margin: 1em 0;
        }
    }

    .avatarimg {
        max-width: 100px;
    }

    .info {
        width: 70%;
        background-color: rgba(255, 255, 255, 0.95);
        border-radius: 10px;
        margin-left: .2em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .about {
        margin-top: 2em;
        padding: .5em 1em;
        border: 1px solid lightgray;
        border-radius: 10px;
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: .5em;
        text-align: center;
    }
`

export const UserLikes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1em;
    gap: 1em;
    border: 1px solid lightgray;
    width: 75%;
    padding: .5em;
    border-radius: 10px;

    .likes-list {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: .5em;
    }
`