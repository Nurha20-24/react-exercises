const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  return (
    <>
      {item && (
        <dialog open>
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
          <button onClick={() => setSelectedItem(null)}>Close</button>
        </dialog>
      )}
    </>
  );
};
export default SingleView;
