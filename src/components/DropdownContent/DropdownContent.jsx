import "./DropdownContent.css"

const DropdownContent = ({children, open}) => {
  return (
    <div className="drop-down-content">
      {children}
    </div>
  )
}

export default DropdownContent
