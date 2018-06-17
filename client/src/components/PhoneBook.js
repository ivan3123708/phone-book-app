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

    this.getAllRecords = () => {
      axios.get('/api/records')
        .then((response) => {
          this.setState({ records: response.data });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  componentDidMount() {
    this.getAllRecords();
  }

  render() {
    return (
      <div className="phone-book">
        <div className="container">
          <AddModal refreshRecords={this.refreshRecords} />
          <h1>Phone Book</h1>
          <FilterForm refreshRecords={this.refreshRecords} />
          <button className="get-all-records" onClick={this.getAllRecords}>
            Show All Records
          </button>
          <button className="add-record" onClick={toggleModal}>
            <Add className="icon" />
            Add a Record
          </button>
          <div className="records-list">
            <div className="headings">
              <p>First Name</p><p>Last Name</p><p>Telephone Number</p>
            </div>
            {
              this.state.records &&
              this.state.records.length &&
              this.state.records.map((record) => <ListItem key={record.id} record={record} refreshRecords={this.refreshRecords} />) ||
              <p>No Results.</p>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneBook;
