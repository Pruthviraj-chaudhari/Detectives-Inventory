/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Navbar({ isChanged }) {
  const [detective, setDetective] = useState({});

  const detectiveEmail = localStorage.getItem("email");

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
        setDetective(response.data);
      } catch (error) {
        console.error("Error fetching detective data:", error);
      }
    };

    fetchDetectiveData();
  }, [isChanged]); // Add detectiveEmail to the dependency array

  // Ensure that detective state is properly updated before rendering
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="flex items-center justify-center">
        <img
          className="w-[150px] h-[150px]"
          src="https://firebasestorage.googleapis.com/v0/b/detectives-return.appspot.com/o/Detective%E2%80%99s%20Returns%20logo.jpg?alt=media&token=f1f266ce-369e-42dc-beb4-da89cf690259"
          alt="Students"
        />
      </div>
      <div className="grid md:gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        <Card className="bg-dark text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">
              {" "}
              {detective.teamName}
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              +{detective.rewards}<span className="text-sm font-light"> points earned</span>
            </div>
            <p className="text-xs text-muted-foreground">
              +180.1% continental points
            </p>
          </CardContent>
        </Card>
        <Card className="bg-dark text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium">Wallet Money</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$ {detective.points}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
