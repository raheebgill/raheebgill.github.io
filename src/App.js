// src/App.js
import React from 'react';
import './App.css';
import image1 from './assets/image1.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <div className="lavender-flower">
          🌸🌸🌸
        </div>
        <div className="teddy-bear">
          🧸
        </div>
        <div className="message">
        <img src={image1} alt="Description of the image" className="image1" style={{ width: '50%', height: '50%' }} />


          <h1>I Love You</h1>
          <h2>You Are My Best Friend</h2>
          
          <p>Dear Aimen,</p>
          <p>
            As we get ready to step into a new year, I can't help but think about all the times we've shared. You've been with me through thick and thin, like a true friend. Pablo Neruda once wrote about finding beauty in the ordinary, and that's exactly what our friendship is – extraordinary in its simplicity. From everyday moments to the special ones, each laugh, tear, and secret shared has added a new chapter to our story.
          </p>
          <p>
            T.S. Eliot wondered about time and life, and looking back, I cherish the moments we've created together. As we approach a new year, I'm thankful for the memories we've made and excited about the ones still to come.
          </p>
          <p>
            Here's to more adventures, more laughs, and more memories in the upcoming year. I'm grateful for our friendship and excited to see what the future holds.
          </p>
          <p>Wishing you a fantastic New Year!</p>
          <p className="signature">With love, Raheeb Gill</p>
          <p>P.s: The flowers at the top are lavender because I know that it is your favourite flower maybe someday I'll actually get you Lavender</p>
        </div>
      </header>
    </div>
  );
}

export default App;
