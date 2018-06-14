import React from 'react';
import Close from 'react-icons/lib/md/close';
import toggleModal from '../helpers/toggleModal';

const AddModal = () => (
  <div className="add-modal modal-closed">
    <div className="box">
      <button className="btn-close" onClick={toggleModal}>
        <Close />
      </button>
      <br />
      <h1>Add a Record</h1>
      <form>
        <p>First Name</p>
        <input type="text" name="firstname" />
        <p>Last Name</p>
        <input type="text" name="lastname" />
        <p>Telephone Number</p>
        <input type="text" name="number" />
        <br />
        <button className="btn-submit" type="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default AddModal;
