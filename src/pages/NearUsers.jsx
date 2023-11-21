import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux";
import api from '../utils/api'
import UserCard from '../components/Cards/UserCard';

const NearUsers = () => {
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
          {/* <Link to="/event-page" className="primary_btn !text-sm sm:!text-xl">
            View More
          </Link> */}
        </div>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {/* {event.slice(0, 6).map((el, i) => (
            <div className="h-full bg-light-grey rounded-2xl">
            <EventCard key={i} event={el} />
            </div>
          ))} */}
           {
            users.map((user,i) => (
                <UserCard key={i} userInfo={user}/>
            ))
          }
        </div>
      </div>
  </div>
  )
}

export default NearUsers