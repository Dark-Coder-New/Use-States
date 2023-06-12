
import React,{useState} from "react"; 


const Form3 = () => {

    let [name,setName] = useState(""); // ""
   
    function handleChange(event){
         setName(event.target.value);
    }


    function reset(){
         setName("");
    }

            //   input is =>""
    return(
        <div>
              <input type="text" placeholder="Enter your name" 
               onChange={handleChange}
               value={name}
              /> 

              
              

              <p>Name is = {name} </p> 

              <button  
               onClick={reset}
              > Reset </button>
              
        </div>
    )
}

export default Form3;