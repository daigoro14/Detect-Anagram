  function checkStringsAnagram(a, b) {
    const len1 = a.length;
    const len2 = b.length;
    if(len1 !== len2){
      return `${a} and ${b} are NOT anagrams!`
    }
    const str1 = a.toLowerCase().split('').sort().join('');
    const str2 = b.toLowerCase().split('').sort().join('');
    if(str1 === str2){
        console.log(str1, str2)
        return `${a} and ${b} are anagrams!`
    } else { 
      console.log(str1, str2)
       return `${a} and ${b} are NOT anagrams!`
    }
 }

 export default checkStringsAnagram