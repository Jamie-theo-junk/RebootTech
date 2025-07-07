import "./dropdown.css"
import DropdownButton from "../DropdownButton/DropdownButton"
import DropdownContent from "../DropdownContent/DropdownContent"

const Dropdown = ({buttonText, content}) => {
    return (
    <div className="dropdown">
     <div className="drop-down-trigger">
    <DropdownButton className="drop-down-button">
      {buttonText}
    </DropdownButton>

    <DropdownContent className="drop-down-content">
      {content}
    </DropdownContent>
  </div>
    </div>
  )
}

export default Dropdown
