import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./config/firebaseConfig";
import styles from './styles/App.module.css';

export default function Registrar() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            navigate('/login');
        } catch (erro) {
            alert('Erro ao cadastrar');
            console.error('Error during registration:', erro.message);
        }
    };

    return (
        <main>
            <h2>Registrar</h2>

            <form onSubmit={handleRegister} className={styles.form}>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                    required 
                />
                <button type="submit">Registrar</button>
            </form>
        </main>
    );
}