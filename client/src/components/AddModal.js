import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Close from 'react-icons/lib/md/close';
import toggleModal from '../helpers/toggleModal';

class AddModal extends React.Component {
  constructor(props) {
    super(props);

    this.createRecord = (e) => {
      e.preventDefault();
      const form = e.target.elements;

      axios.post('/api/records', {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        phoneNumber: form.phoneNumber.value,
      })
        .then((response) => {
          props.refreshRecords(response.data);

          form.firstName.value = '';
          form.lastName.value = '';
          form.phoneNumber.value = '';

          toggleModal();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  render() {
    return (
      <div className="add-modal modal-closed">
        <div className="box">
          <button className="btn-close" onClick={toggleModal}>
            <Close />
          </button>
          <br />
          <h1>Add a Record</h1>
          <form onSubmit={this.createRecord}>
            <p>First Name</p>
            <input type="text" name="firstName" required />
            <p>Last Name</p>
            <input type="text" name="lastName" required />
            <p>Telephone Number</p>
            <input type="text" name="phoneNumber" required />
            <br />
            <button className="btn-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

AddModal.propTypes = {
  refreshRecords: PropTypes.func.isRequired,
};

export default AddModal;
