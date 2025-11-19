import React from 'react';
import PropTypes from 'prop-types';
import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const navigate = useNavigate();
  const {state} = useLocation();

  console.log('State received:', state);
  const item = state;

  // Fix this line - might be the issue:
  //const item = state?.item || state; // Try both possibilities

  console.log('Item:', item); // Debug the item

  return (
    <>
      <h2>Single Item</h2>
      {item && (
        <div>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.username}</div>
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
