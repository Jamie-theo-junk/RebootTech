import "./DropdownItems.css"

const DropdownItems = ({children, onClick}) => {
  return (
    <div className='dropdown-item' onClick={onClick}>
      {children}
    </div>
  )
}

export default DropdownItems
