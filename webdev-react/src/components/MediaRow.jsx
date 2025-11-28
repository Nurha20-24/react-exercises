import React from 'react';
import {Link} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import EditDialog from './EditDialog';
import {useState} from 'react';

const MediaRow = (props) => {
  const {item, deleteMedia, modifyMedia} = props;
  // Get user from context
  const {user} = useUserContext();

  const token = localStorage.getItem('token');

  // tarvitaan dialogin näyttämiseen ja piilottamiseen
  const [showEdit, setShowEdit] = useState(false);

  console.log(item);
  //console.log(user);

  const isLoggedIn = !!user;
  const isOwner = isLoggedIn && user.user_id === item.user_id;
  const isAdmin = isLoggedIn && user.level_name === 'Admin';
  const canEdit = isOwner || isAdmin;

  const handleModify = () => {
    console.log('Handle, avaataan muokkaus dialogi');
    setShowEdit(true);
  };

  const handleDelete = () => {
    console.log('Deletoidaan media');
    if (confirm('Are you sure you want to delete this media?'))
      deleteMedia(item.media_id, token);
  };
  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>{item.username}</td>
      <td>
        <Link to="/single" state={item}>
          View
        </Link>
        {/* Dialog display option */}
        {/* <button onClick={() => setSelectedItem(item)}>View</button> */}
        {canEdit && (
          <>
            <div
              className="bg-emerald-100 cursor-pointer mx-auto text-amber-50 hover:bg-amber-200 rounded p-3 text-center m-2"
              onClick={handleModify}
            >
              Modify
            </div>
            <button onClick={handleDelete}>Delete</button>
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
