

import React,{useState} from "react"; 


const Form4 = () => {

    let [name,setName] = useState(""); 
    // let [finalName,setFinalName] = useState("");
    let [buttonState, setButtonState] = useState(false);
   
   
      function showName(){
            setButtonState(true);
      }

            
    return(
        <div>
              <input type="text" placeholder="Enter your name" 
               onChange={(event)=>  setName(event.target.value)}
               value={name}
              /> 

              <button onClick={showName}>Submit</button>

              
              

              {/* <p>Name is = {finalName} </p>  */}

              {
                buttonState &&
                <p>Name is = {name} </p>
              }

            
        </div>
    )
}

export default Form4;