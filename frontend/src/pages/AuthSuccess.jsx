import { getData } from "@/context/userContext";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthSuccess = () => {
  const { setUser } = getData();
  const navigate = useNavigate();
  useEffect(() => {
    const handleAuth = async () => {
      const params = new URLSearchParams(window.location.search);
      console.log(params);
      const accessToken = params.get("token");
      if (accessToken) {
        try {
          const res = await axios.get("http://localhost:8080/api/me", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (res.data.success) {
            setUser(res.data.user);
            navigate("/");
            localStorage.setItem("accessToken", accessToken);
          }
        } catch (error) {
          console.error("Error fetching user: ", error);
        }
      }
    };
    handleAuth();
  });

  return <div></div>;
};

export default AuthSuccess;
