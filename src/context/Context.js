import { createContext } from 'react'

export const LanguageContext = createContext('en')
export const ItemsContext = createContext([])

/* export const ContextProvider = (props) => {
    const[context, setContext] = useState({
        language: 'en',
        items: []
    })

    return (
        <ContextProvider.Provider value={{context, setContext}}>
            {props.children}
        </ContextProvider.Provider>
    )
} */

//console.log(Context._currentValue.language)