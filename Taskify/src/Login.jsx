import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginComponent from "./components/Login";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {

    // Field validation
    if (!email) {
      toast.error("Please enter the email first !");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by email
    const matchedUser = users.find((user) => user.email === email);

    if (!matchedUser) {
      toast.error("User with this email is not registered.");
      return;
    }

    if (!password) {
      toast.error("Please enter Password");
      return;
    }

    // Check password
    if (matchedUser.password === password) {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/todo");
      }, 1500);
    } else {
      toast.error("Incorrect password. Try again.");
    }
  };

  return (
    <>
      <ToastContainer />
      <LoginComponent onLogin={handleLogin} />
    </>
  );
};

export default Login;
