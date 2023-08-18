import { toast } from "react-toastify";

export const UserRegistration =
  (name, email, password, navigate) => async (dispatch) => {
    try {
      dispatch({ type: "loadUserRegistration" });
      const res = await fetch(
        "https://sapphire-skunk-coat.cyclic.cloud/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      dispatch({ type: "userRegistrationFail" });
      const data = await res.json();
      console.log(data);
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
    const res = await fetch("https://sapphire-skunk-coat.cyclic.cloud/login", {
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
  }
};
//   --------------- Authanticate
export const AuthanticateUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserLogin" });
    const res = await fetch(
      "https://sapphire-skunk-coat.cyclic.cloud/loginuser",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("myblogtoken"),
        },
      }
    );
    dispatch({ type: "LoadUserLoginFail" });
    const data = await res.json();
    if (res.status === 400 || !data) {
      return;
    } else {
      dispatch({ type: "LoadUserLoginSuccess" });
    }
  } catch (error) {
    dispatch({ type: "LoadUserLoginERROR", payload: error.message });
  }
};

//   --------------- create blog
export const CreateBlog =
  (title, category, description, BlogImage) => async (dispatch) => {
    try {
      dispatch({ type: "CreateBlog" });
      const res = await fetch(
        "https://sapphire-skunk-coat.cyclic.cloud/createBlog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("myblogtoken"),
          },
          body: JSON.stringify({
            title,
            category,
            description,
            BlogImage,
          }),
        }
      );
      dispatch({ type: "CreateBlogFail" });
      const data = await res.json();
      console.log(data);
      if (res.status === 400 || !data) {
        return toast.error(data.message);
      } else {
        dispatch({ type: "CreateBlogSuccess" });
        toast.success(data.message);
      }
    } catch (error) {
      dispatch({ type: "CreateBlogERROR", payload: error.message });
    }
  };

//   --------------- Authanticate
export const GetAllBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: "GetAllBlogs" });
    const res = await fetch(
      "https://sapphire-skunk-coat.cyclic.cloud/getAllBlogs",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "GetAllBlogsFail" });
    const data = await res.json();
    if (res.status === 400 || !data) {
      return;
    } else {
      dispatch({ type: "GetAllBlogsSuccess", payload: data.blogs });
    }
  } catch (error) {
    dispatch({ type: "GetAllBlogsERROR", payload: error.message });
  }
};
//   --------------- Authanticate
export const GetSingleBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GetSingle" });
    const res = await fetch(
      `https://sapphire-skunk-coat.cyclic.cloud/getSingleBlog/${id}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "GetSingleFail" });
    const data = await res.json();
    if (res.status === 400 || !data) {
      return;
    } else {
      dispatch({ type: "GetSingleSuccess", payload: data.blog });
    }
  } catch (error) {
    dispatch({ type: "GetSingleERROR", payload: error.message });
  }
};
