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
        <input
          type="number"
          placeholder="Enter your height in ft"
          className="input"
        />
        <br />
        <input
          type="text"
          placeholder="Are you a vegetarian?"
          className="input"
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Meals;
