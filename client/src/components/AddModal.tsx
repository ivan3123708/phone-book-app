import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import * as MD from 'react-icons/lib/md/';
import toggleModal from '../helpers/toggleModal';

interface AddModalProps {
  refreshRecords: (arr: any[]) => void;
}

export class AddModal extends React.Component<AddModalProps, {}> {
  private createRecord = (e): void => {
    e.preventDefault();
    const form = e.target.elements;

    axios.post('/api/records', {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phoneNumber: form.phoneNumber.value,
    })
      .then((response: AxiosResponse): void => {
        this.props.refreshRecords(response.data);
        console.log(this);

        form.firstName.value = '';
        form.lastName.value = '';
        form.phoneNumber.value = '';

        toggleModal();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="add-modal modal-closed">
        <div className="box">
          <button className="btn-close" onClick={toggleModal}>
            <MD.MdClose />
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
