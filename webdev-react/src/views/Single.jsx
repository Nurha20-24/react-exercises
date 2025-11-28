import {useLocation, useNavigate} from 'react-router';
import Likes from './Likes.jsx';

const Single = () => {
  const navigate = useNavigate();
  const {state} = useLocation();

  const item = state;
  console.log('Item:', item);

  return (
    <>
      {item && (
        <div>
          <h2>{item.title}</h2>
          {item.media_type.startsWith('image/') ? (
            <img
              src={item.filename}
              alt={item.title}
              style={{maxWidth: '400px', borderRadius: '10px'}}
            />
          ) : (
            <video
              src={item.filename}
              controls
              style={{maxWidth: '400px', borderRadius: '10px'}}
            />
          )}

          <p>{item.description}</p>
          <p>
            Kuvan latasi: <b>{item.username}</b>{' '}
            {new Date(item.created_at).toLocaleString('fi', {
              dateStyle: 'long',
              timeStyle: 'short',
            })}
          </p>
          <Likes mediaId={item.media_id} />
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
        </div>
      )}
    </>
  );
};

Single.propTypes = {};

export default Single;
