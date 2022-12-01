import emptyAvatar from '../../Assets/emptyAvatar.png';
import { PostContainer, PostHead, PostInfo, 
    PostFoot, PostSocial, PostImage,
UserAvatar, CommentSection } from "./Post.Styles";
import  Heart  from '../../Assets/heart.svg';
import redHeart from '../../Assets/redHeart.png'
import {nanoid} from 'nanoid';
import { TiPencil } from 'react-icons/ti';
import Collapsible from 'react-collapsible';
import { RxShare1 } from 'react-icons/rx';
import Comment from '../../Comment/Comment';
import { fetchPostComments } from '../../Redux/Slices/PostSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Post = ({ id, avatar, firstName, lastName, displayed, content,
                images, likes, likedByUser }) => {

    const localToken = localStorage.getItem("token");
    const dispatch = useDispatch();
    const displayedImages = (images !== []) ? images.map(imageObject =>// if images is not an
    // empty array of image objects, acces the image property (that's the source) and return images; 
    <PostImage src={imageObject.image} alt={content} key={nanoid()}></PostImage>) : null;

    // get comments for the post:
    useEffect(() => {
        dispatch(fetchPostComments(id));
    }, [])
    const postComments = useSelector(state => state.posts.postComments);
    // console.log(postComments);

    const handleLike = e => {
        const url = `https://motion.propulsion-home.ch/backend/api/social/posts/toggle-like/${id}/`;
        const config = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json; boundary=xyz",
                "Authorization": `Bearer ${localToken}`
            }),
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                let liked = document.getElementById(e.target.id);
                if (liked.src !== redHeart) {
                    liked.src = redHeart;
                } else {
                    liked.src = Heart;
                }
                return data.response
            })
            .catch(error => console.log(error))
    }

    return (
        <PostContainer>
            <PostHead>
                <UserAvatar className='post-avatar' src={avatar === null ? 
                    emptyAvatar : `${avatar}`} alt='user profile'></UserAvatar>
                <PostInfo>
                    <p className='post-paragraph'>{`${firstName} ${lastName}`}</p>
                    <p className='post-paragraph'>{displayed === 0 ? 'Just Now' : displayed}</p>
                </PostInfo>
            </PostHead>
            <div className='post-content'>{content}</div>
            <div className='post-image'>
                {displayedImages}
            </div>
            <PostFoot>
                <PostSocial>
                    <img src={likedByUser ? redHeart : Heart} id={id} alt='like icon' onClick={handleLike}></img>
                    <p className='post-paragraph'>Like</p>
                    <RxShare1 alt='share icon'/>
                    <p className='post-paragraph'>Share</p>
                </PostSocial>
                <p className='post-paragraph'>Likes: {likes}</p>
            </PostFoot>
            <CommentSection>
                <TiPencil alt='comment icon' className='comment-icon'/>
                    <Collapsible className='dropdown' trigger="Show/Hide Comments">
                        {postComments ? postComments.map(elem => <Comment key={nanoid()} 
                                                           avatar={elem.user.avatar}
                                                           user={elem.user.username}
                                                           content={elem.comment}
                                                  />
                        ): <p>Loading comments...</p>}
                    </Collapsible>
            </CommentSection>
        </ PostContainer>
    )
}

export default Post;