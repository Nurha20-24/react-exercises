const EditDialog = ({item, modifyMedia, onClose}) => {
  return (
    <>
      <dialog open>
        <h1>Edit media form</h1>
        {/* TODO: Tee formi valmiksi, jossa voit muotoilla */}
        <button onClick={onClose}>Close</button>
      </dialog>
    </>
  );
};

export default EditDialog;
