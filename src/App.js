import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './Context/ProtectedRoute';
import CreateEventPage from './components/Event/CreateEventPage';
import EditEventPage from './components/Event/EditEventPage';
import EventDetailMedia from './components/Event/EventDetailMedia';
import EventDetailPage from './components/Event/EventDetailPage';
import EventParticipants from './components/Event/EventParticipants';
import Myevents from './components/Event/Myevent';
import Main_Layout from './components/Layout/HOME/Layout/Main_Layout';
import { Layout } from './components/Layout/Layout';
import CoupleEditDetailPage from './components/Profile/Edit/CoupleEditDetailsPage';
import EditUserDetailsPage from './components/Profile/Edit/EditUserDetailsPage';
import SignUpCouple from './components/Profile/SignUpCouples';
import SinglePerson from './components/Profile/SinglePerson';
import EmailVerified from './components/Profile/Verification/EmailVerified';
import VerifyEmail from './components/Profile/Verification/VerifyEmail';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Register';
import EventPage from './pages/EventPage';
import { Home } from './pages/Landing/Home';
import Main_Home from './pages/Main_Home';
import UserDetailPage from './pages/UserDetailPage';
import { loadUser } from './redux/actions/auth';
import { LOGOUT } from './redux/actions/types';
import store from './redux/store';
import setAuthToken from './utils/setAuthToken';
import VisitedUser from './pages/VisitedUser';
import RecentUser from './pages/RecentUser';
import NearUsers from './pages/NearUsers';
import OnlineUers from './pages/OnlineUers';
function App() {
const {isAuthenticated} = useSelector((state)=>state.auth);
let location = useLocation();
const { pathname } = location;
const navigate = useNavigate()
useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
  useEffect(() => {
    const token = localStorage.token
    if (token) {
      setAuthToken(token);    
    }
    store.dispatch(loadUser());

    window.addEventListener('storage', () => {
      if (!token){ 
        store.dispatch({ type: LOGOUT });
      }
    });
  }, []);

  useEffect(()=>{
if(isAuthenticated){
  navigate("/home")
}
  },[isAuthenticated])


  return (
    <>
    <Routes>
  <Route path='/' element={<Layout><Home/></Layout>} />
  <Route path="signup" element={<Layout><Signup /> </Layout>} />
   <Route path="login" element={<Layout><Login /></Layout>} />
   <Route path="forgot" element={<Layout><ForgotPassword /></Layout>} />
   <Route path="/single/:userId" element={<SinglePerson/>} />
   <Route path="/couple/:userId" element={<SignUpCouple/>} />
   <Route path="/verify_email" element={<Layout><VerifyEmail/></Layout>} />
   <Route path="/verified/:id" element={<Layout><EmailVerified/></Layout>} />
   <Route path="/forgot" element={<Layout><ForgotPassword/></Layout>} />
 
{/* USER  */}
<Route path="/user-detail" element={<Layout><ProtectedRoute><UserDetailPage /></ProtectedRoute></Layout>} />
<Route path="/edit-detail" element={<Layout><ProtectedRoute><EditUserDetailsPage /></ProtectedRoute></Layout>} />
<Route path="editcouple-detail" element={<Layout><ProtectedRoute><CoupleEditDetailPage/></ProtectedRoute></Layout>}/>


<Route path='/' element={<Main_Layout/>}>

{/* HOME */}
<Route path='/home' element={<ProtectedRoute><Main_Home/></ProtectedRoute>} />

{/* EVENTS */}
<Route path="/event-page" element={<ProtectedRoute><EventPage /></ProtectedRoute>} />
<Route path="/create_event" element={<ProtectedRoute><CreateEventPage /></ProtectedRoute>} />
<Route path="/event_edit/:id" element={<ProtectedRoute><EditEventPage /></ProtectedRoute>} />
<Route path='/event-detail/:id' element={<ProtectedRoute><EventDetailPage/></ProtectedRoute>} />
<Route path="/event-detail-media" element={<ProtectedRoute><EventDetailMedia /></ProtectedRoute>} />
<Route path="/my-event" element={<ProtectedRoute><Myevents/></ProtectedRoute>} />
<Route path="/event-participants" element={<ProtectedRoute><EventParticipants /></ProtectedRoute>} />
<Route path="/visited-users" element={<ProtectedRoute>< VisitedUser/></ProtectedRoute>} />
<Route path="/recentuser" element={<ProtectedRoute>< RecentUser/></ProtectedRoute>} />
<Route path="/nearusers" element={<ProtectedRoute>< NearUsers/></ProtectedRoute>} />
<Route path="/onlineusers" element={<ProtectedRoute><OnlineUers/></ProtectedRoute>} />

</Route>
   </Routes>
   
    </>
  )
}

export default App
