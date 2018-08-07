import * as React from 'react';
import axios from 'axios';
import * as MD from 'react-icons/lib/md';
import { AddModal } from './AddModal';
import { FilterForm } from './FilterForm';
import { ListItem } from './ListItem';
import toggleModal from '../helpers/toggleModal';

interface PhoneBookState {
  records: null | any[];
}

export class PhoneBook extends React.Component<{}, PhoneBookState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      records: null,
    };
  }

  private refreshRecords = (arr: any[]): void => {
    this.setState({ records: arr });
  };

  private getAllRecords = (): void => {
    axios.get('/api/records')
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllRecords();
  }

  render() {
    return (
      <div className="phone-book">
        <AddModal refreshRecords={this.refreshRecords} />
        <div className="container">
          <h2>PHONE BOOK</h2>
          <FilterForm refreshRecords={this.refreshRecords} />
          <button className="get-all-records" onClick={this.getAllRecords}>
            Show All Records
          </button>
          <button className="add-record" onClick={toggleModal}>
            <MD.MdAddBox className="icon" />
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
