import React, { useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Contacts from "./components/DB/contact";

function App() {
    const [formData, setFormData] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        phoneNumber: "",
    });
    const inputCheker = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const [contactList, setContactList] = useState([
        {
            id: 1,
            firstName: "Hamid",
            lastName: "Asadi",
            phoneNumber: "09123456789",
        },
        {
            id: 2,
            firstName: "Ali",
            lastName: "Golestani",
            phoneNumber: "09351234567",
        },
        {
            id: 3,
            firstName: "Reza",
            lastName: "Khosravi",
            phoneNumber: "09194567890",
        },
    ]);
    const deleteContact = (id) => {
        setContactList(contactList.filter((item) => item.id !== id));
    };

    const addContact = (e) => {
        e.preventDefault();
        setContactList([
            ...contactList,
            { ...formData, id: Math.floor(Math.random() * 1000) },
        ]);
    };

    return (
        <div className="container">
            <Header title="Contact List" />
            <form onSubmit={addContact}>
                <Input
                    placeHolder="First Name"
                    name="first-name"
                    className="input-class"
                    onChange={inputCheker}
                    value={formData.firstName}
                />
                <Input
                    placeHolder="Last Name"
                    name="last-name"
                    className="input-class"
                    onChange={inputCheker}
                    value={formData.lastName}
                />
                <Input
                    placeHolder="Phone Number"
                    name="phone-number"
                    className="input-class"
                    onChange={inputCheker}
                    value={formData.phoneNumber}
                />
                <input
                    className="submit-button"
                    type={"submit"}
                    value={"Save Contact"}
                />
            </form>
            <Contacts onDelete={deleteContact} contactList={contactList} />
        </div>
    );
}

export default App;
