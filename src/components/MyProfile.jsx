/* eslint-disable react/prop-types */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
import { SiGmail } from "react-icons/si";
import { VscEye } from "react-icons/vsc";
import { MdEdit } from "react-icons/md";
// import { IoIosArrowBack } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";
import {
  CardHeader,
  CardTitle,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "@/contexts/AppContext";

const MyProfile = () => {
  const navigate = useNavigate();

  // const { userData } = useContext(AppContext); 

  // useEffect(()=>{
  // console.log("MY PROFILE: ", userData);
  // }, [])

  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start max-w-[90vw] md:w-[80vw] px-4 mx-auto py-6">
      <div className="flex flex-col gap-6 h-full ">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex justify-between">
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => navigate(-1)}>
                  <MdArrowBackIosNew />
                </Button>
                <Button
                  variant="outline"
                  className=""
                  onClick={() => navigate("/completeprofile")}
                >
                  Edit Profile
                  <MdEdit className="ml-1" />
                </Button>
              </div>
              Developer Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center gap-4 p-6">
            <Avatar className="h-52 w-52">
              {/* <AvatarImage
                alt={`Profile of ${userData.name}`}
                src={
                  userData.image ||
                  `https://ui-avatars.com/api/?name=${userData.name}`
                }
              /> */}
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            {/* <h2 className="text-2xl font-semibold">{userData.name}</h2>
            <p className="text-gray-500 dark:text-gray-400 font-mono">
              {userData.role}
            </p> */}
            {/* <div className="flex flex-wrap gap-2">
              {userData.skills.map((skill, index) => (
                <Badge
                  key={index}
                  className="rounded-full px-3 py-1 bg-slate-900"
                >
                  {skill}
                </Badge>
              ))}
            </div> */}
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold">About Me</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              {/* {userData.about} */}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold">Profiles</h2>
            <div className="grid gap-4 grid-cols-2 mt-4">
              <a
                // href={userData.github}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="h-5 w-5" />
                <span>Github</span>
              </a>
              <a
                // href={userData.linkedin}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a
                // href={userData.instagram}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a
                // href={`mailto:${userData.email}`}
                className="flex items-center gap-2"
              >
                <SiGmail className="h-5 w-5" />
                <span>Email</span>
              </a>
              <a
                // href={userData.leetcode}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="h-5 w-5" />
                <span>LeetCode</span>
              </a>
              <a
                // href={userData.gfg}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGeeksforgeeks className="h-5 w-5" />
                <span>GFG</span>
              </a>
              <a
                // href={userData.codechef}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodechef className="h-5 w-5" />
                <span>CodeChef</span>
              </a>
              <a
                // href={userData.hackerrank}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaHackerrank className="h-5 w-5" />
                <span>HackerRank</span>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Resume</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Click the button below to see my resume.</p>
          </CardContent>
          <CardFooter>
            <a
              // href={userData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full py-4 " variant="outline">
                View Resume <VscEye className="h-4 w-4 mx-2" />
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MyProfile;
