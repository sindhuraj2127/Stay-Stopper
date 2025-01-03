import { Card } from "./CardGuidelines";
import './Guidelines.css';
import choose_hotel from './choosehotel.png';
import select_city from'./selectcity.png';
import select_dates from'./Dates.png';
import select_room from'./Rooms.png'
import select_guest from'./Numberofpeople.png';
import enter_details from './enter_details.png';
import sign_up from './sign_up.png';
import make_payment from './payment.png';


function Guidelines() {
  return (
    <div className="guidelines-main-container">
        <h1 className="guidelines-heading">GUIDELINES</h1>
        <hr className='line'></hr>
        <div className="row1">
        <Card
          imgSrc={select_city}
          imgAlt="Card Image 1"
          title="Select the city"
          description="Select your dream destination at the click of a button"
        />
        <Card
          imgSrc={choose_hotel}
          imgAlt="Card Image 1"
          title="Choose Hotel"
          description="Choose a hotel among the best hotels in the world"
        />
        <Card
          imgSrc={select_dates}
          imgAlt="Card Image 1"
          title="Choose Dates"
          description="Select your dates of stay and enjoy at your favorite hotel."
        />
        <Card
          imgSrc={select_room}
          imgAlt="Card Image 1"
          title="Select Rooms"
          description="Select the number of rooms based on the size of your group"
        />
        </div>

        <div className="row2">
        <Card
          imgSrc={select_guest}
          imgAlt="Card Image 1"
          title="Select Guests"
          description="Choose the number of guests including children and adults"
        />
        <Card
          imgSrc={sign_up}
          imgAlt="Card Image 1"
          title="Signup with us"
          description="Create an account by signing up with us!"
        />
        <Card
          imgSrc={enter_details}
          imgAlt="Card Image"
          title="Enter Details"
          description="Enter the details of the guests"
        />
        <Card
          imgSrc={make_payment}
          imgAlt="Card details"
          title="Make Payment"
          description="Make the payment either by cash or card"
        />
        </div>
      </div>
  );
}

export default Guidelines;