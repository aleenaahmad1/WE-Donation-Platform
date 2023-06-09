import DonationCards from './DonationCards'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Navbar';
import {useState, useEffect} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Searching from './Searching';


export default function Donationinfo() {
  const [filteredOrg, setFilteredOrg] = useState(false)

  const [causes, setCauses] = useState([])
  const [selectedCause, setSelectedCause] = useState("")

   //displaying cause at dropdown
   const [selectedOption, setSelectedOption] = useState('Cause');
   
    useEffect(()=>{
        fetch('http://localhost:8080/api/causes')
        .then(response => response.json())
        .then(data => setCauses(data))
        .catch(error => console.error(error))
    },[]);
    

    const handleClick = (eventKey) => {
        setFilteredOrg(true)
        setSelectedCause(eventKey)
        setSelectedOption(eventKey)
    }
    return (
      <>
       <section>
          <h5 className="display-6 text-center my-5">Access authentic and reliable information of charity organisations all across Pakistan, 
              all at one place.</h5>
        <label>Filter by Cause:</label>
          <Dropdown onSelect={handleClick}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedOption}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            causes.map((causes,index) =>{
                                return(
                                    <>
                                    <Dropdown.Item key={index} eventKey={causes.cause} id={`org${index}`}>{causes.cause}</Dropdown.Item>
                                    </>
                                )
                            })
                        }
                    </Dropdown.Menu>
            </Dropdown>
          {/* <Searching filteredOrg={filteredOrg} setFilteredOrg={setFilteredOrg}></Searching> */}
          <DonationCards filteredOrg= {filteredOrg} setFilteredOrg={setFilteredOrg} selectedCause={selectedCause} selectedOption={selectedOption}></DonationCards> 
       </section>
      </>
    )
}