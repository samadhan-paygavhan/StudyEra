import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        try {
          const res = await axios.get("http://localhost:8080/api/me", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (res.data.success) {
            setUser(res.data.user);
          }
        } catch (err) {
          localStorage.removeItem("accessToken");
          setUser(null);
        }
      }
    };
    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const getData = () => useContext(UserContext);
