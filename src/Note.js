import React, {Component} from  'react'
import {FaPencilAlt} from 'react-icons/fa'
import {FaTrash , FaFloppy0} from 'react-icons/fa'


class Note extends Component {
  constructor(props){
    super(props)
    this.edit = this.edit.bind(this)
    this.state = {editing:false}
    this.remove = this.remove.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderDisplay = this.renderDisplay.bind(this)
  }

  edit(){
    this.setState = {editing: true}
    alert("Editing note")
  }
  remove(){
    alert("removing it")
  }

  renderForm(){
    <form>
      <textarea>   
        <button> 
          <Fafloppy0>
          </Fafloppy0>
        </button>.  
      
      </textarea> 
    </form>

  }

  renderForm(){
    return (
      <div className = "Note">
        <form>
          <textarea />
            <button> <FaFloppy0 />
            </button>
 
        </form>
        
      </div>
    )
  }



  renderDisplay(){
    return (
      <div className = "note">
        <p> Learn React </p>
        <span>
          <button onclick = {this.edit} id = "edit"> <FaPencilAlt/></button>
          <button onClick = {this.remove} id = "remove"> <FaTrash/></button>
        </span>
      </div>
    )
  }
  render (){
    if (this.state.editing){
     return this.renderForm()
    else {
      return this.renderDisplay();
    }
  }
}



}

export default Note;