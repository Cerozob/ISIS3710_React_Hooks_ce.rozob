import { useState } from "react";
const axios = require("axios");

const useForm = (schema) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
        let name = inputs.name;
        let company = inputs.company;
        let salary = inputs.salary;
        let city = inputs.city;

        let offer = {
            "name": name,
            "company": company,
            "salary": salary,
            "city": city
        }

        axios.post('/offers', offer);

    event.preventDefault();
    console.log("Form submitted");
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return { handleSubmit, handleInputChange };
};

export default useForm;