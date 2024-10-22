import React from 'react'

//leaving the parameters name and setName, just in case I want to revert back to name state being separate from input state.
//TODO: can you conditional show days based the month selected?
const Login = ({ inputs, setInputs, handleSubmit, years, name, setName }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Are you over 21?</h1>
                <label>Birth Month</label>
                <select value={inputs.month} onChange={e => setInputs({ ...inputs, month: e.target.value })}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <label>Birth Day</label>
                <select value={inputs.day} onChange={e => setInputs({ ...inputs, day: e.target.value })}>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <label>Birth Year</label>
                <select value={inputs.year} onChange={e => setInputs({ ...inputs, year: e.target.value })}>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <br />
                <label>Please enter your name: </label>
                <input
                    value={inputs.name}
                    onChange={e => setInputs({ ...inputs, name: e.target.value })}
                    required
                />
                < button type="submit" > Submit</button>
            </form>
        </div>
    )
}

export default Login
