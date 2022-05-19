import image from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="column">
         <div className="imageContainer">
            <div className="imageCode">#4146</div>
            <img className="characterImage" src={image} alt="character" />
        </div>
        <div className="text">
              <p>
                <span className="whiteText">22</span>
                <sup className="yellowText">D</sup>
              </p>
              <div className="divider">|</div>
              <p>
                <span className="whiteText">1</span>
                <sup className="yellowText">H</sup>
              </p>
              <div className="divider">|</div>
              <p>
                <span className="whiteText">36</span>
                <sup className="yellowText">M</sup>
              </p>
            </div>
            <div className="progressBar">
              <div className="activeBar"></div>
            </div>
      </div>
    </div>
  );
}

export default App;
