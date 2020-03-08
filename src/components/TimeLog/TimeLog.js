import React, { Component } from 'react';
import './TimeLog.css';
import { diffInSeconds, formatDiffInSeconds } from '../../timeUtil';
import TimeEntry from './TimeEntry';

class TimeLog extends Component {

  state = {
    entries: [
      { start: new Date('1995-12-17T03:24:00'), end: new Date('1995-12-17T04:12:19') },
      { start: new Date('1995-12-17T10:44:23'), end: new Date('1995-12-17T13:01:07') }
    ]
  }

  handleDelete = (data) => {
    this.setState(prev => {
      const newList = prev.entries.slice(0);
      newList.splice(data, 1);
      return { entries: newList };
    });
    console.log("delete handled")
  }

  render() {
    const total = this.state.entries.reduce((sum, entry) => sum + diffInSeconds(entry.end, entry.start), 0);

    return (
      <div className="TimeLog">
        <h2>Time Log</h2>


        <div className="TimeLog__headings TimeLog__row">
          <span>Amount</span><span>Start</span><span>End</span>
        </div>
        <div>
          {this.state.entries.map(data =>

            <TimeEntry start={data.start} key={data.start} end={data.end}
              onDelete={() => this.handleDelete(data)} />


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