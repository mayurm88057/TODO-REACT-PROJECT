
import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Expand } from "@mui/icons-material";


function CreateArea(props){

    const[isExpanded,setExpanded] =useState(false);

    const [note,setNote]=useState({
        title:"",
        content:""
});
 
    function handleChange(event){
  
        const {name ,value}=event.target;
     setNote(prevNote => {
            return{
            ...prevNote,
            [name]:value
            
            };

        });
    
    }
            
    function submitNote(event){
        props.onAdd(note);
        setNote({
          title:"",
          content:""
        });
        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
        
    }
    
    
    
    return(
        <div>
            <form className="create-note">
                {isExpanded && (
                     <input 
                     type="text"
                     name="title" 
                    onChange={handleChange}
                     value={note.title}
                     placeholder="Title"
                     />

                )}
               

                <textarea  
                name="content"
                rows={isExpanded ? 3 : 1}
                onClick={expand}
                onChange={handleChange}
                value={note.content}
                placeholder="Take a node"  
                />
                <Fab onClick = {submitNote}>
                    <AddCircleOutlineRoundedIcon/>
                </Fab>
            </form>
        </div>
    );
}
export default CreateArea;
