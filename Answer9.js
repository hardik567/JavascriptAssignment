let charRepeats = (str) => {
    for (let i=0; i<str.length; i++) {
      if (str[0] === str[i])  {
        return (str[0]); 
      }
    }
  return null;
}
let example = 'hellobhailog';
console.log("Repeated First Alphabet :-" + "   "  +  charRepeats(example) );