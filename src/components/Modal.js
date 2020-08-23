import React, {Component} from 'react'
import './Modal.css'

class Modal extends Component{
  render(){
    const { isOpen }= this.props
     let className1= "blockModal"
     console.log(this.props.isOpen)
     if (isOpen)
       {
         className1 +=" displayOn";
        
       }
    return(
      <div className={className1}>
        <span onClick={this.props.onclick}>x</span>
        <h1>This is a model 1</h1>
        <p className='text'>
          Pellentesque habitant morbi tristique 
          senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, 
          tempor sit amet, ante. Donec eu libero sit amet quam 
          egestas semper. Aenean ultricies mi vitae est. Mauris 
          placerat eleifend leo. Quisque sit amet est et sapien 
          ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, 
          commodo vitae, ornare sit amet, wisi. Aenean fermentum, 
          elit eget tincidunt condimentum, eros ipsum rutrum orci, 
          sagittis tempus lacus enim ac dui. Donec non enim in turpis 
          pulvinar facilisis. Ut felis. Praesent dapibus Pellentesque habitant morbi tristique 
          senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, 
          tempor sit amet, ante. Donec eu libero sit amet quam 
          egestas semper. Aenean ultricies mi vitae est. Mauris 
          placerat eleifend leo. Quisque sit amet est et sapien 
          ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, 
          commodo vitae, ornare sit amet, wisi. Aenean fermentum, 
          elit eget tincidunt condimentum, eros ipsum rutrum orci, 
          sagittis tempus lacus enim ac dui. Donec non enim in turpis 
          pulvinar facilisis. Ut felis. Praesent dapibus 
        </p>
        <button className='Accept' onClick={this.props.onclick}>Accept</button>
        <button className='Decline' onClick={this.props.onclick}>Decline</button>
      </div>
    )
  }
}
export default Modal