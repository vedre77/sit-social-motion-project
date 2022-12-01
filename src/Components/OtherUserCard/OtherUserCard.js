import emptyAvatar from '../../Assets/emptyAvatar.png';
import  { ProfileStandardButton }  from "../../Pages/ProfileUser/ProfileUser.styles";
import { UsersCard, UsersInnerWrapp,
UsersNavMenu } from './OtherUserCard.styles';
// import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoggedInUser } from '../../Redux/Slices/UserSlice';

const OtherUserCard = props => {

    const dispatch = useDispatch();
    // fetch logged in user:
    useEffect(() => {
        dispatch(fetchLoggedInUser());
      }, [dispatch])
    const userInfo = useSelector(state => state.userData.user);

    const localToken = localStorage.getItem("token");
    // const [aboutUser, setAboutUser] = useState('');
    const [iFollowThisPerson, setIFollowThisPerson] = useState(false);
    // const navigate = useNavigate();

    // additional fetch of user data:
    useEffect(() => {
        const url = `https://motion.propulsion-home.ch/backend/api/users/${props.id}`
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`
            })
        }
        fetch(url, config)
        .then(response => response.json())
        .then(data => {
            // setAboutUser(data.about_me);
            setIFollowThisPerson(data.logged_in_user_is_following);
        })
        .catch(error => console.log(error))
    }, [])

    const sendFriendRequest = e => { // sending a friend request
        const url = `https://motion.propulsion-home.ch/backend/api/social/friends/request/${e.target.name}/`             
        const config = {
            method: "POST",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`
            })
        }
        fetch(url, config)
            .then(response => response.json())
            .then(alert('Friend request send'))// change with button text change!!!
            .catch(error => console.log(error))
    }
    
    const followUser = e => {
            const url = `https://motion.propulsion-home.ch/backend/api/social/followers/toggle-follow/${e.target.id}/`
                const requestBody = {
                    user: { 
                        email: userInfo.email,           
                        username: userInfo.username
                    }
                }
                const config = {
                    method: "POST",
                    headers: new Headers({
                        "Authorization": `Bearer ${localToken}`
                    }),
                    body: JSON.stringify(requestBody)
                }
                fetch(url, config)
                .then(response => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                        return;
                    }
                    return response.json();
                })
                .catch(error => console.log(error))
        }

    return (
        <UsersCard>
            <UsersInnerWrapp>
                <div className="edit">
                    <img className="avatarimg" 
                            src={props.avatar ? props.avatar : emptyAvatar} 
                            alt="profile avatar"/>
                    <div className="name-location">
                        <p><strong>First Name:</strong> {props.first}</p> <p><strong>Last Name:</strong> {props.last}</p>
                        {/* <p><strong>Username:</strong> {props.username}</p> */}
                    </div>
                </div>
                <div className="info">
                    {/* FEATURED ONLY IN PROFILE!!! */}
                    {/* <div className="about">
                        <p><strong>About Me:</strong></p>
                        {aboutUser}
                    </div> */}

                    {/* FEATURED ONLY IN PROFILE!!! */}
                    {/* <UsersLikes>
                        <p><strong>Things I like:</strong></p>
                        <div className="likes-list">
                            {userLikes.map(elem =>
                            <ProfileLikesButton key={nanoid()}
                            >{elem}</ProfileLikesButton>)}
                        </div>
                    </UsersLikes> */}
                    <UsersNavMenu>
                        <ProfileStandardButton>Profile</ProfileStandardButton> 
                        <ProfileStandardButton>Add Friend</ProfileStandardButton>
                        <ProfileStandardButton id={props.id} onClick={followUser}>
                            {iFollowThisPerson ? 'Following' : 'Follow'}
                        </ProfileStandardButton> 
                    </UsersNavMenu>
                </div>
            </UsersInnerWrapp>
        </UsersCard>
    )
}

export default OtherUserCard;