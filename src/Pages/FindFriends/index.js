import { useState, useEffect } from "react";
import OtherUserCard from "../../Components/OtherUserCard/OtherUserCard";
import { FindFriendsWrapper, Title, Grid } from "./FindFriends.styles";
import Header from '../../Components/Header/index'
import { nanoid } from "nanoid";
import search_icon from "../../Assets/search_icon.svg";

export const FindFriends = () => {

    const [users, setUsers] = useState([]);
    const localToken = localStorage.getItem("token");

    useEffect(() => {
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`
            })
        }
            const url = `https://motion.propulsion-home.ch/backend/api/users/?limit=400/`
            fetch(url, config)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsers(data.results)
            });
    }, [])

    const displayUsers = users.length !== 0 ? 
                         users.map(user => {
                            return <OtherUserCard key={nanoid()}
                                                id={user.id}
                                                avatar={user.avatar}
                                                username={user.username}
                                                first={user.first_name}
                                                last={user.last_name}/>
                        }) : <p>Loading Users...</p>
    return(
        <>
            <Header />
            <FindFriendsWrapper>
                <Title>
                    <h2>Find Friends</h2>
                    <form className="search-bar">
                        <img className="searchLogo" 
                             src={search_icon} 
                             alt="Motion logo"
                        />
                        <input className="searchField" 
                               type='text' 
                               placeholder='...Search Users'>
                        </input>
                    </form>
                </Title>
                <Grid>
                    {displayUsers}
                </Grid>
            </FindFriendsWrapper>
        </>
    )
}