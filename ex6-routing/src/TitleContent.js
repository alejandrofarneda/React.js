import { useState, createContext, useContext } from 'react';

const TitleContent = createContext();

function TitleContentProvider({ children }) {
    const [title, setTitle] = useState('Home');
    return (
        <TitleContent.Provider value={[title, setTitle]}>
            {children}
        </TitleContent.Provider>
    );
}
export const useTitle = () => useContext(TitleContent)[0];
export const useSetTitle = () => useContext(TitleContent)[1];

export default TitleContentProvider;
