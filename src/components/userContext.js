import axios from 'axios';
import react,{createContext, useMemo, useState} from 'react'

export const userContext = createContext(null);

export const UserProvider = (props) => {
    // const [apiData, setapiData] = useState();
    const loadData = () => {
        axios.get("http://localhost:8080/api/getAllEmployees").then((response) => {
          console.log("data ", response.data);
          return(response.data);
        });
    };

    const [apiData, setapiData] = useState("foo");
    // const [valueA, setValueA] = useState("foo");
    // const [valueB, setValueB] = React.useState("bar");
    const providerValue = useMemo(() => ({
        apiData, setapiData,
        // valueB, setValueB,
    }), [apiData/* , valueB */]);
    return(
        <userContext.Provider value={providerValue}>
            {props.children}
        </userContext.Provider>
    );
}