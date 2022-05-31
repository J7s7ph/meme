/*
import React from "react"

export default function Partner() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "T",
            lastName: "",
            email: "",
            company: "",
            instagram: "",
            describeArt: "",
            webThree: "",
            favIcon: ""
        }
    )
}
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevPartner => {
            return {
                ...prevPartner,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onchange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onchange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="text"
                placeholder="Email"
                onchange={handleChange}
                name="email"
                value={formData.email}
            />        
            <input
                type="text"
                placeholder="Company"
                onchange={handleChange}
                name="company"
                value={formData.company}
            />  
            <input
                type="text"
                placeholder="Instagram"
                onchange={handleChange}
                name="instagram"
                value={formData.instagram}
            />  
            <textarea
                value={formData.describeArt}
                placeholder="Description"
                onchange={handleChange}
                name="describeArt" 
            />
            <br/>
            <textarea
                value={formData.webThree}
                placeholder="Description"
                onchange={handleChange}
                name="webThree"  
            />
            <br/>
            <label htmlFor="favIcon">What is your favorite filter?</label>
            <br/>
            <select
                id="favIcon"
                value={formData.favIcon}
                onchange={handleChange}
                name="favIcon"
            >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
            </select>   
            <br/>
            <button>Submit</button> 
        </form>
    )
    }
    */