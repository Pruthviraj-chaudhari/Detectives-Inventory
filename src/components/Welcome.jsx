/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/contexts/AppContext";
import { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const Welcome = () => {

  const { isLogin } = useContext(AppContext);

  const navigate = useNavigate();

  const handleAddMe = () => {
    navigate("/auth");
  };

  const handleMyProfile = () => {
    navigate("/myprofile");
  }

  const handleDiscover = () => {
    navigate("/profiles");
  };

  return (
    <Card className="flex flex-col lg:flex-row  max-w-[90vw] md:w-[80vw] border-black justify-center mx-auto p-0 rounded-lg shadow-md m-3">
      <div className="ml-5 lg:ml-10">
        <CardHeader className="pl-0">
          <CardTitle className="text-2xl">
            <div className="flex gap-2 w-full">
              <img
                className="w-[100px]"
                src="https://i.ibb.co/mb0W3LS/pngegg.png"
                alt=""
              />
              <img
                className="w-[100px] h-[90px]"
                src="https://www.rcpit.ac.in/uploads/1599837268.png"
                alt=""
              />
            </div>
            Akatsuki Coding Club
          </CardTitle>
        </CardHeader>
        <CardContent className="p-1">
          <CardDescription className="lg:text-lg">
            Welcome to{" "}
            <span className="text-slate-900 font-medium">
              Detective Returns - The Unfinished Buisness!
            </span>
            <br />
            <br />
            Get Ready for the thrilled, the Coding Skill. So Let's have some chill.
            <br />
            <br />
            Let's Go ❤️
            <br />
            <br />
            Click Login
          </CardDescription>
        </CardContent>
        <CardFooter className="p-1 mt-4 gap-4 flex justify-start items-center">
          
          {!isLogin && (
            <Button
              className="border-slate-700 border-2"
              variant="outline"
              onClick={handleAddMe}
            >
              Login
            </Button>
          )}
          {isLogin && (
            <Button
              className="border-slate-700 border-2"
              variant="outline"
              onClick={handleMyProfile}
            >
              My Profile
            </Button>
          )}
        </CardFooter>
      </div>

      <div className="flex justify-center lg:w-[80%]">
        <img src="https://firebasestorage.googleapis.com/v0/b/detectives-return.appspot.com/o/Detective%E2%80%99s%20Returns%20logo.jpg?alt=media&token=f1f266ce-369e-42dc-beb4-da89cf690259" alt="Students" />
      </div>
    </Card>
  );
};

export default Welcome;
