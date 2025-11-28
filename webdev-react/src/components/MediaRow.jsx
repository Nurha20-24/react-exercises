//import {Link} from 'react-router';
import {useNavigate} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import EditDialog from './EditDialog';
import {useState} from 'react';

const MediaRow = (props) => {
  const {item, deleteMedia, modifyMedia} = props;
  const navigate = useNavigate();
  // haetaan user kontekstista
  const {user} = useUserContext();

  const token = localStorage.getItem('token');

  // tarvitaan dialogin näyttämiseen ja pilottamiseen
  const [showEdit, setShowEdit] = useState(false);

  // console.log(item);
  // console.log(user);

  const isLoggedIn = !!user;
  const isOwner = isLoggedIn && user.user_id === item.user_id;
  const isAdmin = isLoggedIn && user.level_name === 'Admin';
  const canEdit = isOwner || isAdmin;

  const handleModify = () => {
    console.log('Handle, avaataan dialogi');
    setShowEdit(true);
  };

  const handleDelete = () => {
    console.log('Deletoidaan elementti');
    if (confirm('Oletko varma että haluat poistaa kuvan!!!')) {
      deleteMedia(item.media_id, token);
    }
  };

  return (
    <tr className="text-xs">
      <td>
        <img
          src={item.thumbnail}
          alt={item.title}
          onClick={() => {
            navigate('/single', {state: item});
          }}
        />
      </td>
      <td>{item.title}</td>
      <td className="max-w-50">{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        {/* Link korvattu tailwind-tyylitellyllä napilla
        <Link to="/single" state={item}>
          View
        </Link> */}
        <div
          className="bg-indigo-400 cursor-pointer mx-auto text-amber-50 text-md font-bold rounded-xl  hover:bg-indigo-500 text-center m-2 px-4 py-3"
          onClick={() => {
            navigate('/single', {state: item});
          }}
        >
          View
        </div>
        {/* Dialog display option */}
        {/* <button onClick={() => setSelectedItem(item)}>View</button> */}
        {canEdit && (
          <>
            <div
              className="bg-green-500 cursor-pointer mx-auto text-amber-50 rounded-xl  hover:bg-green-600 text-center m-2 px-5 py-3 font-bold"
              onClick={handleModify}
            >
              Modify
            </div>
            <div
              className="bg-red-500 cursor-pointer mx-auto text-amber-50 rounded-xl  hover:bg-red-700 text-center m-2 px-5 py-3 font-bold"
              onClick={handleDelete}
            >
              Delete
            </div>
            {showEdit && (
              <EditDialog
                item={item}
                modifyMedia={modifyMedia}
                onClose={() => setShowEdit(false)}
              />
            )}
          </>
        )}
      </td>
    </tr>
  );
};

export default MediaRow;
