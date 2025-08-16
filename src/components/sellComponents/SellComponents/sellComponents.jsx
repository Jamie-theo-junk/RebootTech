import { useEffect, useState } from "react"
import PhoneSellComponent from "../PhoneSellComponents/phoneSellComponent"
import LaptopSellComponent from "../LaptopSellComponents/laptopSellComponent"
import DesktopSellComponent from "../DesktopSellComponents/desktopSellComponent"
import ComponentSellComponent from "../ComponentSellComponents/componentSellComponent"
import './SellComponents.css'

const sellComponents = ({value, category, subCategory}) => {
    return(
        <div className="sellComponent">
            {/* {console.log(category)}
            {category === "Phone" && <PhoneSellComponent />}
            {category === "Laptop" && <LaptopSellComponent />}
            {category === "Desktop" && <DesktopSellComponent />}
            {category === "Components" && <ComponentSellComponent />} */}
            <h3 className="sellComponent_title">Listing Information</h3>
            <p className="sellComponent_detail">More Descriptive, more detailed listings get the most success!</p>
            <div className="sellComponent_question">
                <div className="sellComponent_question-text">
                <p className="text">Title</p>
                <p className="astericks">*</p>
                </div>
                <input type="text" className="sellComponent_question-input" />
            </div>
                <div className="sellComponent_question">
                <div className="sellComponent_question-text">
                <p className="text">Price</p>
                <p className="astericks">*</p>
                </div>
                <input type="number" className="sellComponent_question-input"  />
            </div>
            <div className="sellComponent_question">
                <div className="sellComponent_question-text">
                <p className="text">Description</p>
                <p className="astericks">*</p>
                </div>
                <textarea type="text" className="sellComponent_question-textarea" />
            </div>
        </div>
    )
}

export default sellComponents