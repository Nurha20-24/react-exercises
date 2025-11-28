import {useNavigate} from 'react-router';
import useForm from '../hooks/formHooks';

const EditDialog = ({item, modifyMedia, onClose}) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const doModify = async (inputs) => {
    await modifyMedia(item.media_id, inputs, token);
    navigate(0);
    onClose();
  };
  const {handleSubmit, handleInputChange, inputs} = useForm(doModify, item);
  return (
    <>
      <dialog open>
        <h1 className="justify-start">Edit media form</h1>
        {/* TODO: Tee formi valmiksi, jossa voit muotoilla */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              id="title"
              value={inputs.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              rows={5}
              id="description"
              value={inputs.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={inputs.title.length < 3 || inputs.description.length < 3}
          >
            Save Changes
          </button>
        </form>
        <button onClick={onClose}>Close</button>
      </dialog>
    </>
  );
};

export default EditDialog;
