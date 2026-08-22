import { useState } from "react"
import "./Counter.css"

function Counter() {

    const [number, setNumber] = useState(0);

    const handleClick = (action) =>{
        if(number<99 && action === '+'){
            const newNum = number + 1
            setNumber(newNum)
        }else if(number>-98 && action === '-'){
            const newNum = number - 1
            setNumber(newNum)
        }
    }

    return (
        <section className="counter-container">
            <button className="counter-button" onClick={() => handleClick('-')}>
                <span>-</span>
            </button>
            <div className="result">
                {number}
            </div>
            <button className="counter-button" onClick={() => handleClick('+')}>
                <span>+</span>
            </button>
        </section>
    )
}

export default Counter