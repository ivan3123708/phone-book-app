import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Search from 'react-icons/lib/md/search';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.filterRecords = (e) => {
      e.preventDefault();
      const form = e.target.elements;

      axios.get('/api/filter_records', {
        params: {
          [form.searchBy.value]: form.searchFor.value,
        },
      })
        .then((response) => {
          props.refreshRecords(response.data);

          form.searchFor.value = '';
        })
        .catch((err) => {
          console.log(err);
        });
    };
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
            <Search className="icon" />
            Search
          </button>
        </form>
      </div>
    );
  }
}

FilterForm.propTypes = {
  refreshRecords: PropTypes.func.isRequired,
};

export default FilterForm;
