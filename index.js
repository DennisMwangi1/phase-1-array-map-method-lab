const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  let cases = tutorials.map((questions)=> {return questions})
  for (const item of cases) {
   let wordSplit = item.toLowerCase().split(" ")
    for (let i = 0; i < wordSplit.length; i++) {
      wordSplit[i] = wordSplit[i].charAt(0).toUpperCase()+wordSplit[i].slice(1)
     
    }
    
     let upperCased = wordSplit.join(' ')
    let arr =[upperCased]
    console.log(arr)
    
  }

   
} 
console.log(titleCased(tutorials))
