import { ListElement, Show, List } from "./FriendRequest.styles"

const FriendRequest = props => {
    const localToken = localStorage.getItem("token")

    const handleAcceptFriend = (e) => {
        e.preventDefault();
        const url = `https://motion.propulsion-home.ch/backend/api/social/friends/requests/${e.target.name}/`
            const requestBody = {              
                status: "A"     
            }
        const config = {
            method: "PATCH",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(requestBody)
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
            })
            .catch(error => console.log(error))
    }

    const handleRejectFriend = (e) => {
        e.preventDefault();
        const url = `https://motion.propulsion-home.ch/backend/api/social/friends/requests/${e.target.name}/`
            const requestBody = {              
                status: "R"         
           }
        const config = {
            method: "PATCH",
            headers: new Headers({
                "Authorization": `Bearer ${localToken}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(requestBody)
        }
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
            })
            .catch(error => console.log(error))
        }

        const displayedRequests = props.pending.length === 0 ?
                                    <ListElement>No pending requests</ListElement>
                                    : props.pending.map(request => {
                                        return (
                                            <ListElement key={request.id}>{request.requester.username}
                                                <div className='notification-buttons'>   
                                                    <button name={request.id} onClick={handleAcceptFriend}>✓</button>    
                                                    <button name={request.id} onClick={handleRejectFriend}>X</button> 
                                                </div>
                                            </ListElement>
                                     )
                                  });

    return (
            <Show>
                <button className='close'>X</button>
                <List>                  
                    {displayedRequests}
                </List>
            </Show>
    )
}

export default FriendRequest