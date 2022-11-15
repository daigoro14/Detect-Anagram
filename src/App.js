import {useState} from 'react'
import checkStringsAnagram from './checkStringsAnagram'

function App() {

  const [string1, setString1] = useState('')
  const [string2, setString2] = useState('')
  const [message, setMessage] = useState('Write something in the input fields to see if they are anagrams')


 
 function sendStrings() {
  const result = checkStringsAnagram(string1, string2) 
  setMessage(result)
 }

  return (
    <>
      <input 
        data-testid="input1" 
        onChange={(e) => setString1(e.target.value)}
      />
      <input 
        data-testid="input2" 
        onChange={(e) => setString2(e.target.value)}
      />
      <button data-testid="button" onClick={sendStrings}>Click</button>
      <p data-testid="message">{message}</p>
    </>
  );
}

export default App;