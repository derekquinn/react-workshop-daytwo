import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import Weather from './Weather';

class WeatherList extends Component {
    state = {

        list: [
            { conditions: "Rainy", highF: 62, lowF: 55 },
            { conditions: "Cloudy", highF: 52, lowF: 35 },
        ]
    }


    handleAddEntry = (entry) => {
        this.setState(prev => {
            const newList = prev.list.slice(0);
            newList.push(entry);
            return { list: newList };
        })
    }


    render() {

        function handleKey(data) {

            const key = Math.floor(Math.random() * 100) + '-' + data;
            console.log(key);
            return key;
          }

        return (
            <div className="WeatherList">
                <WeatherForm onAdd={this.handleAddEntry} foo="bar"/>
                {this.state.list.map((data, index) =>
                    <Weather key={handleKey(data.conditions)} conditions={data.conditions} highF={data.highF} lowF={data.lowF} />
                )}
            </div>
        )
    }



} export default WeatherList; 