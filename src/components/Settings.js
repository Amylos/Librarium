import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import '../styles/settings.css';

const Settings = (props) => {
    const userData = props.userData;
    const setUserData = props.setUserData;
    const triggerPopUp = props.triggerPopUp;
    const setComponentToDisplay = props.setComponentToDisplay;

    const [pseudo, setPseudo] = useState(userData.pseudo);
    const [password, setPassword] = useState(userData.password);
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = {
            password: password,
            pseudo: pseudo,
        };

        try {
            const response = await fetch(`http://localhost:3001/users/me`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${userData.token}`, // Send token in header
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Update request failed!');
            }

            const data = await response.json();
            console.log(data);
            const lastToken = data.authTokens[data.authTokens.length - 1]?.authToken;

            setUserData((prevData) => ({
                ...prevData,
                token: lastToken,
                id: data._id,
                isConnected: true,
                pseudo: data.pseudo,
            }));

            setTimeout(()=>{
                setComponentToDisplay('main');
            },1000);

            triggerPopUp("User updated successfully", '#28A745');
        } catch (err) {
            console.error('Error during update:', err);
            triggerPopUp(`Failed to change user's information`, '#D9534F');
        }
    };

    return (
        <div className="Settings">
            <div className="form-container">
                <button className="back-button" onClick={() => props.setComponentToDisplay('main')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h2 className="title">Edit User Information</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        placeholder="Username"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="input"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="button">Update</button>
                </form>
            </div>
        </div>
    );
}

export default Settings;
