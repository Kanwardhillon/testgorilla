import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import QuestionContainer from './components/QuestionContainer';
import data from './data/data.json'

function App() {
  return (
    <div className="App">
      <Header/>
      <QuestionContainer data={data} />
      <Footer />
    </div>
  );
}

export default App;
