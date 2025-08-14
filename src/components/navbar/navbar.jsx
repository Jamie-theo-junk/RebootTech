import "./navbar.css"
import rebootTechLogo from '../../assets/rebootLogo.png'
import Dropdown from "../DropdownComponents/Dropdown/Dropdown"
import DropdownItems from "../DropdownComponents/DropdownItems/DropdownItems"
import { CgSearch } from "react-icons/cg";
import { useNavigate } from "react-router-dom";


const navbar = () => {
//   const phonesArray = [
//   ["Iphone 6", "Samsung s10", "Hauwei"],
//   ["Iphone 7", "Samsung s20", "Oppo"],
//   ["Iphone 8", "Samsung s21", "Nothing Phone"],
//   ["Iphone 10", "Samsung s22", "Xaoimi"],
//   ["Iphone 11", "Samsung s23", ""],
//   ["Iphone 12", "Samsung s24", ""],
//   ["Iphone 13", "Samsung a35", ""],
//   ["Iphone 14", "Samsung a55", ""],
//   ["All Iphones", " All Samsung", ""]
// ];


  const phonesArray = [
  ["Apple", "Hauwei", "All Phones"],
  ["Samsung", "OnePlus", ""],
  ["Oppo", "Nothing Phone", ""]
];

  const ComponentsArray = [
  ["Ryzen Cpu's", "Rtx Graphics", "Motherboards"],
  ["Intel Cpu's", "Amd Graphics", "Power Supplys"],
  ["Budget Cpu's", "Intel Graphics", "Cases"],
  ["High End Cpu's", "All Graphics", "Case fans"],
  ["All Cpu's", " ", ""],
  [" ", "Accessories", ""],
  ["Air Cpu fans", " ", ""],
  ["AIO Cpu fans", " ", ""],
  ["All Cpu fans", " ", ""]
];
  const DesktopLaptopArray = [
  ["Gaming Laptops", "Gaming Desktops", "Bugdet Desktops"],
  ["Macbooks", "Macs", "Mid Desktops"],
  ["Chromebooks", "All In One", "High End Desktops"],
  ["Work Laptops", "Office Desktops", " "],
  [" ", " ", "Budget Laptops"],
  ["Intel Laptops", "Intel Desktops", "Mid Laptops"],
  ["Amd Laptops", "Amd Desktops", "High End Laptops"],
  ["Rtx Laptops", "Rtx Desktops", " "]
  
];

const navigate = useNavigate();
const goHome = () =>{
  navigate("/")
}

  return (
      <nav>
        <section className="logo-section" onClick={goHome}>
           <img src={rebootTechLogo} className='logo' alt="reboot tech logo" />  
           <h1>Reboot Tech</h1> 
           </section>
        <Dropdown 
        id="phones-dropdown"
         buttonText="Phones"
      content={
  <div className="phone-grid">
    {phonesArray.map((row, rowIndex) => (
      <div className="phone-row" key={rowIndex}>
        {row.map((phone, colIndex) => (
          <DropdownItems  key={colIndex}
           onClick={() => navigate(`/searchCategory?search=${phone}`)}>
            {phone || " "}
          </DropdownItems>
        ))}
      </div>
    ))}
  </div>
}
        />
        
        <Dropdown 
          buttonText="Components"
          content={
  <div className="phone-grid">
    {ComponentsArray.map((row, rowIndex) => (
      <div className="phone-row" key={rowIndex}>
        {row.map((phone, colIndex) => (
          <DropdownItems key={colIndex}
          onClick={() => navigate(`/searchCategory?search=${phone}`)}>
            {phone || " "}
          </DropdownItems>
        ))}
      </div>
    ))}
  </div>
  }
  />

        <Dropdown 
          buttonText="Desktop&Laptops"
          content={
  <div className="phone-grid">
    {DesktopLaptopArray.map((row, rowIndex) => (
      <div className="phone-row" key={rowIndex}>
        {row.map((phone, colIndex) => (
          <DropdownItems key={colIndex}
          onClick={() => navigate(`/searchCategory?search=${phone}`)}>
            {phone || " "}
          </DropdownItems>
        ))}
      </div>
    ))}
  </div>
}
/>
<form class="search-bar">
  <input type="text" name="search"/>
  <button type="submit"><CgSearch size={20} color="white" /></button>
</form>

<h3 className="login">Login/Sign Up</h3>
         
        </nav>
  )
}

export default navbar