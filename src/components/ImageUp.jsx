// import "./index.css";
import { useState } from "react";
import axios from "axios";

function ImageUp({imgUrl,setImgUrl}) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const handleSelectFile = (e) => setFile(e.target.files[0]);
  const handleUpload = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("my_file", file);
      const res = await axios.post("https://blogback-iz7w.onrender.com/upload", data);
      //console.log(res.data)
      if(res){
        setImgUrl(res.data)
      } else {
        setImgUrl(null)
      }
      
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <label htmlFor="file" className="btn-grey">
        {" "}
        select file
      </label>
      {file && <center> {file.name}</center>}
      <input
        id="file"
        type="file"
        onChange={handleSelectFile}
        multiple={false}
      />
      <code>
        {Object.keys(res).length > 0
          ? Object.keys(res).map((key) => (
              <p className="output-item" key={key}>
                <span>{key}:</span>
                <span>
                  {typeof res[key] === "object" ? "object" : res[key]}
                </span>
              </p>
            ))
          : null}
      </code>
      {file && (
        <>
          {imgUrl ? <p style={{color: 'green'}}>Image uploaded</p> : <button onClick={handleUpload} className="btn-green">
            {loading ? "uploading..." : "upload to cloudinary"}
          </button>}
        </>
      )}
    </div>
  );
}
export default ImageUp;
