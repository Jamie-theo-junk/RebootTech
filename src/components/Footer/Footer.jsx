import './Footer.css'
import { BsTelephone } from "react-icons/bs";

const Footer =()=>{

    return(
        <footer>
                <div className='footer-section'>
                    <div><BsTelephone /><p>Contact Me</p></div>
                    <div><BsTelephone /><p>Contact Me</p></div>
                    <div><BsTelephone /><p>Contact Me</p></div>
                </div>
                <div className='footer-section'>
                    <div><BsTelephone /><p>Contact Me</p></div>
                    <div><BsTelephone /><p>Contact Me</p></div>
                    <div><BsTelephone /><p>Contact Me</p></div>
                </div>
                <div className='footer-section'>
                    <div><BsTelephone /><p>Contact Me</p></div>
                    <div><BsTelephone /><p>Contact Me</p></div>
                    <div><BsTelephone /><p>Contact Me</p></div>
                </div>
        </footer>
    )
}
export default Footer