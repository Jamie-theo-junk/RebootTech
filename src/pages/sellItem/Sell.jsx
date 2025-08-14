import { useNavigate } from "react-router-dom";
import { FaLaptop } from "react-icons/fa";
import { PiDesktopFill } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdCable } from "react-icons/md";
import './Sell.css'
import Dropdown from "../../components/DropDownSellComponents/Dropdown/Dropdown"
import DropdownItems from "../../components/DropDownSellComponents/DropdownItems/DropdownItems"

function Sell(){
const navigate = useNavigate();
const goHome = () =>{
  navigate("/")
}

const appleArray = [
  "iPhone SE",
  "iPhone 15",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",
  "iPhone 16",
  "iPhone 16 Plus",
  "iPhone 16 Pro",
  "iPhone 16 Pro Max",
  "Other"
];

const androidArray = [
  "Samsung",
  "Hauwei",
  "Xiaomi",
  "Oppo",
  "Other"
];
const miscArray = [
  "Nokia",
  "Blackberry",
  "Other"
];

const laptop =[
    "Gaming laptop",
    "Business Laptop"
]

const appleLaptop = [
    "Macbook Air",
    "Macbook",
    "Macbook Pro",
]

const otherLaptop = [
    "Chromebook",
    "Other"
]

const desktops = [
    "Gaming pc",
    "Business pc"
    
]
const otherDesktop = [
    "2 in 1",
    "Macs"
]

const cpuComponents =[
    "Ryzen Cpu's",
    "Intel Cpus's"
    
]

const cpuCoolingFans =[
    "Ryzen Am4 Fans",
    "Ryen Am5 Fans",
    "Intel Fans"
    
]

const GraphicComponents =[
    "Ryzen Gpu's",
    "Intel Gpu's",
    "Nvidia Gpu's"
]

const otherComponents = [
    "Case",
    "Motherboard",
    "Case Fan",
    "accessories"
]




    return(
        <div>
            <section>
                <h2> What are you trying to sell? </h2>
            </section>
            <section className="sell_middle-section">
<Dropdown
  buttonText={
    <div className="sell_card phone">
      <IoPhonePortraitOutline />
      <p>Phone</p>
    </div>
  }
  content={
    <>
    <div className="sell_card-dropdown">
    <div className="sell_card-dropdown-category">
        <div className="sell_card-title">
        <h3>Apple</h3>
        </div>
        <div className="sell_card-items">
      {appleArray.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}

        >
          {phone}
        </DropdownItems>
      ))}
      </div>
    </div>
    <div className="sell_card-dropdown-category">
        <h3 className="sell_card-title">Android</h3>
         
      {androidArray.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}
        >
          {phone}
        </DropdownItems>
      ))}

      
      </div>

      <div className="sell_card-dropdown-category">
        <div className="sell_card-title">
        <h3>Misc</h3>
        </div>
        <div className="sell_card-items">
      {miscArray.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}

        >
          {phone}
        </DropdownItems>
      ))}
      </div>
    </div>
      </div>
    </>
  }
/>

             <Dropdown
            buttonText={
            <div className="sell_card laptop">
                    <FaLaptop />
                    <p>Laptop</p>
                </div>
            }
content={
    <>
    <div className="sell_card-dropdown">
    <div className="sell_card-dropdown-category">
        <div className="sell_card-title">
        <h3>Windows</h3>
        </div>
        <div className="sell_card-items">
      {laptop.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}

        >
          {phone}
        </DropdownItems>
      ))}
      </div>
    </div>
    <div className="sell_card-dropdown-category">
        <h3 className="sell_card-title">Macbooks</h3>
         
      {appleLaptop.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}
        >
          {phone}
        </DropdownItems>
      ))}

      
      </div>

      <div className="sell_card-dropdown-category">
        <div className="sell_card-title">
        <h3>Misc</h3>
        </div>
        <div className="sell_card-items">
      {otherLaptop.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}

        >
          {phone}
        </DropdownItems>
      ))}
      </div>
    </div>
      </div>
    </>
  }
            />

             <Dropdown
            buttonText={
                <div className="sell_card desktop">
                    <PiDesktopFill />
                    <p>Desktop</p>
                </div>
            }
            content={
    <>
    <div className="sell_card-dropdown">
    <div className="sell_card-dropdown-category">
        <div className="sell_card-title">
        <h3>Windows</h3>
        </div>
        <div className="sell_card-items">
      {desktops.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}

        >
          {phone}
        </DropdownItems>
      ))}
      </div>
    </div>
    <div className="sell_card-dropdown-category">
        <h3 className="sell_card-title">Other Desktop</h3>
         
      {otherDesktop.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}
        >
          {phone}
        </DropdownItems>
      ))}

      
      </div>
      </div>
    </>
  }
            />

             <Dropdown
            buttonText={
                <div className="sell_card component">
                    <MdCable />
                    <p>Components</p>
                </div>
            }
            
content={
    <>
    <div className="sell_card-dropdown">
    <div className="sell_card-dropdown-category">
        <div className="sell_card-title">
        <h3>Cpu's</h3>
        </div>
        <div className="sell_card-items">
      {cpuComponents.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}

        >
          {phone}
        </DropdownItems>
      ))}
      </div>
    </div>
    <div className="sell_card-dropdown-category">
        <h3 className="sell_card-title">Gpu's</h3>
         <div className="sell_card-items">
      {GraphicComponents.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}
        >
          {phone}
        </DropdownItems>
      ))}
      </div>
      </div>

      <div className="sell_card-dropdown-category">
        <div className="sell_card-title">
        <h3>Other</h3>
        </div>
        <div className="sell_card-items">
      {otherComponents.map((phone) => (
        <DropdownItems
          onClick={() => navigate(`/searchCategory?search=${phone}`)}

        >
          {phone}
        </DropdownItems>
      ))}
      </div>
    </div>
      </div>
    </>
  }
            />
            </section>
        </div>
    );
}

export default Sell