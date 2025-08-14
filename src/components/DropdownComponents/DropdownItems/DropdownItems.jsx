import "./DropdownItems.css"

const DropdownItems = ({children, onClick}) => {
  return (
    <div className="phone-cell"  onClick={onClick}>
      {children}
    </div>
  )
}

export default DropdownItems
