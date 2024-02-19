/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";


const SkeletonCard = () => {
  return Array.from({ length: 9 }).map((_, index) => (
    <Card key={index} className="w-[350px] bg-neutral-950 border-none">
      <CardHeader className="max-w-full h-[300px] overflow-hidden mb-4">
        <Skeleton className="h-full w-full rounded-lg bg-neutral-900 " />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-6 w-3/4 mb-2 bg-neutral-900 " />
        <Skeleton className="h-6 w-1/2 mb-2 bg-neutral-900" />
        <Skeleton className="h-6 w-1/3 mb-2 bg-neutral-900" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Skeleton className="h-10 w-1/3" />
      </CardFooter>
    </Card>
  ));
};

export default SkeletonCard;
