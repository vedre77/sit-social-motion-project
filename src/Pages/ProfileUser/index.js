import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import  { NavMenu, Cover, UserCard, 
    Profile, InnerWrapp, ProfileStandardButton,
UserLikes, ProfileLikesButton }  from "./ProfileUser.styles";
import Header from "../../Components/Header";
import coverImage from "../../Assets/backrgoundImage.png";
import { fetchLoggedInUser } from "../../Redux/Slices/UserSlice";
import { nanoid } from "nanoid";
import emptyAvatar from '../../Assets/emptyAvatar.png';

export const ProfileUser = () => {

    const dispatch = useDispatch();
    // fetch logged in user:
    useEffect(() => {
        dispatch(fetchLoggedInUser());
      }, [dispatch])
    const userInfo = useSelector(state => state.userData.user);
    const navigate = useNavigate();
    
    return(
        <>
            {userInfo && <Profile>
                <Header/>
                <Cover>
                    <img className="coverImage" src={coverImage} alt="Red cloudy skies"/>
                </Cover>
                <UserCard>
                    <InnerWrapp>
                        <div className="edit">
                            <img className="avatarimg" 
                                 src={userInfo.avatar ? userInfo.avatar : emptyAvatar} 
                                 alt="profile avatar"/>
                            <div className="name-location">
                                <p><strong>First Name:</strong> {userInfo.first_name}</p> <p><strong>Last Name:</strong> {userInfo.last_name}</p>
                                <p><strong>Location:</strong> {userInfo.location}</p>
                            </div>
                            <ProfileStandardButton className="editButton" 
                                            onClick={() => {
                                                navigate('/profile/edit/')
                                            }}
                            >Edit profile</ProfileStandardButton>
                        </div>
                        <div className="info">
                            <div className="about">
                                <p><strong>About Me:</strong></p>
                                {userInfo.about_me}
                            </div>
                            <UserLikes>
                                <p><strong>Things I like:</strong></p>
                                <div className="likes-list">
                                    {userInfo.things_user_likes.map(elem =>
                                    <ProfileLikesButton key={nanoid()}
                                    >{elem}</ProfileLikesButton>)}
                                </div>
                            </UserLikes>
                            <NavMenu>
                                <ProfileStandardButton>Posts</ProfileStandardButton>
                                <ProfileStandardButton>Likes</ProfileStandardButton>
                                <ProfileStandardButton>Friends</ProfileStandardButton>
                                <ProfileStandardButton>Followers</ProfileStandardButton>
                                <ProfileStandardButton>Following</ProfileStandardButton>    
                            </NavMenu>
                        </div>
                    </InnerWrapp>
                </UserCard>
            </Profile>}
        </>
        )
}