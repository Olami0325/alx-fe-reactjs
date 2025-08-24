import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,});
  };

  const {username, email, password} = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="mb-4">Registration Form</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Your Username"
          value={username}
          onChange={handleChange}
          className="border border-gray-800 rounded  px-3 py-2 mb-4"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={handleChange}
          className="border border-gray-800 rounded  px-3 py-2 mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={handleChange}
          className="border border-gray-800 rounded  px-3 py-2 mb-4"
        />
        <button  type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Submit
        </button>
         
      </form>
    </div>
  );
}
export default RegistrationForm;
