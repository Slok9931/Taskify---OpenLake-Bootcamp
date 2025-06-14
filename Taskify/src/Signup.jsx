import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import SignupComponent from "./components/Signup";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (userdata) => {
    const { name, email, password } = userdata;

    // Validation check
    if (!name || !email || !password) {
      toast.error("Please fill out all the fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Enter a valid email address.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);
    if (exists) {
      toast.error("This email is already registered.");
      return;
    }

    // Save user data
    users.push(userdata);
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("You're registered successfully!");

    setTimeout(() => navigate("/todo"), 1500);
  };

  return (
    <div>
      <ToastContainer />
      <SignupComponent onSignup={handleSignup} />
    </div>
  );
};

export default Signup;
