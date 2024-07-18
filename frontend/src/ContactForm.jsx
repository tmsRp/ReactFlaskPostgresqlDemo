import { useState } from "react";

const ContactForm = ({ existingContact = {}, updateCallback }) => {
    
    // Initialize state variables for first name, last name, email
    const [firstName, setFirstName] = useState(existingContact.firstName || "");
    const [lastName, setLastName] = useState(existingContact.lastName || "");
    const [email, setEmail] = useState(existingContact.email || "");

    // Determine whether the form is updating an existing contact
    const updating = Object.entries(existingContact).length !== 0

    // Define form submission handler
    const onSubmit = async (e) => {
        e.preventDefault()

        // Prepare data to send in the request body
        const data = {
            firstName,
            lastName,
            email
        }

        // Construct API URL based on whether it's an update or create operation
        // "http://127.0.0.1:5000/contacts" to run locally, "http://0.0.0.0:5000/contacts" to run on Docker container
        // const url = "http://0.0.0.0:5000/" + (updating ? `update_contact/${existingContact.id}` : "create_contact")
        const url = "http://localhost/" + (updating ? `update_contact/${existingContact.id}` : "create_contact")
        
        // Set request options
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        
        // Send request and handle the response
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            updateCallback()
        }
    }

    // Render form's elements
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">{updating ? "Update" : "Create"}</button>
        </form>
    );
};

export default ContactForm