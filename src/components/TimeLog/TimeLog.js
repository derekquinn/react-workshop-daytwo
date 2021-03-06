import React, { Component } from 'react';
import './TimeLog.css';
import { diffInSeconds, formatDiffInSeconds } from '../../timeUtil';
import TimeEntry from './TimeEntry';
import TimeForm from './TimeForm';

class TimeLog extends Component {

  state = {
    entries: [
      { start: new Date('1995-12-17T03:24:00'), end: new Date('1995-12-17T04:12:19') },
      { start: new Date('1995-12-17T10:44:23'), end: new Date('1995-12-17T13:01:07') }
    ]
  }

  handleAddEntry = (entry) => {
    this.setState(prev => {
      const newList = prev.entries.slice(0);
      newList.push(entry);
      return { entries: newList }
    })
  };


  handleDelete = (index) => {
    this.setState(prev => {
      const newList = prev.entries.slice(0);
      newList.splice(index, 1);
      return { entries: newList };
    });
  }

  render() {
    const total = this.state.entries.reduce((sum, entry) => sum + diffInSeconds(entry.end, entry.start), 0);


    function handleKey(data) {

      const key = Math.floor(Math.random() * 100) + '-' + data;
      console.log(key);
      return key;
    }

    return (


      <div className="TimeLog">
        <h2>Time Log</h2>
        <TimeForm onAdd={this.handleAddEntry} />

        <div className="TimeLog__headings TimeLog__row">
          <span>Amount</span><span>Start</span><span>End</span>
        </div>
        <div>
          {this.state.entries.map((data, i) =>

            <TimeEntry start={data.start} key={handleKey(data.start)} end={data.end}
              onDelete={() => this.handleDelete(i)} />

          )}

        </div>

        <div className="TimeLog__totals TimeLog__row">
          <span>{formatDiffInSeconds(total)} <span className="TimeLog__label">Total</span></span>
        </div>
      </div>
    );
  }
}

export default TimeLog;