import React, {useEffect, useState} from "react";
import axios from 'axios'
import DisplayLogic from "./DisplayLogic";

const App = () => {
    const [searchFeild, setSearchFeild ] = useState("")
    const [data , setData]  = useState([])
    const [foundResults , setFoundResults] = useState([])

    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setData(response.data)
            })
            .catch(error => alert(error))
    },[])

    const searchFieldHandler = (event) =>{
        event.preventDefault();
        setSearchFeild(event.target.value)
        const results = data.filter(country => {
            return country.name.toLowerCase().includes(event.target.value.toLowerCase())});
        setFoundResults(results);
    }


    return(
        <div>
            <form>
                <label>Find Countries: </label>
                <input value={searchFeild} onChange={searchFieldHandler}/>
            </form>
            <DisplayLogic results={foundResults}/>
        </div>
    )
}

export default App;