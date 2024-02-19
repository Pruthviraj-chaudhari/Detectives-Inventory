import { useEffect, useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

export default function CardWithForm() {
  const [isChanged, setIsChanged] = useState(false); // Add state to track changes in the component
  const [data, setData] = useState([]);
  const [detective, setDetective] = useState({});
  const detectiveEmail = localStorage.getItem("email");


  async function handleClick(componentId) {
    try {
      const detectiveEmail = localStorage.getItem("email"); // Retrieve detective's email from localStorage

      const response = await axios({
        url: `${import.meta.env.VITE_API_PURCHASE}/${componentId}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: detectiveEmail, // Pass detective's email in the request body
        },
        withCredentials: true,
      });

     

      if (response.status === 200) {
        toast.success(response.data.message);
      } else if (response.status === 201 || response.status === 203) {
        toast.error(response.data.message);
      }
      setIsChanged(!isChanged); // Update the state to trigger a re-render
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("An error occurred during the purchase process");
    }
  }
  
  useEffect(() => {
    const fetchDetectiveData = async () => {
      try {
        const response = await axios.post(import.meta.env.VITE_API_GET_DETECTIVE, {
          email: detectiveEmail,
        });

        // Update detective state
        response.data.purchaseItems = response.data.purchaseItems || [];
        setDetective(response.data);
      } catch (error) {
        console.error("Error fetching detective data:", error);
      }
    };

    fetchDetectiveData();
  }, [isChanged]);


  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_GET_COMPONENTS)
      .then((res) => {
        setData(res.data);
        // Log the data after updating the state
      })
      .catch((error) => {
        console.error("Error fetching component data:", error);
      });
  }, []);
 

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <Navbar isChanged={isChanged} setIsChanged={setIsChanged}></Navbar>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap justify-center gap-7 mt-20 my-3 p-6">
            {data.map(({ componentId, name, image, price, points ,link}) => (
              <Card key={componentId} className="w-[350px]">
      
                <CardHeader className="max-w-full h-[300px] overflow-hidden mb-4 flex justify-center">
                  <img
                    src={image}
                    alt="Card Image"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription>Price : {price}</CardDescription>
                  <CardDescription>Points : {points}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {
                  detective.purchaseItems &&
                  detective.purchaseItems.includes(componentId) ? (
                    <Button
                      size="lg"
                      className="bg-green-800"
                    >
                      <Link to={link} target="_blank" className="flex items-center gap-2">Get Source Code <FaCode/> </Link> 
                    </Button>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="lg" className="">
                          Buy 
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Confirm To Buy</DialogTitle>
                          <DialogDescription>
                            Do You want to Buy the Component ?
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose
                            onClick={() => handleClick(componentId)}
                            className=""
                          >
                            <Button> Confirm Buy</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
