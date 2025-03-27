import { auth } from './config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styles from './styles/App.module.css'
import Swal from 'sweetalert2'

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Autenticacao = async (evento) => {
    evento.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login realizado com sucesso!",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Houve uma falha no login!",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
  <>
  <main className={styles.main}>
  <form className={styles.form} onSubmit={Autenticacao}>
    <label htmlFor="email">E-mail:</label>
    <input id="email" name="email" type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} />
    <label htmlFor="password">Senha:</label>
    <input id="password" name="password" type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
    <button type="submit">Entrar</button>
  </form>
</main>
  </>
  );
}