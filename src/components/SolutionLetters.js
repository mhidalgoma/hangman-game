import '../styles/layout/_letters.scss';

const SolutionLetters = (props) => {
    const renderSolutionLetters = () => {
        const wordLetters = props.word.split('');
        const writtenLetter = wordLetters.map((letter, index) => {
          if (props.userLetters.find((userLetter)=> userLetter === letter)){
            return <li key={index} className='letter'>{letter}</li>;
          }else{
            return <li key={index} className='letter'></li>;
          }
        })
      return writtenLetter;
      };
    return (
        <div className="solution">
        <h2 className="title">Solución:</h2>
        <ul className="letters">
          {renderSolutionLetters()}
        </ul>
      </div>
    );
  };
  
  export default SolutionLetters;