import React from "react"
import ReactDOM from 'react-dom';
import memesData from './memesData.js'

    
export default function State() {
    const [thingsArray, setThings] = React.useState(["Thing 1", "Thing 2"])
    
    
    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)    
   
    return (
        <div>
            <div className="form">
                
                <button 
                    className="form-button" onClick={addItem}>Add item</button>
                {thingsElements}    
            </div>
        </div>
    )
}