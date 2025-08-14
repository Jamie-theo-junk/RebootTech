import "./dropdown.css"
import DropdownButton from "../DropdownButton/DropdownButton"
import DropdownContent from "../DropdownContent/DropdownContent"

const Dropdown = ({buttonText, content,bgColor }) => {
    return (
    <div className="dropdown-sell"
    style={{ backgroundColor: bgColor }}>
     <div className="drop-down-trigger">
    <DropdownButton className="drop-down-sell-button">
      {buttonText}
    </DropdownButton>

    <DropdownContent className="drop-down-content-sell">
      {content}
    </DropdownContent>
  </div>
    </div>
  )
}

export default Dropdown
