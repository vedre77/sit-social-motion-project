import emptyAvatar from '../../Assets/emptyAvatar.png';
import { Card } from './ProfileCardStyles.styles';

const ProfileCard = ({id, first, last}) => {

    const localToken = localStorage.getItem("token");
   
    const follow = () => {// request to follow 
        const url = `https://motion.propulsion-home.ch/backend/api/social/followers/toggle-follow//`
        
        const config = {
            method: "POST",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`
            }),
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
            })
            .catch(error => console.log(error))
    }

    const friendRequest = () => {
            const url = `https://motion.propulsion-home.ch/backend/api/social/friends/request//`
            const config = {
                method: "POST",
                headers: new Headers({
                    "Authorization": `Bearer ${localToken}`
                }),
                
            }
            fetch(url, config)
                .then(response => response.json())
                .then(data => {
                    console.log(data.results)
                })
                .catch(error => console.log(error))
    }

    return (
        <Card>
            <img className="card-avatar" src={emptyAvatar} alt='profile photo'></img>
            <p>{first}</p> <p>{last}</p>
            <button onClick={follow}>Follow</button>
            <button onClick={friendRequest}>Friend Request</button>
            <p>About Me</p>
            <button>About Me Array as mapped buttons</button>
        </Card>
    )
}

export default ProfileCard;