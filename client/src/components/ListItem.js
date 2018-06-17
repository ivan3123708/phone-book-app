import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Delete from 'react-icons/lib/md/delete-forever';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteRecord = (id) => {
      axios.delete('/api/records', { params: { id } })
        .then((response) => {
          props.refreshRecords(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  render() {
    return (
      <div className="list-item">
        <p>{this.props.record.first_name}</p>
        <p>{this.props.record.last_name}</p>
        <p>{this.props.record.phone_number}</p>
        <button onClick={() => this.deleteRecord(this.props.record.id)} title="Delete this record">
          <Delete className="icon" size="22" />
        </button>
      </div>
    );
  }
}

ListItem.propTypes = {
  record: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    phone_number: PropTypes.string,
  }).isRequired,
  refreshRecords: PropTypes.func.isRequired,
};

export default ListItem;
