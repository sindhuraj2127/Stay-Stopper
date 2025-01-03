import "./hotel.css";
import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../../components/navbar/Navbar";
// import Header from "../../components/header/Header";
// import MailList from "../../components/mailList/MailList";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Reserve from "../reserve";

const Hotel = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [hotels,setHotels]=useState({});
  const [login,setlogin]=useState(false)
  const[dates,setdates]=useState(true)
  const[photos,setPhotos]=useState();
  const hotelid=location.pathname.split("/")

  useEffect(()=>{
    getHotel()
  },[])
  const id=hotelid[2]
  useEffect(()=>{
    const day=localStorage.getItem("datediff");
    if(day === "0"){
      setdates(true)
    }
    else{
      setdates(false)
    }
  })
  useEffect(()=>{
    const datecout=localStorage.getItem('datediff');
    if(dates){
      localStorage.setItem('hotelprice',hotels.price)
      localStorage.setItem('totalprice',hotels.price)
    }
    else{
      localStorage.setItem('hotelprice',datecout*hotels.price)
      localStorage.setItem('totalprice',hotels.price)
    }
  })
  const getHotel = async () => {
    // let resp = await fetch(`https://stay-spotterbackend-1srfzmu1b-anagha-bijus-projects.vercel.app/Hotel/getHotel/${hotelid[2]}`);
    let resp = await fetch(`https://stayspotterback.onrender.com/Hotel/getHotel/${hotelid[2]}`);
    let result = await resp.json();
    setHotels(result); 
    setPhotos(result.photos)

  };

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  useEffect(()=>{
    if(localStorage.getItem('isLogin')){
      setlogin(true)
    }
    else{
      setlogin(false)
    }
  })

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
const hadleclick=()=>{
  if(localStorage.getItem("isLogin")){
    setOpenModel(true)
  }
  else{
    navigate("/sign-up")
  }
}
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Header type="list" /> */}
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].filepath} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{hotels?.name}</h1>
          <hr className="hi"></hr>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotels?.address}</span>
          </div>
          <span className="hotelDistance">
            {hotels?.distance}
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.filepath}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                {hotels?.decs}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {dates ? 1 :localStorage.getItem("datediff")}-night stay!</h1>
              <h2 >
                <b>Rs{dates? hotels.price :hotels.price*localStorage.getItem('datediff')}</b> ({dates ? 1 :localStorage.getItem("datediff")} nights)
              </h2>
              <button onClick={hadleclick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id}/>}
      <Footer />
    </div>
  );
};

export default Hotel;