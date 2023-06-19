import { useState } from "react";

function App() {
  const [value, setValue] = useState(5);
  const [options, setOptions] = useState({
    upperCase: true,
    lowerCase: true,
    includeNumbers: true,
    includeSymbols: true
  })

  function makeid(length) {
    let result = "";
    let characters = "";
    const charactersLower = "abcdefghijklmnopqrstuvwxyz";
    const charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const characterNumbers = "0123456789";
    const characterSymbols = "!@#$%^&*()-_+=;:,./?|`~[]{}"

    if(options.lowerCase) {
      characters = characters.concat(charactersLower)
    }
    if(options.upperCase) {
      characters = characters.concat(charactersUpper)
    }
    if(options.includeNumbers) {
      characters = characters.concat(characterNumbers)
    }
    if(options.includeSymbols) {
      characters = characters.concat(characterSymbols)
    }

    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }


    return result;
  }

  return (
    <>
    <div>{options.upperCase}</div>
      <div>{makeid(value)}</div>

      <div>
        <input
          type="range"
          id="character"
          min="0"
          max="20"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <label htmlFor="character">{value}</label>
      </div>
    </>
  );
}

export default App;
