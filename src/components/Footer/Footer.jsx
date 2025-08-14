import './Footer.css'
import { BsTelephone } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Footer =()=>{
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

const navigate = useNavigate();
const goSell = () =>{
  navigate("/sell")
}

    return(
        <footer>
                <div className='footer-section left'>
                    <div className='footer-section-row'><BsTelephone style={{ marginRight: '10px' }} /><span>Contact Me</span></div>
                    <div className='footer-section-row'><FaPerson  style={{ marginRight: '10px' }}/><span>About Me</span></div>
                    <div className='footer-section-row' onClick={goSell}><FaMoneyBill1Wave style={{ marginRight: '10px' }}/><span>Start Selling</span></div>
                </div>
                <div className='footer-section center'>
                    <div className='footer-section-row'><p>Privacy Policy</p></div>
                    <div className='footer-section-row'><p>Terms and Conditions</p></div>
                </div>
                <div className='footer-section right'>
                    <div><h3>Email Us</h3></div>
                     <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} 
                     className='footer-section__form'
                     >
                       <input {...register("email")} type='email' placeholder="Email" />
                    <textarea {...register("message")} placeholder="Message" />
                  <input type="submit" />
                 </form>
                </div>
        </footer>
    )
}
export default Footer