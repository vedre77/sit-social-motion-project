import { useState } from "react";
import Select from "react-select"
import { Form } from "./ProfileEdit.styles";
import { StandardButton } from '../../Styles/ButtonsStyles'
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import emptyAvatar from '../../Assets/emptyAvatar.png';

export const ProfileEdit = () => {

    // page path: profile/edit/

    const localToken = localStorage.getItem("token");
    const userInfo = useSelector(state => state.userData.user);

    const navigate = useNavigate();
    const [profileData, setProfileData] = useState(
        {email: userInfo.email,
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        username: userInfo.username,
        job: userInfo.job,
        location: userInfo.location,
        about_me: userInfo.about_me,
        likes1: userInfo.things_user_likes[0],
        likes2: userInfo.things_user_likes[1],
        likes3: userInfo.things_user_likes[2],
        likes4: userInfo.things_user_likes[3],
        likes5: userInfo.things_user_likes[4]
        }
    )

    const [avatar, setAvatar] = useState(null);
    const [updated, setUpdated] = useState(false);
    
    const handleChange = (event) => {
        setProfileData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleUpload = e => {
        const imageUrl = e.target.files;
        setAvatar(imageUrl[0]);
    }

    const updateProfile = e => {
        e.preventDefault();

        const modifiedLikes = {[profileData.likes1]: "keyword",
                               [profileData.likes2]: "keyword",
                               [profileData.likes3]: "keyword",
                               [profileData.likes4]: "keyword",
                               [profileData.likes5]: "keyword"
                              };

        console.log(profileData);

        const formData = new FormData();
        formData.append("first_name",profileData.first_name);
        formData.append("last_name", profileData.last_name);
        formData.append("job", profileData.job);
        formData.append("location", profileData.location);
        formData.append("about_me", profileData.about_me);
        if (avatar) {
            formData.append("avatar", avatar);
        }
        const url = "https://motion.propulsion-home.ch/backend/api/users/me/"
        const config = {
            method: "PATCH",
            headers: {                
                "Authorization": `Bearer ${localToken}`
            },
            body: formData,
        }
        
        fetch(url, config)
            .then(response => {
                if (response.ok) {
                    return response.json();
                  }
                throw new Error('Something went wrong');
            })
            .then(data => {
                setUpdated(true)
                setTimeout(() => {
                    setUpdated(false);
                    navigate('/userprofile');
                }, 2000)
                return data.response
            })
            .catch(error => alert('Please fill all required data.'));
        //separate request for things_user_likes:
        const requestBody = {
            email: profileData.email,
            username: profileData.username,
            things_user_likes: modifiedLikes
        }
                             
        const config2 = {
            method: "PATCH",
            headers: new Headers({
            "Authorization": `Bearer ${localToken}`,
            "Content-Type": "application/json"
            }),
            body: JSON.stringify(requestBody)
        }
        fetch(url, config2)
            .then(response => response.json())
            .catch(error => console.log(error))
    }

    return(
        <>
        <Header/>
            <Form>
                <h3>Edit your profile</h3>
                <img className="avatarimg" 
                                 src={userInfo.avatar ? userInfo.avatar : emptyAvatar} 
                                 alt="profile avatar"
                />
                <input type="text"
                       defaultValue={userInfo.email}
                       name="email" 
                       onChange={handleChange} 
                       placeholder='email'>
                </input>
                <input type="text"
                       defaultValue={userInfo.first_name}
                       name="first_name" 
                       onChange={handleChange} 
                       placeholder='First Name'>
                </input>
                <input type="text"
                       defaultValue={userInfo.last_name}
                       name='last_name' 
                       onChange={handleChange}
                       placeholder='Last Name'>
                </input>
                <input type="text"
                       defaultValue={userInfo.username}
                       name='username'
                       onChange={handleChange}
                       placeholder='Username'>
                </input>
                <input type="text"
                       defaultValue={userInfo.job}
                       name='job'
                       onChange={handleChange}
                       placeholder='Occupation'>
                </input>
                <input type="text"
                       defaultValue={userInfo.location}
                       name='location' 
                       onChange={handleChange}
                       placeholder='Location'>
                </input>
                <textarea type="text"
                       defaultValue={userInfo.about_me}
                       name='about_me' 
                       onChange={handleChange}
                       placeholder='About me...'>
                </textarea>
                <div className="user-likes">
                    <input type="text"
                        maxLength="20"
                        defaultValue={userInfo.things_user_likes[0]}
                        name='likes1'
                        onChange={handleChange}
                        placeholder='I like...'/>
                        <input type="text"
                        maxLength="20"
                        defaultValue={userInfo.things_user_likes[1]}
                        name='likes2' 
                        onChange={handleChange}
                        placeholder='I like...'/>
                        <input type="text"
                        maxLength="20"
                        defaultValue={userInfo.things_user_likes[2]}
                        name='likes3' 
                        onChange={handleChange}
                        placeholder='I like...'/>
                        <input type="text"
                        maxLength="20"
                        defaultValue={userInfo.things_user_likes[3]}
                        name='likes4' 
                        onChange={handleChange}
                        placeholder='I like...'/>
                        <input type="text"
                        maxLength="20"
                        defaultValue={userInfo.things_user_likes[4]}
                        name='likes5'
                        onChange={handleChange}
                        placeholder='I like...'/>
                </div>
                <input multiple type='file' accept='image/' onChange={e => handleUpload(e)}></input>
                <StandardButton type={"submit"} 
                                onClick={updateProfile}
                >{updated ? 'Updated!' : 'Update Profile'}</StandardButton>
            </Form>
        </>
    )
}