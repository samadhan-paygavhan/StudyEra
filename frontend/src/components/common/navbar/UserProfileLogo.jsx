import React from "react";
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
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { getData } from "@/context/userContext";

const UserProfileLogo = () => {
  const { user, setUser } = getData();
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (res.data.success) {
        navigate("/api/login");
        localStorage.clear();
        setUser(null);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full ml-5">
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarImage
              key={user?.avatar}
              src={user?.avatar || "https://github.com/shadcn.png"}
              alt={user.fullName || "User Profile"}
              referrerPolicy="no-referrer"
            />
            <AvatarFallback className="font-semibold text-2xl text-[#121212]">
              CN
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white mt-3 p-1">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-500" />
          <DropdownMenuItem
            className="hover:bg-gray-100"
            onClick={() => navigate("/api/profile")}
          >
            <User />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-gray-100"
            onClick={() => navigate("/api/mybatch")}
          >
            <Video />
            My Batch
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-300" />
        <DropdownMenuItem className="hover:bg-gray-100" onClick={logoutHandler}>
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfileLogo;
