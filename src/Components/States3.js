
import React, {useState} from "react"

const States3 = () => {
   let [favourite, setFavourite] = useState(["Mango","Apple","Banana","Orange"])
   let [newFruit, setNewFruit] = useState("")

   // favourite = ["Mango","Apple","Banana","Orange"]
   // favourite = "Gauava"

    function addFruit(){
        let arr = [...favourite]

           arr.unshift(newFruit)
   
        setFavourite(arr)
    }


    return(
        <div>
                <input type="text" 
                    onChange={(event)=> setNewFruit(event.target.value)}
                />
                <button
                    onClick={addFruit}
                > Add Fruits To Favourite</button>

                <div>
                    {favourite.join()}
                </div>
        </div>
    )
}

export default States3;




// let arr = ["a","p","p","l","e"]

// arr.join("") // "a,p,p,l,e"  // "apple"