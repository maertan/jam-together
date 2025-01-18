import React from 'react';
import "./SongManagerBar.css";
import { IoFilterOutline as FilterIcon} from "react-icons/io5";
import { MdAddCircleOutline as AddIcon } from "react-icons/md";
import { AiOutlineMinusCircle as DeleteIcon } from "react-icons/ai";



function SongManagerBar() {
  // add action attribute for form
  return (
    <div class="manager-bar">
      <form> 
        <label for="name">Enter Your Name: </label>
        <input type="text" id="name" name="name" required></input>
        <button type="submit">Submit</button>
      </form>
      <div class="edit-bar">
        <button type="edit"><FilterIcon /></button>
        <button type="edit"><AddIcon /></button>
        <button type="edit"><DeleteIcon /></button>
      </div>
      
    </div>
  )

}

export default SongManagerBar;