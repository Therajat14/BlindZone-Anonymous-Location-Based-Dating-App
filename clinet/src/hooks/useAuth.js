import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // adjust the path based on your file structure

const useAuth = () => {
  console.log(useContext(AuthContext));
  return useContext(AuthContext);
};

export default useAuth;
