const AsignSelect = () => {
  return (
    <div>
      {/* <label htmlFor="suggestions">Suggestions</label> */}
      <select
        className=" w-full border border-cyan-500 focus:border-cyan-500 focus:outline-0 rounded-md h-10"
        id="suggestions"
      >
        <option value="" disabled selected>
          Assign
        </option>
        <option value="1">Alireza</option>
        {/* Add other options here */}
      </select>
    </div>
  );
};

export default AsignSelect;
