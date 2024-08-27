import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AdminLogin from './admin/sign/login';
import AdminPost from './admin/posts/AdminPost';
import Complete from './components/Complete';
import PostDistributorDetails from './admin/posts/PostDistributorDetails';
import PostSoilDetails from './admin/posts/PostSoilDetails';
import Register from './users/Register';
import SignIn from './users/SignIn';
import Soildetails from './users/posts/Soildetails';
import DistributorDetails from './users/posts/DistributorDetails';
import  UserDashboard from './users/posts/UserDashboard';

function App() {
  return (
   <Router>
    <Routes>
        <Route path='/' exact element={<Complete />}/>
        <Route path="/admin-dashboard" element={<AdminPost />} />
        <Route path="/post-soil-details" element={<PostSoilDetails />} />
        <Route path="/post-distributor-details" element={<PostDistributorDetails />} />
        <Route path='/admin' element={<AdminLogin />}/>
        <Route path='/post-selection' element={<AdminPost/>}/>
        <Route path="/users/register" element={<Register />} />
        <Route path="/users/login" element={<SignIn />} />
        <Route path='/users/user-dashboard' element={<UserDashboard />}/>
        <Route path="/users/soil-details" element={<Soildetails />} />
        <Route path="/users/distributor-details" element={<DistributorDetails />} />
    </Routes>
   </Router>    
  )
}

export default App
