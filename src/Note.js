import React, {Component} from  'react'
import {FaPencilAlt} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'

class Note extends Component {
  constructor(props){
    super(props)
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
  }
  edit(){
    alert("Editing note")
  }
  remove(){
    alert("removing it")
  }

  render(){
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
}

export default Note;