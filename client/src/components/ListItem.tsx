import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import * as MD from 'react-icons/lib/md';

interface ListItemProps {
  record: {
    id: string;
    first_name: string;
    last_name: string;
    phone_number: string;
  };
  refreshRecords: (arr: any[]) => void;
}

export class ListItem extends React.Component<ListItemProps, {}> {
  private deleteRecord = (id: string): void => {
    axios.delete('/api/records', { params: { id } })
      .then((response: AxiosResponse): void => {
        this.props.refreshRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="list-item">
        <p>{this.props.record.first_name}</p>
        <p>{this.props.record.last_name}</p>
        <p>{this.props.record.phone_number}</p>
        <button onClick={() => this.deleteRecord(this.props.record.id)} title="Delete this record">
          <MD.MdDeleteForever className="icon" size="22" />
        </button>
      </div>
    );
  }
}
