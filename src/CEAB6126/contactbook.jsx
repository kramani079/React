import React, { Component } from "react";

class ContactBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            fname: "",
            lname: "",
            phone: "",
        };
    }

    handlefnameChange = (e) => {
        this.setState({ fname: e.target.value });
    };
    handlelnameChange = (e) => {
        this.setState({ lname: e.target.value });
    };
    handlephoneChange = (e) => {
        this.setState({ phone: e.target.value });
    };

    addContact = () => {
        if (
            this.state.fname.trim() === "" ||
            this.state.lname.trim() === "" ||
            this.state.phone.trim() === ""
        ) {
            return;
        }
        const newContact = {
            id: Date.now(),
            fname: this.state.fname,
            lname: this.state.lname,
            phone: this.state.phone,
            visible: false,
            update: false,
        };

        this.setState((prevState) => ({
            contacts: [newContact, ...prevState.contacts],
            fname: "",
            lname: "",
            phone: "",
        }));
    };

    toggleDisplay = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.map((y) =>
                y.id === id ? { ...y, visible: !y.visible } : y
            ),
        }));
    };

    deleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((y) => y.id !== id),
        }));
    };

    handleUpdateChange = (id, field, value) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.map((c) =>
                c.id === id ? { ...c, [field]: value } : c
            ),
        }));
    };

    saveUpdate = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.map((c) =>
                c.id === id ? { ...c, update: false } : c
            ),
        }));
    };

    updateContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.map((c) =>
                c.id === id ? { ...c, update: true } : c
            ),
        }));
    };

    render() {
        const { contacts, fname, lname, phone } = this.state;
        return (
            <>
                <div>
                    <h1>Contact Book</h1>

                    <input
                        type="text"
                        value={fname}
                        placeholder="First Name"
                        onChange={this.handlefnameChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={lname}
                        placeholder="Last Name"
                        onChange={this.handlelnameChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={phone}
                        placeholder="Mobile number"
                        onChange={this.handlephoneChange}
                    />
                    <br />
                    <button onClick={this.addContact}>Add Contact</button>
                    <br />

                    <ul>
                        {contacts.map((y) => (
                            <li key={y.id}>
                                {y.update ? (
                                    <>
                                        <input
                                            value={y.fname}
                                            onChange={(e) =>
                                                this.handleUpdateChange(y.id, "fname", e.target.value)
                                            }
                                        />
                                        <input
                                            value={y.lname}
                                            onChange={(e) =>
                                                this.handleUpdateChange(y.id, "lname", e.target.value)
                                            }
                                        />
                                        <input
                                            value={y.phone}
                                            onChange={(e) =>
                                                this.handleUpdateChange(y.id, "phone", e.target.value)
                                            }
                                        />
                                        <button onClick={() => this.saveUpdate(y.id)}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        {y.fname} :
                                        <button onClick={() => this.toggleDisplay(y.id)}>
                                            View
                                        </button>
                                        <button onClick={() => this.updateContact(y.id)}>
                                            Update
                                        </button>
                                        <button onClick={() => this.deleteContact(y.id)}>
                                            Delete
                                        </button>
                                        <div style={{ display: y.visible ? "block" : "none" }}>
                                            {y.lname} - {y.phone}
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

export default ContactBook;
