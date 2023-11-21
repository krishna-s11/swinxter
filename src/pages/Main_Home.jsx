import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/context";
import EventCard from "../components/Event/EventCard";
import api from "../utils/api";
const Main_Home = () => {
  const [event, setEvent] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [travel, setTravel] = useState([]);
  const { searchquery,setSavedCred } = useContext(Context);
  
 useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setSavedCred({long:longitude,lat:latitude})
    }
    function error() {
      console.log("Unable to retrieve your location");
    }
},[])

  const getEvent = async () => {
    const { data } = await api.get(`/events?q=${searchquery}`);
    const allEvents = data.data;
    console.log(allEvents);
    const verifyEvents = allEvents.filter((event) => event.isverify === true);
    setEvent(verifyEvents.reverse());
    verifyEvents.map((el)=> console.log(el?.location))
};

  useEffect(() => {
    getEvent();
  }, [searchquery]);

  console.log(event);

  return (
    <div className="home_page bg-black py-8 px-6 rounded-2xl">
      {/* event section starts */}
      {event.length === 0 ? (
        ""
      ) : (
        <div className="mb-20">
          <div className="flex justify-between flex-wrap gap-5 items-center mb-5 sm:mb-8">
            <h3 className="text-2xl sm:text-5xl leading-none font-bold">
              Events
            </h3>
            <Link to="/event-page" className="primary_btn !text-sm sm:!text-xl">
              View More
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
            {event.slice(0, 6).map((el, i) => (
              <div className="h-full bg-light-grey rounded-2xl">
              <EventCard key={i} event={el} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Main_Home;
