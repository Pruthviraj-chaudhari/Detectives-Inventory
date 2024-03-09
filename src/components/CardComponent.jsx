/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DrawerComponent from "./DrawerComponent";

const CardComponent = ({
  componentId,
  name,
  image,
  price,
  points,
  link,
  detective,
  handlePurchase,
}) => {
  return (
    <Card key={componentId} className="w-[350px] flex flex-col gap-4">
      <CardHeader className="max-w-full h-[300px] overflow-hidden mb-4 flex justify-center">
        <img src={image} alt="Card Image" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <div className="flex justify-between">
          <CardDescription className="text-3xl font-bold text-gray-900 dark:text-white">
            ₹{price}
          </CardDescription>
          <CardDescription className="text-3xl font-bold text-yellow-500 dark:text-white">
            +{points} <span className="text-sm">Points</span>
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {detective.purchaseItems &&
        detective.purchaseItems.includes(componentId) ? (
          <Button size="lg" className="w-full bg-green-800 hover:bg-green-900">
            <Link to={link} target="_blank" className="flex items-center gap-2">
              Get Source Code <FaCode />{" "}
            </Link>
          </Button>
        ) : (
          <DrawerComponent
            componentId={componentId}
            name={name}
            image={image}
            price={price}
            points={points}
            handlePurchase={handlePurchase}
          />
        )}
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
