import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setEstaCarregando(true);
        setErro(null);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Usuário não encontrado');
                }
                return res.json();
            }) 
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 2000);
            }) 
            .catch(error => {
                setEstaCarregando(false);
                setErro(error.message);
            });
    }, [nomeUsuario]);

    return (
        <>
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : erro ? (
                <h1 className="erro-message">{erro}</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name} <br />
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language} <br />
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}><span>Visitar no Github</span></a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </>
    )
}

export default ReposList;
