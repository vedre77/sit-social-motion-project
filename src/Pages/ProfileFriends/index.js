import ProfileCard from "../../Components/CreateFriendReq/ProfileCard";
import React, { useEffect, useState } from "react"
import { NavMenu, Cover } from '../ProfileUser/ProfileUser.styles'
import Header from "../../Components/Header"
import coverImage from "../../Assets/backrgoundImage.png"

const ProfileFriends = () => {
    const localToken = localStorage.getItem("token");
    const [friends, setFriends] = useState([]);

    useEffect(() => { // fetch friends onload of page and set to state
        const url = "https://motion.propulsion-home.ch/backend/api/social/friends/"
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`
            })
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                setFriends(data.results);
            })
            .catch(error => console.log(error))
    }, []);

    const friendsCards = friends.map(friend => <ProfileCard id={friend.id} 
                                                            first_name={friend.first_name} 
                                                            last_name={friend.last_name}/>)

    
    return (
        <>
            <Header />
            <Cover>
                <img src={coverImage} alt="" />
            </Cover>
            <NavMenu>
                <button className="postsButton">Posts</button>
                <button className="likesButton">Likes</button>
                <button className="friendsButton">Friends</button>
                <button className="followersButton">Followers</button>
                <button className="followingButton">Following</button>
            </NavMenu>
            {friendsCards}
        </>
    )
}

export default ProfileFriends;