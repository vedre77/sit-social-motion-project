import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HeaderNav, HomeLogo, PostsLogo, FindFriends, Notification, 
Avatar, BentoLogo, Options } from '../Header/Header.styles';
import postslogo from '../../Assets/posts_logo.svg';
import findFriendsLogo from '../../Assets/people_logo.svg';
import notificationLogo from '../../Assets/notification_logo.svg';
import { fetchLoggedInUser } from '../../Redux/Slices/UserSlice';
import { useSelector } from 'react-redux';
import bento from '../../Assets/bento_logo.svg';
import { useNavigate } from 'react-router-dom';
import  FriendRequest  from '../FriendRequest';
import emptyAvatar from '../../Assets/emptyAvatar.png';

const Header = () => {

    const [showNotification, setShowNotification] = useState();// toggling notif. menu
    const [pendingRequests, setPendingRequests] = useState([]);// list requests
    
    const localToken = localStorage.getItem("token");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        listFriendsRequests();
        // getMe();
    }, [])

    // fetch logged in user:
    useEffect(() => {
        dispatch(fetchLoggedInUser());
      }, [dispatch])
    const userInfo = useSelector(state => state.userData.user ? state.userData.user : '' );
 
    // get pending friend requests:
    const listFriendsRequests = () => {
        const url = "https://motion.propulsion-home.ch/backend/api/social/friends/requests/";
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`
            })
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                // console.log(data.results);
                setPendingRequests(data.results.filter(elem => elem.receiver.id === userInfo.id && elem.status === 'P'));
            })
            .catch(error => console.log(error))
    }

    return (
            <HeaderNav>
                <HomeLogo onClick={() => navigate('/')}>
                    <img src={require('../../Assets/logo.png')} alt="Home page icon"/>
                    <div>Motion</div>
                </HomeLogo>
                <PostsLogo onClick={() => navigate('/')}>
                    <img src={postslogo} alt="Posts icon"/>
                    <div>Posts</div>
                </PostsLogo>
                <FindFriends onClick={() => navigate('/FindFriends')}>
                    <img src={findFriendsLogo} alt="Find friends icon"/>
                    <div>Find Friends</div>
                </FindFriends>
                <Notification onClick={() => setShowNotification(!showNotification)}>
                    <img src={notificationLogo} alt="Notifications icon"/>                  
                        {showNotification && <FriendRequest pending={pendingRequests}/>}
                    <div className='notification-number'>{pendingRequests.length}</div>
                </Notification>
                <Avatar onClick={() => navigate('/userprofile')}>
                    <img src={userInfo.avatar ? userInfo.avatar : emptyAvatar } alt="Profile avatar"/>
                </Avatar>
                <BentoLogo>
                    <img src={bento} alt="Bento logo"/>
                    <Options>
                        <p></p>
                        <p></p>
                    </Options>
                </BentoLogo>  
            </HeaderNav>
    );
}
export default Header;