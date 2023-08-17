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
      console.log(data);
      if (!data || res.status === 400) {
        return toast.error(data.message);
      } else {
        await dispatch({ type: "registerSuccess" }); // Dispatch success action before navigation
        await navigate("/login");
        toast.success(data.message);
      }
    } catch (error) {
      dispatch({ type: "userRegistrationERROR", payload: error.message });
    }
  };
