import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // adjust the path based on your file structure

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
