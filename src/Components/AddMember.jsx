import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMembers } from '../Store/actions/addMemberaction';

const AddMember = () => {
    const [nameInput, setNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [phoneNumberInput, setPhoneNumberInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const dispatch = useDispatch();

    const handleAddMember = (e) => {
        e.preventDefault();
        dispatch(
            addMembers({
                name: nameInput,
                address: addressInput,
                phoneNumber: phoneNumberInput,
                email: emailInput
            })
        );
        // Clear input fields after adding the member
        setNameInput('');
        setAddressInput('');
        setPhoneNumberInput('');
        setEmailInput('');
    };

    return (
        <div>
            <h2>Add Member</h2>
            <form onSubmit={handleAddMember}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        value={addressInput}
                        onChange={(e) => setAddressInput(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="text"
                        value={phoneNumberInput}
                        onChange={(e) => setPhoneNumberInput(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Add Member</button>
            </form>
        </div>
    );
};

export default AddMember;
