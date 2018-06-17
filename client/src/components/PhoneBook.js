import React from 'react';
import axios from 'axios';
import Add from 'react-icons/lib/md/add-box';
import AddModal from './AddModal';
import FilterForm from './FilterForm';
import ListItem from './ListItem';
import toggleModal from '../helpers/toggleModal';

class PhoneBook extends React.Component {
  constructor() {
    super();

    this.state = {
      records: null,
    };

    this.refreshRecords = (arr) => {
      this.setState({ records: arr });
    };
  }

  componentDidMount() {
    axios.get('/api/records')
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="phone-book">
        <div className="container">
          <AddModal refreshRecords={this.refreshRecords} />
          <h1>Phone Book</h1>
          <FilterForm />
          <button className="add-record" onClick={toggleModal}>
            <Add className="icon" />
            Add a Record
          </button>
          <div className="records-list">
            <div className="headings">
              <p>First Name</p><p>Last Name</p><p>Telephone Number</p>
            </div>
            {this.state.records && this.state.records.map((record) => <ListItem key={record.id} record={record} refreshRecords={this.refreshRecords} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneBook;
