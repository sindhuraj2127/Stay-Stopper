import { Card } from "./CardOptions";
import './AdminOptions.css';
// import choose_hotel from './choosehotel.png';
// import select_city from'./selectcity.png';
// import select_dates from'./Dates.png';
// import select_room from'./Rooms.png'
// import select_guest from'./Numberofpeople.png';
// import enter_details from './enter_details.png';
// import sign_up from './sign_up.png';
// import make_payment from './payment.png';
import add_hotel from './addhotel.png';
import delete_hotel from './deletehotel.png'
import {useNavigate} from "react-router-dom";

function AdminOptions() {

    const navigate=useNavigate()

    // const [action,setAction] = useState("Sign Up");
    const AdminNew=()=>{
      navigate("/add-hotel-ADMIN",{})
    }
    const Admindelete=()=>{
      navigate("/delete-hotel-ADMIN",{})
    }
  return (
    <div className="guidelines-container">
        <h1 className="guidelines-heading">Admin options</h1>
        <hr className='line'></hr>
        <div className="main-options" >
            <div className="option1" onClick={AdminNew}>
              <Card 
                imgSrc={add_hotel}
                imgAlt="Card Image 1"
                title="Add a new Hotel"
                description="Add the details of a new hotel"
              />
            </div>
            <div className="option2" onClick={Admindelete}>
                <Card
                  imgSrc={delete_hotel}
                  imgAlt="Card Image 1"
                  title="Delete a Hotel"
                  description="Delete an existing hotel option"
                />
            </div>
        </div>
      </div>
  );
}

export default AdminOptions;