import useForm from '../hooks/formHooks';
import {useState} from 'react';
import {useFile, useMedia} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const Upload = () => {
  const [file, setFile] = useState(null);
  const {postFile} = useFile();
  const {postMedia} = useMedia();

  const navigate = useNavigate();

  const initValues = {title: '', description: ''};

  const doUpload = async (inputs) => {
    console.log('doUpload ', inputs, file);
    const token = localStorage.getItem('token');
    try {
      const fileResponse = await postFile(file, token);
      console.log('upload response', fileResponse);
      const mediaResponse = await postMedia(fileResponse.data, inputs, token);
      console.log('file data ', mediaResponse);

      //  notify user and clear the form and navigate to home
      alert('Upload successful');
      setFile(null);
      navigate('/');
    } catch (error) {
      console.log('upload failed: ', error);
      alert('Upload failed, please try again');
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const {handleInputChange, handleSubmit, inputs} = useForm(
    doUpload,
    initValues
  );

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://placehold.co/200x100?text=Choose+image'
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
