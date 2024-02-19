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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import SkeletonCard from "./SkeletonCard";

export default function CardWithForm() {
  const [isChanged, setIsChanged] = useState(false); // Add state to track changes in the component
  const [data, setData] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
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
        const response = await axios.post(
          import.meta.env.VITE_API_GET_DETECTIVE,
          {
            email: detectiveEmail,
          }
        );

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
        setShowSkeleton(false);
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
            {showSkeleton ? (
              <SkeletonCard />
            ) : (
              data.map(({ componentId, name, image, price, points, link }) => (
                <Card key={componentId} className="w-[350px] flex flex-col gap-4">
                  <CardHeader className="max-w-full h-[300px] overflow-hidden mb-4 flex justify-center">
                    <img src={image} alt="Card Image" />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl font-semibold">{name}</CardTitle>
                    <div className="flex justify-between">
                    <CardDescription className="text-3xl font-bold text-gray-900 dark:text-white">₹{price}</CardDescription>
                    <CardDescription className="text-3xl font-bold text-yellow-500 dark:text-white">+{points} <span className="text-sm">Points</span></CardDescription>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {detective.purchaseItems &&
                    detective.purchaseItems.includes(componentId) ? (
                      <Button
                        size="lg"
                        className="w-full bg-green-800 hover:bg-green-900"
                      >
                        <Link
                          to={link}
                          target="_blank"
                          className="flex items-center gap-2"
                        >
                          Get Source Code <FaCode />{" "}
                        </Link>
                      </Button>
                    ) : (
                      <Drawer>
                        <DrawerTrigger asChild>
                          <Button size="lg" className="w-full bg-black">
                            Buy
                          </Button>
                        </DrawerTrigger>
                        <DrawerContent className="w-full flex justify-center items-center">
                          <DrawerHeader className="w-full flex flex-col justify-center items-center">
                            <div className="max-w-full h-[300px] overflow-hidden mb-4 flex justify-center">
                              <img src={image} className="" alt="Card Image" />
                            </div>
                            <DrawerTitle className="text-2xl">{ name }</DrawerTitle>
                            <DrawerDescription>
                              Do You want to Buy the Component ?
                            </DrawerDescription>
                          </DrawerHeader>
                          <DrawerFooter>
                            <DrawerClose
                              onClick={() => handleClick(componentId)}
                              className=""
                            >
                              <Button size="lg"> Confirm Buy</Button>
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                    )}
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
