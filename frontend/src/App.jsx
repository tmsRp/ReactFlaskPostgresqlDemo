import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import "./App.css";
import ContactForm from "./ContactForm";

function App() {
  // Initialize state variables
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentContact, setCurrentContact] = useState({})

  // Fetch contacts when component mounts
  useEffect(() => {
    fetchContacts()
  }, []);

  // Send GET request to get contacts
  const fetchContacts = async () => {
    // "http://127.0.0.1:5000/contacts" to run locally, "http://0.0.0.0:5000/contacts" to run on Docker container
    const response = await fetch("http://localhost/contacts");
    const data = await response.json();
    // Update contacts state with fetched data
    setContacts(data.contacts);
  };

  const closeModal = () => {
    // Close modal
    setIsModalOpen(false)
    // Clear current contact
    setCurrentContact({})
  }

  const openCreateModal = () => {
    // Open modal for creating a new contact
    if (!isModalOpen) setIsModalOpen(true)
  }

  const openEditModal = (contact) => {
    // Prevent opening multiple modals
    if (isModalOpen) return
    // Set current contact for editing
    setCurrentContact(contact)
    // Open modal
    setIsModalOpen(true)
  }

  const onUpdate = () => {
    // Close modal after update
    closeModal()
    // Fetch updated contacts
    fetchContacts()
  }

  return (
    <>
      <ContactList contacts={contacts} updateContact={openEditModal} updateCallback={onUpdate} />
      <button onClick={openCreateModal}>Create New Contact</button>
      {isModalOpen && <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <ContactForm existingContact={currentContact} updateCallback={onUpdate} />
        </div>
      </div>
      }
    </>
  );
}

export default App;