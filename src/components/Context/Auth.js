import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsLoggedIn(true);
      const storedUser = localStorage.getItem("userData");
      if (storedUser) {
        setUserData(JSON.parse(storedUser));
      }
    }
  }, []);

  const registerUser = async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "https://www.quickpickdeal.com/api/auth/registration",
        userData,
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;

      if (data.Success) {
        setSuccess("Registration successful");
        return data;
      } else {
        setError(data.Error || "Registration failed");
        return null;
      }
    } catch (err) {
      setError("Unable to connect to server");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (credentials) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const MIN_LOADING_TIME = 4000; // 3 seconds
    const startTime = Date.now();

    try {
      const response = await axios.post(
        "https://www.quickpickdeal.com/api/auth/login",
        credentials,
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;

      if (data.Success) {
        setSuccess("Login successful");
        setUserData(data.Data);

        localStorage.setItem("userToken", data.Data.AccessToken);
        localStorage.setItem("userData", JSON.stringify(data.Data));

        setIsLoggedIn(true);
        return data;
      } else {
        setError(data.Error || "Login failed");
        return null;
      }
    } catch (err) {
      setError("Unable to connect to server");
      return null;
    } finally {
      const elapsed = Date.now() - startTime;
      const remainingTime = MIN_LOADING_TIME - elapsed;

      if (remainingTime > 0) {
        setTimeout(() => {
          setLoading(false);
        }, remainingTime);
      } else {
        setLoading(false);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        loginUser,
        logout,
        loading,
        error,
        success,
        isLoggedIn,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
