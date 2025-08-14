import "./DropdownItems.css"

const DropdownItems = ({children, onClick}) => {
  return (
    <div className="phone-cell_sell"  onClick={onClick}>
      {children}
    </div>
  )
}

export default DropdownItems
