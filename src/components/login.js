import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/login.css'

const Login = (props) => {

    const userData = props.userData;
    const setUserData = props.setUserData;

    const setComponentToDisplay = props.setComponentToDisplay;
    const setIsConnected = props.setIsConnected;


    const handleEmailChange = (e) => {
        const { value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            mail: value,
        }));
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            password: value,
        }));
    };

    const handleConnexion = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        const credentials = {
            mail: userData.mail,
            password: userData.password,
        };

        try {
            const response = await fetch('http://localhost:3001/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed!');
            }

            const data = await response.json();
            // console.log('Login successful:', data.user.pseudo);

            const lastToken = data.user.authTokens[data.user.authTokens.length - 1]?.authToken;

            if (lastToken) {
                // Mettez à jour l'état avec le dernier token et d'autres informations utilisateur
                setUserData((prevData) => ({
                    ...prevData,
                    token: lastToken, // Dernier token
                    id: data.user._id, // ID de l'utilisateur
                    isConnected: true,
                    pseudo:data.user.pseudo
                }));

                // console.log(userData)
                setComponentToDisplay('main');
            } else {
                console.error('No token found in response.');
            }

            // SET UP EVERYTHING HERE

        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <button className="back-button" onClick={() => setComponentToDisplay('main')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h2 className="title">Connexion</h2>
                <form onSubmit={handleConnexion}>
                    <input 
                        type="email" 
                        className="input" 
                        placeholder="Mail" 
                        value={userData.mail}
                        onChange={handleEmailChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        className="input" 
                        placeholder="Password" 
                        value={userData.password}
                        onChange={handlePasswordChange} 
                        required 
                    />
                    <button type="submit" className="button">Connect</button>
                </form>
                <p className="create-account">
                    Don't have an account ?
                    <button className="link-button" onClick={() => setComponentToDisplay('Register')}>
                        Create an account
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
