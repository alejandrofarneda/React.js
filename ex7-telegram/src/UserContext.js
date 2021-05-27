import { useState, createContext, useContext, useEffect } from 'react';

const UserContent = createContext();

function UserContentProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('session')));

    useEffect(() => {
        localStorage.setItem('session', JSON.stringify(user));
    }, [user]);

    return (
        <UserContent.Provider value={[user, setUser]}>
            {children}
        </UserContent.Provider>
    );
}
export const useUser = () => useContext(UserContent)[0];
export const useSetUser = () => useContext(UserContent)[1];

export default UserContentProvider;


