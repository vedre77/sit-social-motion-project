import styled from "styled-components"; 

export const HeaderNav = styled.div`
    min-width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: white;
    font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
`
export const HomeLogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 70px;
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.694);
    height: 100%;

    img {
        width: 26px;
        height: 26px;
        margin-right: 12px;
    }
`
export const PostsLogo = styled(HomeLogo)`
    img {
        height:100%;
        margin-left: 113px;
    }

    div {
        font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.74)
    }
`
export const FindFriends = styled(HomeLogo)`

  height:100%;
  margin-left: 73px;
  cursor: pointer;

  img {
    margin-right: 18px;
    opacity: 35%;
  }

  div {
    font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.74);
  }

`
export const Notification = styled.div`

    position: relative;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: 50px;
    display: flex;

    img {
        display: flex;
        position: absolute;
        flex-direction: row;
        align-items: center;
        margin-left: auto;
        opacity: 35%;
        cursor: pointer;
    }

    .notification-number {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: white;
        background: linear-gradient(45deg, #C468FF, #6E91F6 );
        width: 21px;
        height: 21px;
        border-radius: 10px;
        margin-bottom: 15px;
        margin-left: 15px;
    }

`
export const Avatar = styled(HomeLogo)`
    margin-right: 30px;
    margin-left: 12px;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
`

export const BentoLogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 50px;
    width: 40px;
    height: 40px;
    opacity: 40%;
`

export const Options = styled.div`
    border: 1px solid green;
`