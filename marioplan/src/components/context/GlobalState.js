import React, {createContext, useContext ,useReducer} from 'react';
import AppReducer from './AppReducer'


const initState = {
    projects: [
      {id: '1', title: 'help me find peach', content: 'blah blah blah' , date: '22 Dec, 22'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah' , date: '22 Dec, 22'},
      {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' , date: '22 Dec, 22'}
    ]
}


export const GlobalContext = createContext(initState)

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer, initState)
    

    return <GlobalContext.Provider value={state.projects}>
        {children}
    </GlobalContext.Provider>
}