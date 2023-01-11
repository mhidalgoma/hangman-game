
import '../styles/layout/_app.scss';
import '../styles/layout/_form.scss';
const Options = (props) => {
    return (
        <form className='form'>
            <label className="title__options" htmlFor="word">
            Si quieres puedes escribir tú una palabra para que la adivine otro jugador. Escribe aquí la palabra:
            </label>
            <input
            autoFocus
            autoComplete="off"
            className="form__input__word"
            maxLength="15"
            type="text"
            id="word"
            name="word"
            onChange={props.handleChange}
            />
        </form>
    );
};
export default Options;