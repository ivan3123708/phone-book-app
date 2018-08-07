import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import * as MD from 'react-icons/lib/md';

interface FilterFormProps {
  refreshRecords: (arr: any[]) => void;
}

export class FilterForm extends React.Component<FilterFormProps, {}> {
  private filterRecords = (e): void => {
    e.preventDefault();
    const form = e.target.elements;

    axios.get('/api/filter_records', {
      params: {
        [form.searchBy.value]: form.searchFor.value,
      },
    })
      .then((response: AxiosResponse): void => {
        this.props.refreshRecords(response.data);

        form.searchFor.value = '';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="filter-form">
        <form onSubmit={this.filterRecords}>
          <p className="text-1">Search by: </p>
          <select name="searchBy">
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
            <option value="phone_number">Telephone Number</option>
          </select>
          <p className="text-2">Search for: </p>
          <input type="text" name="searchFor" placeholder="Type Here to Search..." />
          <button type="submit">
            <MD.MdSearch className="icon" />
            Search
          </button>
        </form>
      </div>
    );
  }
}
