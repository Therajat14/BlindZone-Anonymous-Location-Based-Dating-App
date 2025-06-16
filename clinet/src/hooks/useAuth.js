import { useContext } from "react";
import { AuthContext } from "../context/CreateContext"; // adjust the path based on your file structure

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
