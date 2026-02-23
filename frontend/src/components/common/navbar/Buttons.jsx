import React, { useState } from "react";
import LocalButton from "../Button";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { getData } from "@/context/userContext";
import { toast } from "sonner";

const Buttons = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const { user, setUser } = getData();
  const [toggle, setToggle] = useState(false);
  const logoutHandler = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.data.success) {
        navigate("/login");
        localStorage.clear();
        setUser(null);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const primaryButtonName = [
    {
      name: "Home",
      route: "/",
    },

    {
      name: "Courses",
      route: "/courses",
    },

    {
      name: "Instructor",
      route: "/instructor",
    },

    {
      name: "About",
      route: "/about",
    },
  ];

  const loginAndSignupButton = [
    {
      name: "Login",
      route: "/login",
    },

    {
      name: "SignUp",
      route: "/signup",
    },
  ];

  return (
    <>
      <div className="hidden lg:flex items-center">
        {primaryButtonName.map((button, idx) => {
          return (
            <LocalButton btnName={button.name} key={idx} url={button.route} />
          );
        })}
        {!user ? (
          loginAndSignupButton.map((btn, idx) => {
            return <LocalButton btnName={btn.name} key={idx} url={btn.route} />;
          })
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full ml-5">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={user.avatar || "https://github.com/shadcn.png"}
                    alt="shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white mt-3 p-1">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-500" />
                <DropdownMenuItem className="hover:bg-gray-100">
                  <User />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-gray-100"
                  onClick={() => navigate("/mybatch")}
                >
                  <Video />
                  My Batch
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="bg-gray-300" />
              <DropdownMenuItem
                className="hover:bg-gray-100"
                onClick={logoutHandler}
              >
                <LogOut />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      <div className="lg:hidden max-sm:flex items-center">
        <div className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 active:scale-90 group">
          <IoReorderThreeOutline
            className="text-[2.5rem] text-[#09090f] group-hover:text-[#483D8B] transition-colors"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        {toggle ? (
          <div className="absolute top-[85px] right-[2rem] w-[200px] bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-2xl py-3 z-[2000] animate-fade-in origin-top-right">
            {primaryButtonName.map((btn, idx) => (
              <Link
                key={idx}
                to={`${btn.route}`}
                onClick={() => setToggle(false)}
                className="flex items-center w-full h-[48px] px-6 text-[1rem] text-[#1A1939] font-medium border-l-4 border-transparent transition-all duration-200 hover:bg-[#cfcbeb]/30 hover:text-[#483D8B] hover:border-[#483D8B] hover:pl-8 active:scale-95"
              >
                {btn.name}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Buttons;
