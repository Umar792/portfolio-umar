import { toast } from "react-toastify";

export const UserRegistration =
  (name, email, password, navigate) => async (dispatch) => {
    try {
      dispatch({ type: "loadUserRegistration" });
      const res = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      dispatch({ type: "userRegistrationFail" });
      const data = await res.json();
      if (res.status === 400 || !data) {
        return toast.error(data.message);
      } else {
        toast.success(data.message);
        dispatch({ type: "registerSuccess" });
        navigate("/login");
      }
    } catch (error) {
      dispatch({ type: "userRegistrationERROR", payload: error.message });
    }
  };

//   --------------- login
export const loginuser = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "loadUserLogin" });
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    dispatch({ type: "LoadUserLoginFail" });
    const data = await res.json();
    if (res.status === 400 || !data) {
      return toast.error(data.message);
    } else {
      toast.success(data.message);
      localStorage.setItem("myblogtoken", data.Token);
      dispatch({ type: "LoadUserLoginSuccess" });
      navigate("/");
    }
  } catch (error) {
    dispatch({ type: "LoadUserLoginERROR", payload: error.message });
  };
}
//   --------------- Authanticate
export const AuthanticateUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserLogin" });
    const res = await fetch("http://localhost:4000/loginuser", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("myblogtoken")
      },

    });
    dispatch({ type: "LoadUserLoginFail" });
    const data = await res.json();
    if (res.status === 400 || !data) {
      return toast.error(data.message);
    } else {
      toast.success(data.message);
      dispatch({ type: "LoadUserLoginSuccess" });
    }
  } catch (error) {
    dispatch({ type: "LoadUserLoginERROR", payload: error.message });
  }
}
