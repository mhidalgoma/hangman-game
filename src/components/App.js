import '../styles/App.scss';
import { useState, useEffect } from 'react';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Instructions from './Instructions';
import Options from './Options';

function App() {
  //VARIABLES ESTADO
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);

  //USE EFFECT
  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    fetch('https://dev.adalab.es/api/random/word')
      .then((response) => response.json())
      .then((data) => {
        setWord(data.word);
      });
  }, []);

  //FUNCIONES HANDLER
  const handleLastLetter = (event) => {
    const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]/;
    if (event.target.value === '' || regex.test(event.target.value)) {
      setLastLetter(event.target.value);
      if (event.target.value !== '') {
        const newUserLetters = [...userLetters, event.target.value];
        const errors = newUserLetters.filter(
          (letter) => !word.includes(letter)
        );
        setUserLetters(newUserLetters);
        setNumberOfErrors(errors.length);
      }
    } else {
      console.log('Escribe una letra que esté permitida');
    }
  };

  const handleChange = (event) => {
    setWord(event.target.value);
    setUserLetters([]);
    setLastLetter('');
  };

  return (
    <div className="page">
      <Header></Header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <SolutionLetters
                  word={word}
                  userLetters={userLetters}
                ></SolutionLetters>
                <ErrorLetters
                  word={word}
                  userLetters={userLetters}
                ></ErrorLetters>
                <Form
                  handleLastLetter={handleLastLetter}
                  lastLetter={lastLetter}
                ></Form>
              </section>
            }
          />

          <Route path="/instructions" element={<Instructions></Instructions>} />
          <Route
            path="/options"
            element={<Options handleChange={handleChange}></Options>}
          />
        </Routes>
        <Dummy numberOfErrors={`error-${numberOfErrors}`}></Dummy>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
