import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import '../styles/register.css';

const Register = (props) => {

    const setComponentToDisplay = props.setComponentToDisplay;
    const triggerPopUp = props.triggerPopUp;


    // Déclaration des états pour chaque champ
    const [pseudo, setPseudo] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // État pour gérer la visibilité du mot de passe


    // Gestion des changements pour chaque champ
    const handlePseudoChange = (e) => setPseudo(e.target.value);
    const handleMailChange = (e) => setMail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Pseudo:', pseudo);
        console.log('Mail:', mail);
        console.log('Password:', password);

        const userData = {
            pseudo,
            password,
            mail,
        };

        try {
            const response = await fetch('http://localhost:3001/users', { // Remplacez par l'URL appropriée
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la création de l\'utilisateur');
            }

            const data = await response.json();
            console.log('User created:', data);
            triggerPopUp("User created successfuly.", '#28A745');

            setTimeout(()=>{
                setComponentToDisplay('Login');
            },2000);

        } catch (error) {
            console.error('Erreur:', error);
            triggerPopUp('Error', '#D9534F');
        }
    };


    return (
        <div className="container">
            <div className="form-container">
                <button className="back-button" onClick={() => setComponentToDisplay('Login')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h2 className="title">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        placeholder="Pseudo"
                        value={pseudo}
                        onChange={handlePseudoChange}
                        required
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Email"
                        value={mail}
                        onChange={handleMailChange}
                        required
                    />
                  <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="input"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    <button type="submit" className="button">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
