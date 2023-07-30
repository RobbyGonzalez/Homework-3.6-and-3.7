import Login from "./components/Login";
import { useState } from "react";
import { createContext } from "react";
import BeerPicker from './components/BeerPicker'

//instantiating the date object
const date = new Date();
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const legalAge = {
  month: monthNames[date.getMonth()],
  day: date.getDate(),
  year: date.getFullYear() - 21,
  name: ""
}

const years = [];
for (let i = 1900; i <= date.getFullYear(); i++) {
  years.push(i);
}

export const NameContext = createContext();

function App() {
  const [inputs, setInputs] = useState(legalAge);
  // const [name, setName] = useState("")
  const [underAge, setUnderAge] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const err = "I'm sorry, but you cannot access this site at this time."

  //Destructure the inputs object so we can use the values as new variables.
  const { month, day, year, name } = inputs;

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);

    // Create a new Date object for the selected date
    const selectedDate = new Date(`${month} ${day}, ${year}`);
    const selectedDateMillis = selectedDate.getTime(); // Convert to milliseconds

    // Create a new Date object for the legal age
    const legalAgeDate = new Date();
    legalAgeDate.setFullYear(legalAge.year, monthNames.indexOf(legalAge.month), legalAge.day);
    const legalAgeMillis = legalAgeDate.getTime(); // Convert to milliseconds

    // Compare the two dates
    if (selectedDateMillis >= legalAgeMillis) {
      setUnderAge(false);
    } else {
      setUnderAge(true);
    }
  }

  return (
    <div>
      <NameContext.Provider value={name}>
        <Login
          inputs={inputs}
          setInputs={setInputs}
          handleSubmit={handleSubmit}
          years={years}
        // name={name}
        // setName={setName}
        />
        {formSubmitted && (underAge ? <BeerPicker /> : <p>{err}</p>)}
      </NameContext.Provider>
    </div>
  );
}

export default App;
