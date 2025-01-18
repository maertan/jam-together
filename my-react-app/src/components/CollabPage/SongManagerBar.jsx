import React, {useState} from 'react';
import "./SongManagerBar.css";
import { IoFilterOutline as FilterIcon} from "react-icons/io5";
import { MdAddCircleOutline as AddIcon } from "react-icons/md";
import { AiOutlineMinusCircle as DeleteIcon } from "react-icons/ai";



const SongManagerBar = (props) => {
  // add action attribute for form
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  
    props.setUser(inputName)
    console.log("Input Name: " + inputName)
  }

  return (
    <div className="manager-bar">
      <form > 
        <label form="name">Enter Your Name: </label>
        <input type="text" id="name" name="name" required onChange={(e) => setInputName(e.target.value)}></input>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <div className="edit-bar">
        <button type="edit"><FilterIcon /></button>
        <button type="edit"><AddIcon /></button>
        <button type="edit"><DeleteIcon /></button>
      </div>
      
    </div>
  )

}

export default SongManagerBar;