import useForm from "../hooks/customHooks";

export const Form = () => {
    const { handleSubmit , handleInputChange} = useForm();
    return (
    <div>
            <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label htmlFor="company">Company</label>
            <input
                type="text"
                id="company"
                name="company"
                autoComplete="company"
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label htmlFor="salary">Salary</label>
            <input
                type="text"
                id="salary"
                name="salary"
                autoComplete="salary"
                onChange={handleInputChange}
            />
        </div>
              
        <div>
            <label htmlFor="city">City</label>
            <input
                type="text"
                id="city"
                name="city"
                autoComplete="city"
                onChange={handleInputChange}
            />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Form;