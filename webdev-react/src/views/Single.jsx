import React from 'react';
import PropTypes from 'prop-types';
import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const {item} = state;
  return (
    <>
      <h2>Single Item</h2>
      {item && (
        <div>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.username}</div>
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
