import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LuLoader2 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setToken, setLoading } from "@/redux/slices";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setLoading(true));
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_LOGIN_URL,
        formData
      );
      const { token, detective } = response.data;
      dispatch(setToken(token));
      dispatch(setUser(detective));

      localStorage.setItem("token", token);
      localStorage.setItem("detective", JSON.stringify(detective));
    } catch (error) {
      console.error("Error:", error);
      if (error.response.status === 401) {
        toast.warning("Incorrect team ID or password");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
    dispatch(setLoading(false));
    navigate("/inventory");
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

      {loading ? (
        <Button variant="outline" className="text-black w-full mt-5">
          <LuLoader2 className="mr-2 h-4 w-4 animate-spin " />
          Please wait
        </Button>
      ) : (
        <Button
          variant="outline"
          type="submit"
          className="text-black w-full mt-5"
          onClick={handleSubmit}
        >
          Login
        </Button>
      )}
    </form>
  );
};

export default Login;
