import './App.css'
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import { LanguageContext, ItemsContext } from './context/Context'
import { useState, useContext } from 'react'

function App() {

  const[language, setLanguage] = useState(useContext(LanguageContext))
  const[items, setItems] = useState(useContext(ItemsContext))
  console.log(language)
  return (
    <div className="App">
      <LanguageContext.Provider value={{language, setLanguage}}>
      <ItemsContext.Provider value={{items, setItems}}>
        <Header />
        <Body />
        </ItemsContext.Provider>
        </LanguageContext.Provider>
    </div>
  );
}

export default App;
