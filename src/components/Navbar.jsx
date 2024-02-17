import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import axios from "axios";
import { useEffect, useState } from "react";

export function Navbar({isChanged,setIsChanged}) {
  const [detective, setDetective] = useState({});

  const detectiveEmail = localStorage.getItem("email");

  useEffect(() => {
    const fetchDetectiveData = async () => {
      try {
        const response = await axios.post('https://detectives-return-backend.onrender.com/detectives', {
          email: detectiveEmail 
        });
        
        // Update detective state
        setDetective(response.data);
      } catch (error) {
        console.error('Error fetching detective data:', error);
      }
    };

    fetchDetectiveData();
  }, [isChanged]); // Add detectiveEmail to the dependency array

  // Ensure that detective state is properly updated before rendering
  return (
    <div className="flex flex-wrap m-5 p-2">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <span className="text-black font-bold text-lg mr-2">
                  Team Name:
                </span>
                {detective.teamName}
              </MenubarTrigger>
              <MenubarTrigger>
                <span className="text-black font-bold text-lg mr-2">Total Points:</span>{" "}
                {detective.points}
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
  );
}
