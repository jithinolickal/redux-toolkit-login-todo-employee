import axios from "axios";

//fetching data and saving in store
const deleteEmployee = async (id)=>{
    try {
        axios.delete(`https://rocky-bastion-69722.herokuapp.com/delete/${id}`).then(response=>{
            console.log("Delete Response", response);
        })
    } catch (error) {
        console.log("Delete Response Error ", error);
    }
  }

  export default deleteEmployee