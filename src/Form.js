import React from "react"
import memesData from './memesData.js'
import Butterfly from "./Butterfly.png"


export default function Form() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        comments: "",
        favIcon: "",
        filter: ""
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    function retrieveNFT() {
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = (allMemes[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })
        )}   
    
    return (
        <main>
            <div>
                <div>
                <fieldset className="fieldset">
                    <legend className="legend">Select Filter</legend>
                    <input
                        type="radio"
                        id="filterA"
                        name="filter"
                        value={Butterfly}
                        checked={meme.filter === {Butterfly}}
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="filterA" className="label"><img src={Butterfly} className="labelimage" alt=""/></label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="filterB"
                        name="filter"
                        value="filterB"
                        checked={meme.filter === "filterB"}
                        onChange={handleChange}
                    
                    />
                    <label htmlFor="filterB" className="label">Filter B</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="filterC"
                        name="filter"
                        value="filterC"
                        checked={meme.filter === "filterC"}
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="filterC" className="label">Filter C</label>
                    <br />
                </fieldset>
                </div>               
                
                <div className="Form">               
                    <button 
                        className="form-button" onClick={retrieveNFT}>Get a New NFT</button>
                </div>    
            </div>
            <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.filter}</h2> 
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            {/* <input  
                    type="text"
                    placeholder="Under Construction"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
    value={meme.topText} /> */}
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText} />
                           
            
            <div>
                <textarea
                    value={meme.comments}
                    placeholder="Web3 Experience"
                    className="textarea"
                    onChange={handleChange}
                    name="comments" />
                <br/>
               
            </div>
            
            <div>
                
            
            </div>
        </main>
    )
}

/*
import React from "react"

export default function App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
    })
    

    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
        
        if(formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
 <label htmlFor="favIcon">What is your favorite filter?</label>
            <br/>
            <select
                id="favIcon"
                value={meme.favIcon}
                onchange={handleChange}
                name="favIcon"
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
            </select> 
            <br/>

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])            
*/