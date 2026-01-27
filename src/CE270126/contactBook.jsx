import React,{useState} from "react";

export default function ContactBook(){
    const [contacts, setContacts] = useState([]);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");


    const newContact = () => {
        id: Date.now(),
        fname:setFname;
        lname: setLname;
        phone: setPhone;
        update: false;
    }



    const addContact = (contacts) => {
        setContacts([...contacts,newContact]);
    }

    return(
        <>
        <h1>Contact Book</h1>


        </>
    )
}