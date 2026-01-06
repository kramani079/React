import React, { Component } from "react";

class Contactbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      fname: "",
      lname: "",
      phone: ""
    };
  }

  handleFnameChange = (e) => {
    this.setState({ fname: e.target.value });
  };

  handleLnameChange = (e) => {
    this.setState({ lname: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  addContact = () => {
    const { fname, lname, phone, contacts } = this.state;

    if (!fname || !lname || !phone) return;

    const newContact = {
      id: Date.now(),
      fname,
      lname,
      phone,
      showDetails: false
    };

    this.setState({
      contacts: [...contacts, newContact],
      fname: "",
      lname: "",
      phone: ""
    });
  };

  toggleView = (id) => {
    const updatedContacts = this.state.contacts.map((contact) =>
      contact.id === id
        ? { ...contact, showDetails: !contact.showDetails }
        : contact
    );

    this.setState({ contacts: updatedContacts });
  };

  deleteContact = (id) => {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );

    this.setState({ contacts: filteredContacts });
  };

  render() {
    const { contacts, fname, lname, phone } = this.state;

    return (
      <>
        <input
          type="text"
          value={fname}
          placeholder="First Name"
          onChange={this.handleFnameChange}
        />
        <br />

        <input
          type="text"
          value={lname}
          placeholder="Last Name"
          onChange={this.handleLnameChange}
        />
        <br />

        <input
          type="text"
          value={phone}
          placeholder="Phone"
          onChange={this.handlePhoneChange}
        />
        <br />

        <button onClick={this.addContact}>Add Contact</button>

        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>{contact.fname}</strong>{" "}
              <button onClick={() => this.toggleView(contact.id)}>
                {contact.showDetails ? "Hide" : "View"}
              </button>
              <button onClick={() => this.deleteContact(contact.id)}>
                Delete
              </button>

              {contact.showDetails && (
                <div>
                  <p>Last Name: {contact.lname}</p>
                  <p>Phone: {contact.phone}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Contactbook;
