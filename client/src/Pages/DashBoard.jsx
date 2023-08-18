import React, { useRef, useState } from "react";
import "../DashBoard/style/DashBoard.css";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { CreateBlog } from "../Redux/Action/UserAction";
import LoadingBar from "../Components/Layout/Loading/LoadingBar";

const DashBoard = () => {
  const editor = useRef();
  const [content, setContent] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");

  const imagedtaa = (e) => {
    const files = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setimage(reader.result);
    };

    reader.readAsDataURL(files);
  };

  const dispatch = useDispatch();

  const datasubmit = () => {
    dispatch(CreateBlog(title, category, content, image));
  };

  const isLoading = useSelector((state) => state.user.isLoading);

  return (
    <>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <div className="commonPadding dashboard">
          <h2 className="text-5xl text-center mb-2">Create Blog</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
          <input type="file" accept="jpg,png," onChange={imagedtaa} />
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            className="editor"
          />
          <button onClick={datasubmit}>Create</button>
        </div>
      )}
    </>
  );
};

export default DashBoard;
