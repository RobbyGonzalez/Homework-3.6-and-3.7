import { useState, useReducer } from "react";

function reducer(currentState, actionToTake) {

    if (actionToTake.type === "makeBinary") {
        const binaryArr = actionToTake.payload.listBeer.map(value => (value >= 1 ? 1 : 0));
        return binaryArr;
    }

}

const BeerPicker = () => {
    const [listBeer, setListBeer] = useState([0, 0, 0, 0, 0, 0]);
    const [userBeerList, dispatch] = useReducer(reducer, [0, 0, 0, 0, 0, 0]);
    //we want to perform a function on the listBeer state, so we use a Reducer
    //we are essentially creating a mirror state.
    //dispatch() is the same thing as setState(), but it calls a custom reducer function first.

    const submitFlag = false;

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


    // Function to generate all possible combinations of listBeer
    // const generateCombinations = (arr, index, temp, result) => {
    //     if (index === arr.length) {
    //         result.push([...temp]);
    //         return;
    //     }

    //     for (let i = 0; i <= 1; i++) {
    //         temp[index] = i;
    //         generateCombinations(arr, index + 1, temp, result);
    //     }
    // };

    // const beerVariations = [];
    // generateCombinations(listBeer, 0, [], beerVariations);

    // console.log(beerVariations)

    function handleSubmit(e) {
        e.preventDefault();
        // const newUserBeerList = []
        // setUserBeerList();

        // let result;

        // setListBeer(prevListBeer => {
        //     return prevListBeer.map(value => (value >= 1 ? value = 1 : value))
        // });

        // listBeer.every()

        // if ((listBeer[0] + listBeer[1]) >= 1) {
        // }

        dispatch({ type: "makeBinary", payload: { listBeer: listBeer } });

        let result = "";

        setListBeer(prevListBeer => {
            return prevListBeer.map(value => (value >= 1 ? 1 : 0));
        });

        // Calculate the sum of all elements in the listBeer array
        const sumOfBeers = listBeer.reduce((acc, val) => acc + val, 0);

        // Check if the sum is greater than or equal to 5
        if (sumOfBeers >= 5) {
            result = "You just like beer!";
        } else {
            // Use map() to iterate over the beerProfiles array and compare each element
            const matchingIndex = beerProfiles.findIndex((profile) =>
                profile.every((value, index) => value === listBeer[index])
            );

            // Set the result based on the matching index
            switch (matchingIndex) {
                case 0:
                    result = "Beginner beer";
                    break;
                case 1:
                case 2:
                case 3:
                    result = "Light beer";
                    break;
                case 4:
                case 5:
                case 6:
                    result = "Amber beer";
                    break;
                case 7:
                case 8:
                case 9:
                    result = "Dark beer";
                    break;
                default:
                    result = "Try an Irish Red";
                    break;
            }
        }

        console.log("Beer Preference:", result);

        //flip the submitFlag
        //set beer counts back to 0
    }

    function handleClick(e) {
        const beerIndex = parseInt(e.target.value);
        setListBeer(prevList => {
            return prevList.map((value, index) => (index === beerIndex ? value + 1 : value));
        });
    }

    return (
        <div>
            <h1>Choose your favorite beer(s).</h1>
            <button value={0} onClick={handleClick}>Beer 1</button>
            <button value={1} onClick={handleClick}>Beer 2</button>
            <button value={2} onClick={handleClick}>Beer 3</button>
            <button value={3} onClick={handleClick}>Beer 4</button>
            <button value={4} onClick={handleClick}>Beer 5</button>
            <button value={5} onClick={handleClick}>Beer 6</button>
            <hr />
            <p>Beer 1: {listBeer[0]}</p>
            <p>Beer 2: {listBeer[1]}</p>
            <p>Beer 3: {listBeer[2]}</p>
            <p>Beer 4: {listBeer[3]}</p>
            <p>Beer 5: {listBeer[4]}</p>
            <p>Beer 6: {listBeer[5]}</p>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default BeerPicker