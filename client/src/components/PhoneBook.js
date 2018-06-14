import React from 'react';
import Add from 'react-icons/lib/md/add-box';
import AddModal from './AddModal';
import FilterForm from './FilterForm';
import toggleModal from '../helpers/toggleModal';

const PhoneBook = () => (
  <div className="phone-book">
    <div className="container">
      <AddModal />
      <h1>Phone Book</h1>
      <FilterForm />
      <button className="add-record" onClick={toggleModal}>
        <Add className="icon" />
        Add a Record
      </button>
    </div>
  </div>
);

export default PhoneBook;
