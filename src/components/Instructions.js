import '../styles/layout/_instructions.scss';
const Instructions = () => {
    return (
        <section className="instructions">
        <p>
        El ahorcado es un juego de adivinanza de palabras. La finalidad es que adivines la palabra sin ser “ahorcado” por los desaciertos.
        </p>
        <p>Escribe una letra y si esa letra está en la palabra a adivinar la verás escrita en la parte de "solución".</p>
        <p>
        Sin embargo, si la solución no contiene esa letra, se dibujará una parte del cuerpo del ahorcado. Cuando esté completa esta figura, el jugador ya no tendrá más oportunidades y habrá perdido.
        </p>
        </section>
    );
};
export default Instructions;