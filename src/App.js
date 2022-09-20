import Button from "./components/Buttons/SubmitButton";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Db from "./components/DB/Db";

function App() {
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
            <Db />
        </div>
    );
}

export default App;
