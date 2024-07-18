import React from "react"


const ContactList = ({ contacts, updateContact, updateCallback }) => {

    // Define an asynchronous function to handle contact deletion
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }

            // Send DELETE request to the specified endpoint
            // "http://127.0.0.1:5000/contacts" to run locally, "http://0.0.0.0:5000/contacts" to run on Docker container
            const response = await fetch(`http://localhost/delete_contact/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete")
            }
        } catch (error) {
            alert(error)
        }
    }

    // Render the UI
    return <div>
        <h2>Contacts (CRUD)</h2>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {/* Map over the contacts array and create a row for each contact */}
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td>
                            <button onClick={() => updateContact(contact)}>Update</button>
                            <button onClick={() => onDelete(contact.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ContactList