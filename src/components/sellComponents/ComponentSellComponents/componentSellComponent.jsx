import { useEffect, useState } from "react"

const componentSellComponent = (value) => {
const [item, setitems] = useState(value);


    return(
        <div>
            <p className="black">Component</p>
        </div>
    )
}

export default componentSellComponent