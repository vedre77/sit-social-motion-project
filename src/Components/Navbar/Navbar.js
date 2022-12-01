import { Navigation, Options } from "./Navbar.styles"
import search_icon from "../../Assets/search_icon.svg"

const Navbar = props => {

    return (
        <Navigation>
            <form className="searchBar">
                <img className="searchLogo" src={search_icon} alt="Motion logo"/>
                <input className="searchField" type='text' placeholder='...Search posts'></input>
            </form>
            <Options>
                <button className="likedButton" onClick={props.likedButtonHandle}>Liked</button>
                <button className="friendsButton"onClick={props.friendsButtonHandle}>Friends</button>
                <button className="followButton" onClick={props.followingButtonHandle}>Follow</button>
            </Options>
        </Navigation>

    )
   
}

export default Navbar;
