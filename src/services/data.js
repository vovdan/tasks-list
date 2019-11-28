import { createContext, useContext } from 'react';
import React from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const AuthProvider = (props) => {
    const value = {
      getAll: props.getAll || getAll,      
    };
  
    return (
      <AuthProvider.Provider value={value}>
        {props.children}
      </AuthProvider.Provider>
    );
  };

export const useData = () => {
    return useContext(DataContext);
}

let token = localStorage.getItem('tokens')


const getAll = () => {
    const headers = {
        'auth': this.token
    }
    axios.get("http://localhost:8080/task",
        { headers: headers }).then(result => {
            if (result.status === 200) {
                console.log(2);
                // this.setState({ tasks: result.data });
                console.log("Success");
                return result.data
            } else {
                console.log(3)

                console.log(result);
            }
        }).catch(e => {
            console.log(4)

            console.log("Catch er");
        });
}