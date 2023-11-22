import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import api from '../utils/api'
import UserCard from '../components/Cards/UserCard';
import FriendCard from '../components/Cards/FriendCard';

const MyFriends = () => {
    const [users,setUsers] = useState([]);
    const {user} = useSelector((state)=>state.auth);
    const [userInfo,setUserInfo]=useState(user);

    const getRecentUsers = async () => {
        let userArr = [];
        const { data } = await api.get(`/recentusers`);
        data.map(d => {
            if(d._id !== userInfo._id){
                userArr.push(d);
            }
        })
        setUsers(userArr);
    }

    useEffect(() => {
        getRecentUsers();
    },[])

    console.log(users);

  return (
    <div className="home_page bg-black py-8 px-6 rounded-2xl">
      <div className="mb-20">
        <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
        <h3 className="text-2xl sm:text-5xl leading-none font-bold">
           My Friends
          </h3>
          {/* <Link to="/event-page" className="primary_btn !text-sm sm:!text-xl">
            View More
          </Link> */}
        </div>
        <div style={{display: "flex", flexWrap: "wrap",marginTop: "50px"}}>
          {/* <FriendCard /> */}
          <p>No friends yet</p>
        </div>
      </div>
  </div>
  )
}

export default MyFriends