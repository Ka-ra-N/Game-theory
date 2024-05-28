import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("https://api.sampleapis.com/beers/ale")
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <ApiContext.Provider value={data}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApiData = () => {
    return useContext(ApiContext);
};
