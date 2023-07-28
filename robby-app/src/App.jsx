import Login from "./components/Login";
import { useState } from "react";
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
  year: date.getFullYear() - 21
}

const years = [];
for (let i = 1900; i <= date.getFullYear(); i++) {
  years.push(i);
}

function App() {
  const [inputs, setInputs] = useState(legalAge);
  const [underAge, setUnderAge] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const err = "I'm sorry, but you cannot access this site at this time."

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmitted(true);

    //Destructure the inputs object so we can use the values as new variables.
    const { month, day, year } = inputs;

    // Create a new Date object for the selected date at midnight
    const selectedDate = new Date(`${month} ${day}, ${year}`);
    selectedDate.setHours(0, 0, 0, 0); // Set the time to midnight (00:00:00)

    // Create a new Date object for the legal age at midnight
    const legalAgeDate = new Date();
    legalAgeDate.setFullYear(legalAge.year, monthNames.indexOf(legalAge.month), legalAge.day);
    legalAgeDate.setHours(0, 0, 0, 0); // Set the time to midnight (00:00:00)

    // Compare the two dates
    if (selectedDate >= legalAgeDate) {
      setUnderAge(false);
    } else {
      setUnderAge(true);
    }
  }

  return (
    <div>
      <Login
        inputs={inputs}
        setInputs={setInputs}
        handleSubmit={handleSubmit}
        years={years}
        date={date}
      />
      {formSubmitted && (underAge ? <BeerPicker /> : <p>{err}</p>)}

    </div>
  );
}

export default App;
