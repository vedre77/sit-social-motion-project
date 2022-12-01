import { Modal, ModalContent } from "./CreatePost.styles";
import { useState, useEffect } from "react";
import { PostCreateButton, CloseButton, 
CreatePostWrapper, CreatePostHead } from './CreatePost.styles';
import { fetchLoggedInUser } from '../../Redux/Slices/UserSlice';
import { useDispatch, useSelector } from "react-redux";
import emptyAvatar from '../../Assets/emptyAvatar.png';
import { UserAvatar } from "../Post/Post.Styles";

const CreatePost = () => {

    const [modal, showModal] = useState(false);
    const localToken = localStorage.getItem("token");
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();

    // get user on load:
    useEffect(() => {
        dispatch(fetchLoggedInUser());
    }, [dispatch]);
    const userName = useSelector(state => state.userData.user ? 
        state.userData.user.first_name :
         'user'
    );
    const userProfilePic = useSelector(state => state.userData.user ? 
    state.userData.user.avatar :
         null
    );

    const handleClickIn = () => { // click in the input field
        showModal(!modal);       
    }

    const handleCloseClick = () => {// click on close button in the modal
        showModal(!modal);       
    }

    const handlePostChange = e => {
        setContent(e.target.value);
    }
    
    const handleUpload = e => {
        const imageUrl = e.target.files;
        console.log(e.target.files)
        setImages(imageUrl[0]);
      }
      
      const handleNewPost = e => {
        e.preventDefault();
        const formData = new FormData();       
        formData.append("content", content);  
        formData.append("images", images);
        const url = "https://motion.propulsion-home.ch/backend/api/social/posts/"
        const config = {
            method: "POST",
            headers: {                
                "Authorization": `Bearer ${localToken}`
            },
            body: formData,
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                return data.response
            })
            .catch(error => console.log(error))
        }

    return (
        <CreatePostWrapper>
            <CreatePostHead>
                <UserAvatar className='post-avatar'
                            src={userProfilePic === null ?
                                emptyAvatar :
                                `${userProfilePic}`}
                            alt="user profile" />
                <form>
                    <input type='text' onClick={handleClickIn} placeholder={`What's on your mind ${userName}?`}></input>
                </form>
            </CreatePostHead>
            <Modal modal={modal}>
                <ModalContent >
                    <CloseButton onClick={handleCloseClick}>&times;</CloseButton>
                    <form onSubmit={handleNewPost}>
                        <textarea onChange={handlePostChange} name='content' value={content} placeholder={`What's on your mind ${userName} ?`}></textarea>
                        <input multiple type='file' accept='image/' onChange={e => handleUpload(e)}></input>
                        <PostCreateButton type={"submit"}>OK</PostCreateButton>
                    </form>
                </ModalContent>
            </Modal>
        </CreatePostWrapper>
    )
}

export default CreatePost;