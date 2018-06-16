import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ record }) => (
  <div className="list-item">
    <p>{record.first_name}</p>
    <p>{record.last_name}</p>
    <p>{record.phone_number}</p>
  </div>
);

ListItem.propTypes = {
  record: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    phone_number: PropTypes.string,
  }).isRequired,
};

export default ListItem;
