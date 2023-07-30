import { useState } from "react";
import Profile from "./Profile";

const BeerPicker = () => {
    const [listBeer, setListBeer] = useState([0, 0, 0, 0, 0, 0]);
    const [submit, setSubmit] = useState(false);
    const [result, setResult] = useState("");
    const [beerButtonClicked, setBeerButtonClicked] = useState([false, false, false, false, false, false]);

    const beerProfiles = [
        [0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1]
    ]
    //0 -beginner beer
    //1-3 -light beer
    //4-6 -amber beer
    //7-9 -dark beer
    //sum of all values >=5 -you just like beer!
    //default -try an irish red

    function handleSubmit(e) {
        e.preventDefault();

        //TODO: would like to see if I could get this working rather, than disabling buttons in the jsx code.
        // setListBeer(prevListBeer => {
        //     return prevListBeer.map(value => (value >= 1 ? 1 : 0));
        // });

        // Calculate the sum of all elements in the listBeer array
        const sumOfBeers = listBeer.reduce((a, b) => a + b, 0);

        // Check if the sum is greater than or equal to 5
        if (sumOfBeers >= 5) {
            setResult("you just like beer!");
        } else {
            //findIndex() is stopping as soon as a truthy value in found and return that index. every() will only return true if all elements in a profile match.
            const matchingIndex = beerProfiles.findIndex((profile) =>
                profile.every((value, index) => value === listBeer[index])
            );

            // Set the result based on the matching index
            switch (matchingIndex) {
                case 0:
                    setResult("you should maybe try a begginner beer, like Blue Moon.");
                    break;
                case 1:
                case 2:
                case 3:
                    setResult("it looks like you are fond of light beers, have you given Delerium Tremens a try?");
                    break;
                case 4:
                case 5:
                case 6:
                    setResult("I think you would like an amber beer, have you tried Leffe Abrée?");
                    break;
                case 7:
                case 8:
                case 9:
                    setResult("you have good taste! I am going to recommend you try PLUTONIUM-239. It's a really nice beer made here in Dallas, TX.");
                    break;
                default:
                    setResult("have you given an Irish red a try? I like Smithwick's Red Ale.");
                    break;
            }
        }

        setSubmit(true);

        setListBeer([0, 0, 0, 0, 0, 0]);
        setBeerButtonClicked([false, false, false, false, false, false]);
    }

    function handleClick(e) {
        const beerIndex = parseInt(e.target.value);
        setListBeer(prevList => {
            return prevList.map((value, index) => (index === beerIndex ? value + 1 : value));
        });
        setBeerButtonClicked(prevState => prevState.map((clicked, index) => (index === beerIndex ? true : clicked)));
        //every time the button is clicked it has to go through every element in the array, so you need to make sure to say, that if the element is not the current target, retun the previous value it was. If you say to return false, it will remove the true (or already clicked) status, on other buttons not clicked during this instance.
        setSubmit(false);
    }

    return (
        <div>
            <h1>Choose your favorite beer(s).</h1>
            <button value={0} onClick={handleClick} disabled={beerButtonClicked[0]}>Fireman's #4</button>
            <button value={1} onClick={handleClick} disabled={beerButtonClicked[1]}>Dos Equis</button>
            <button value={2} onClick={handleClick} disabled={beerButtonClicked[2]}>Ziegen Bock</button>
            <button value={3} onClick={handleClick} disabled={beerButtonClicked[3]}>Samuel Adams October Fest</button>
            <button value={4} onClick={handleClick} disabled={beerButtonClicked[4]}>Guinness</button>
            <button value={5} onClick={handleClick} disabled={beerButtonClicked[5]}>Shiner Black Lager</button>
            <hr />
            <p>Beer 1: {listBeer[0]}</p>
            <p>Beer 2: {listBeer[1]}</p>
            <p>Beer 3: {listBeer[2]}</p>
            <p>Beer 4: {listBeer[3]}</p>
            <p>Beer 5: {listBeer[4]}</p>
            <p>Beer 6: {listBeer[5]}</p>
            <br />
            <form onSubmit={handleSubmit}>
                <button type='submit'>Submit</button>
            </form>

            {submit && <Profile result={result} />}

        </div>
    )
}

export default BeerPicker