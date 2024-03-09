/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
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
import { CardDescription } from "./ui/card";


const DrawerComponent = ({ componentId, name, image, price, points, handlePurchase }) => {
  return (
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
                <DrawerTitle className="text-3xl font-bold text-gray-900 mb-4">
                  {name}
                </DrawerTitle>
                <DrawerDescription>
                  <div className="flex justify-evenly mb-4">
                    <CardDescription className="text-3xl font-bold text-gray-900 dark:text-white">
                      ₹{price}
                    </CardDescription>
                    <CardDescription className="text-3xl font-bold text-yellow-500 dark:text-white">
                      +{points} <span className="text-sm">Points</span>
                    </CardDescription>
                  </div>
                  Do You want to Buy the Component ?
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose
                  onClick={() => handlePurchase(componentId)}
                  className=""
                >
                  <Button size="lg"> Confirm Buy</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
  );
};

export default DrawerComponent;
