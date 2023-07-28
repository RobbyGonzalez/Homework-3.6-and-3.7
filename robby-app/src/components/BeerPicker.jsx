import { useState } from "react";

const BeerPicker = () => {
    const [listBeer, setListBeer] = useState([0, 0, 0, 0, 0, 0]);

    const beerProfiles = [
        [0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1]
    ]
    //0 -beginner beer
    //1-2 -light beer
    //3-4 -amber or red beer
    //5-6 -dark beer
    //sum of all values >=5 -you just like beer!


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
    }

    function handleClick(e) {
        const beerIndex = parseInt(e.target.value);
        setListBeer(prevList => {
            return prevList.map((value, index) => (index === beerIndex ? value + 1 : value));
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default BeerPicker