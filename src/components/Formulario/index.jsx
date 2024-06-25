import { useState, useEffect } from "react"

const Formulario = () => {
const [materiaA, setmateriaA] = useState(0);
const [materiaB, setmateriaB] = useState(0);
const [materiaC, setmateriaC] = useState(0);
const [nome, setNome] = useState('');

//usando o useEffect apenas quando o componente é iniciado
useEffect(() => {
    console.log("o componente iniciou");

    //acionando o useEffect apenas quando o componente é finalizado
    return () => {
        console.log("o componente foi finalizado")
    }
}, []);


//usando o useEffect apenas para a mudança de um compomente (nome)
useEffect(() => {
    console.log("o estado nome mudou")
}, [nome]);

useEffect(() => {
    console.log("materia A mudou para: " + materiaA)
}, [materiaA]);

const alteraNome = (evento) => {
    setNome(estadoAnterior => {
        return evento.target.value
    })
}

const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
        return (
            <p>Olá {nome}, você foi aprovado!</p>
        )
    } else {
        return (
            <p>Olá {nome}, você não foi aprovado!</p>
        )
    }
}

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}
            </ul>

            <input type="text" placeholder="Insira seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setmateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setmateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setmateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario