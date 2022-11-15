import {useState} from 'react'
// const {useState} = require('react')

function App() {

  const [string1, setString1] = useState('')
  const [string2, setString2] = useState('')
  const [message, setMessage] = useState('Write something in the input fields to see if they are anagrams')

  function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
      setMessage(`${a} and ${b} are NOT anagrams!`)
       return
    }
    let str1 = a.toLowerCase().split('').sort().join('');
    let str2 = b.toLowerCase().split('').sort().join('');
    if(str1 === str2){
        console.log(str1, str2)
       setMessage(`${a} and ${b} are anagrams!`)
    } else { 
      console.log(str1, str2)
       setMessage(`${a} and ${b} are NOT anagrams!`)
    }
 }
 
 function sendStrings() {
  checkStringsAnagram(string1, string2)
 }

  return (
    <>
      <input onChange={(e) => setString1(e.target.value)}/>
      <input onChange={(e) => setString2(e.target.value)}/>
      <button onClick={sendStrings}>Click</button>
      <p>{message}</p>
    </>
  );
}

export default App;