import React from 'react'
import Header from './components/Header'


class App extends React.Component {
  helpText = 'Help text'

  render() {
    return (
      <div  className='new'>
        <Header title='Шапка профиля' />  
        <h1>{this.helpText}</h1>
        <input placeholder={this.helpText} 
               onClick={this.inputClick} 
               onMouseEnter={this.mouseOver}/>
        <p>{this.helpText === 'Help text!' ? 'Yes' : 'NO'}</p>
      </div>
      )
    }

  inputClick() {console.log('clicked')}
  mouseOver() {console.log('Mouse over')}
}

export default App