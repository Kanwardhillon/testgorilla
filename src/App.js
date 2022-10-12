import React, { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import QuestionContainer from './components/QuestionContainer';
import {data} from './data/data'

function App() {

const [data, setData] = useState(data)

  return (
    <div className="App">
      <Header />
      <QuestionContainer />
      <Footer />
    </div>
  );
}

export default App;
