import React from 'react'
import * as ReactDOMClient  from 'react-dom/client'

const inputClick = () => console.log('clicked')
const mouseOver = () => console.log('Mouse over')

const helpText = 'Help text'


function App() {
  return (<div  className='name'>
  <h1>{helpText}</h1>
  <input placeholder={helpText} 
         onClick={inputClick} onMouseEnter={mouseOver}/>
  <p>{helpText === 'Help text!' ? 'Yes' : 'NO'}</p>
</div>)
}

const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(<App />)