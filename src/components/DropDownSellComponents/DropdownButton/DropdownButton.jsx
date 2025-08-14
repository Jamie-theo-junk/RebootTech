import React from 'react'
import "./DropdownButton.css"
import { FaChevronDown , FaChevronUp} from 'react-icons/fa'


const DropdownButton = ({children, open, toggle}) => {
  return (
    <div onClick={toggle}
     className="dropdown-btn">
      {children}
    </div>
  )
}

export default DropdownButton
