import Post from '../../Components/Post';
import { PostsPage } from './Posts.Styles';
import CreatePost from '../../Components/CreatePost';
import { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFollowingPosts, fetchLikedPosts,
fetchFriendPosts } from '../../Redux/Slices/PostSlice';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Posts = () => {

    const localToken = localStorage.getItem("token");
    // console.log(localToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [display, setDisplay] = useState(false);

    // check for token and default load following posts:
    useEffect(() => {
        if (localToken === null) {
            navigate('/login');
        } else {
            dispatch(fetchFollowingPosts());
            setDisplay('following');
        }
      }, [])

    const followingPosts = useSelector(state => state.posts.followingPosts ?
        state.posts.followingPosts.results : 
        state.posts.followingPosts
    );
    const likedPosts = useSelector(state => state.posts.likedPosts ?
        state.posts.likedPosts.results : 
        state.posts.likedPosts
    );
    const friendPosts = useSelector(state => state.posts.friendPosts ?
        state.posts.friendPosts.results : 
        state.posts.friendPosts
    );

    const displayFollowingPosts = () => {
        setDisplay('following');
    }
    const displayLikedPosts = () => {
        dispatch(fetchLikedPosts());
        setDisplay('liked');
    }
    const displayFriendPosts = () => {
        dispatch(fetchFriendPosts());
        setDisplay('friends');
    }
    
    // set created time and return current posts:
    const displaySelectedPosts = array => {
        return array.map(elem => {
            // console.log(elem);
            let displayed = 0;
            if (elem.created) {
                let now = new Date();
                let past = new Date(elem.created);
                let differenceSec = (Math.round((now - past) / 1000));
                if (differenceSec < 60) {
                    displayed = `${differenceSec} seconds ago`;
                } else if (differenceSec > 60 && differenceSec < 3600) {
                    let minutes = Math.round(differenceSec / 60);
                    displayed = `${minutes} minutes ago`;
                } else if (differenceSec >= 3600 && differenceSec < 86400) {
                    let hours = Math.round(differenceSec / 3600);
                    displayed = `${hours} hours ago`;
                } else {
                    const months = ["January", "February", "March", "April", 
                    "May", "June", "July", "August", "September", "October", "November", "December"];
                    let month = months[past.getMonth()];
                    let date = past.getDate();
                    let pastYear = past.getFullYear();
                    let currentYear = now.getFullYear();
                    if (pastYear === currentYear) {
                        displayed = `${month} ${date}`
                    } else {
                        displayed = `${month} ${date} ${pastYear}`
                    }
                }
            }

            return ( 
                <Post id={elem.id}
                       key={nanoid()}
                       avatar={elem.user.avatar}
                       firstName={elem.user.first_name}
                       lastName={elem.user.last_name}
                       displayed={displayed}
                       content={elem.content}
                       images={elem.images}
                       likes={elem.user.amount_of_likes}
                       likedByUser={elem.logged_in_user_liked}
                />
            )
        })    
    }

    return (
        <>
            <Header />
            <Navbar 
                likedButtonHandle={displayLikedPosts}
                friendsButtonHandle={displayFriendPosts}
                followingButtonHandle={displayFollowingPosts}
            />
            <PostsPage>
                <CreatePost />
                {followingPosts && display === 'following' &&
                displaySelectedPosts(followingPosts)}
                {likedPosts && display === 'liked' &&
                displaySelectedPosts(likedPosts)}
                {friendPosts && display === 'friends' &&
                displaySelectedPosts(friendPosts)}
                {!display && <p className='no-posts'>NO POSTS...</p>}
            </PostsPage>
        </>
    )
}

export default Posts;