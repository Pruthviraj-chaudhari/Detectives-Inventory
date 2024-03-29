/* eslint-disable react/no-unescaped-entities */
import Login from "../components/Login";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function AuthPage() {

  // const [signupForm, setSignupForm] = useState(false);

  return (
    <>
      <Card className="flex flex-col justify-center items-center lg:flex-row bg-black text-white border-none max-w-[90vw] md:w-[80vw] mx-auto p-2 rounded-lg m-3">
        <div className="ml-5 lg:w-1/2">
          <CardHeader>
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
          <CardContent className="p-6">
            <CardDescription className="lg:text-lg">
              
              <span className="text-white font-medium">
                Login to Inventory!
              </span>
              <br />
              <br />
              Get Ready for the thrilled, the Coding Skill. So Let's have some chill.
              <br />
              <br />
              Let's Go ❤️
            </CardDescription>
          </CardContent>
          <CardFooter className="p-1 mt-4 gap-4 flex justify-start items-center"></CardFooter>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <div className="lg:p-8 ">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Welcome Back
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your unique team ID & password below to login
                </p>
              </div>
              <div className="flex flex-col gap-5">
                    <Login />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
