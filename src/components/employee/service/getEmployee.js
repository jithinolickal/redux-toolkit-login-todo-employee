import axios from "axios";

//fetching data and saving in store
const getApi = async ()=>{
    const result = await axios.get('https://rocky-bastion-69722.herokuapp.com/get');
    const apiResult = await result.data;
    // console.log("Api get ", apiResult);
    return apiResult
  }

  export default getApi