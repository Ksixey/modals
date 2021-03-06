import React, {Component} from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";

export default class App extends Component {
  state ={
    openModal:false,
    currentModal: null
  };

  onClickOnDeleteModal(){
    this.setState({
      openModal:true,
      currentModal: 'deleteModal'
    })
  }

  onClickInfoModal(){
    this.setState({
      openModal: true,
      currentModal: 'infoModal'
    })
  }

  onClickToCloseModal(){
    this.setState({
      openModal : !this.state.openModal,
    });
  }

  handleClick(e){
    e.stopPropagation()
  }

  render() {
    const modals = {
      deleteModal: {
        title: 'Do you want to delete this file?',
        closeButton: true,
        text: `Once of this file, if won't be possible to undo this action/
                Are you sure you want to delite it?`,
        action: [
          <Button text={'OK'} color={'red'} key={'first'} onClick={this.onClickToCloseModal.bind(this)}/>,
          <Button text={'Cancel'} color={'#000000'} key={'second'} onClick={this.onClickToCloseModal.bind(this)}/>
        ],
        bgColor: 'rgba(255,191,186,0.34)'
      },
      infoModal: {
        title: 'This some interesting information',
        closeButton: true,
        text: 'Lorem impsum bla bla bla',
        action: [
          <Button text={'OK'} key={'first'} onClick={this.onClickToCloseModal.bind(this)}/>
        ],
        bgColor: 'rgba(199,254,255,0.48)'
      }
    }
    const state =modals[this.state.currentModal];
    return (
        <div className='mainDiv'>
          <Button text={'Open to delete'}
                  onClick={this.onClickOnDeleteModal.bind(this)}/>
          <Button color={'#5caacd'}
                  text={'Open to read info'}
                  onClick={this.onClickInfoModal.bind(this)}/>
          {this.state.openModal &&
          <Modal
              title={state.title}
              text={state.text}
              action={state.action}
              onClick={this.onClickToCloseModal.bind(this)}
              handleClick={this.handleClick}
              bgColor={state.bgColor}
          />}
        </div>
    )
  }
  }

