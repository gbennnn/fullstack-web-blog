
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePublish = (e) => {
    e.preventDefault();
    // TODO: handle publish logic
    alert("Post published! (dummy)");
  };

  return (
    <div className='add'>
      <div className="content">
        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className='editor'
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your post content here..."
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h3>Publish</h3>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            style={{ display: 'none' }}
            type="file"
            id="file"
            onChange={handleFileChange}
          />
          <label htmlFor="file" className="upload-btn">Upload Image</label>
          {file && <span className="filename">{file.name}</span>}
          <button className="publish-btn" onClick={handlePublish}>Publish</button>
        </div>
        <div className="item">
          <h3>Category</h3>
          <div className="cat-list">
            <label>
              <input
                type="radio"
                name="cat"
                value="tech"
                checked={category === "tech"}
                onChange={() => setCategory("tech")}
              /> Tech
            </label>
            <label>
              <input
                type="radio"
                name="cat"
                value="lifestyle"
                checked={category === "lifestyle"}
                onChange={() => setCategory("lifestyle")}
              /> Lifestyle
            </label>
            <label>
              <input
                type="radio"
                name="cat"
                value="travel"
                checked={category === "travel"}
                onChange={() => setCategory("travel")}
              /> Travel
            </label>
            <label>
              <input
                type="radio"
                name="cat"
                value="food"
                checked={category === "food"}
                onChange={() => setCategory("food")}
              /> Food
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write