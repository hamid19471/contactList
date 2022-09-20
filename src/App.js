import React, { useState } from "react";
import Button from "./components/Buttons/SubmitButton";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Db from "./components/DB/Db";

function App() {
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

    return (
        <div className="container">
            <Header title="Contact List" />
            <Input
                placeHolder="First Name"
                name="first-name"
                className="input-class"
            />
            <Input
                placeHolder="Last Name"
                name="last-name"
                className="input-class"
            />
            <Input
                placeHolder="Phone Number"
                name="phone-number"
                className="input-class"
            />
            <Button className="submit-button" title="Save Contact" />
            <Db onDelete={deleteContact} contactList={contactList} />
        </div>
    );
}

export default App;
