function Meals() {
    return (
        <>
            <h1 className="header">Meals🥗</h1>
            <form id="input-display">
                <input
                    type="number"
                    placeholder="Enter your weight in kg"
                    className="input"
                />
                <br />
                <br />
                <input
                    type="number"
                    placeholder="Enter your height in ft"
                    className="input"
                />
            </form>
        </>
    );
}

export default Meals;
