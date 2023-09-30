import "./Header.css";
import { faBed, faCab, faGear, faGlobe, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { DateRange } from 'react-date-range';
// import {useState} from 'react'
// import 'react-date-range/dist/styles.css'; 
// import 'react-date-range/dist/theme/default.css';

function Header() {
    // const [date, setDate] = useState([
    //     {
    //       startDate: new Date(),
    //       endDate: null,
    //       key: 'selection'
    //     }
    //   ]);
  return (
    <div className="headerSection">
      <div className="header">
        <div className="headerlist">           
            <div className="headItems active">
                <FontAwesomeIcon icon={faBed} />
                <p>Stays</p>
            </div>
            <div className="headItems">
                <FontAwesomeIcon icon={faPlane} />
                <p>Flights</p>
            </div>
            <div className="headItems">
                <FontAwesomeIcon icon={faGlobe} />
                <p>Flight + Hotels</p>
            </div>
            <div className="headItems">
                <FontAwesomeIcon icon={faCab} />
                <p>Car</p>
            </div>
            <div className="headItems">
                <FontAwesomeIcon icon={faGear} />
                <p>Attractions</p>
            </div>
            <div className="headItems">
                <FontAwesomeIcon icon={faTaxi} />
                <p>Airport taxi</p>
            </div>
        </div>

        <div className="headercontent">
            <h2>Find your next stay</h2>
            <p>Search low prices on hotels, homes and much more...</p>
        </div>

        
      </div>
    </div>
  )
}

export default Header
