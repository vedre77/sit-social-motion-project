
import { Routes, Route } from 'react-router-dom';
import Posts from './Pages/Posts/index';
import Login from './Pages/Login/index';
import { SignUp } from './Pages/SignUp/index';
import { ProfileUser } from './Pages/ProfileUser/index';
import { ProfileEdit } from './Pages/ProfileEdit/index';
import  ProfileFriends  from './Pages/ProfileFriends/index';
import { FindFriends } from './Pages/FindFriends/index';

function App() {
  return (
    <Routes >
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/' element={<Posts />} />
      <Route path='/userprofile' element={<ProfileUser />} />
      <Route path='/profile/edit' element={<ProfileEdit />} />
      <Route path='/profilefriends' element={<ProfileFriends />} />
      <Route path='/findfriends' element={<FindFriends />} />
    </Routes>

  );
}

export default App;
