import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import useApiHandler from "@/Hooks/useApiHandler";
import { checkRequiredFields } from "@/utils/formUtils";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const  navigate  = useNavigate();


  const [formData, setFormData] = useState({
    teamId: "",
    password: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//  make post request at localhost:5000/login
//  which will take FormData
const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  try {
    const response = await axios.post('https://detectives-return-backend.onrender.com/login', formData);

    // Handle response data as needed
    const email = response.data.email;
    localStorage.setItem('email', email);
    navigate('/inventory');
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    if (error.response.status === 401) {
      // Unauthorized: Incorrect credentials
      toast.warning("Incorrect team ID or password");
    } else {
      // Other error occurred
      toast.error("An error occurred. Please try again later.");
    }
  }
};



  return (
    <form>
      <div className="mt-3 flex flex-col gap-2">
        <Label>TeamID</Label>
        <Input
          name="teamId"
          value={formData.teamId}
          type="text"
          onChange={changeHandler}
          className="border border-gray-600"
          placeholder="DR01"
        ></Input>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <Label>Password</Label>
        <Input
          name="password"
          value={formData.password}
          type="text"
          onChange={changeHandler}
          className="border border-gray-600"
          placeholder="Ex : abc"
        ></Input>
      </div>

      <Button
        variant="outline"
        type="submit"
        className="text-black w-full mt-5"
        onClick={handleSubmit    }
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
