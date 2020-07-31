import React, { Component } from 'react';
import './css/app.css';
import '../app-main/css/main.css';

import AppHeader from '../app-header/app-header'
import AppSearchVideo from '../app-search-video'
import AppCard from "../app-card";

class App extends Component {

  state = {
    dataVideo: [],
    descriptionVideo: [],
    apiKey: 'AIzaSyAWNQTxM_QUduebjbAVluYQr123b5-E9mA',
    blockPosition: 'app-card__list',
    itemCardPosition: 'app-card__item'
  };

  searchData = (data) => {
    this.setState(() => {
      return {
        dataVideo: data
      };
    });
  };

  changeBlockPositionAppCard = (data) => {
      this.setState(() => {
          return {
              blockPosition: data
          };
      });
  };

    changeItemPositionAppCard = (data) => {
        this.setState(() => {
            return {
                itemCardPosition: data
            };
        });
    };

  render() {

    const { dataVideo, descriptionVideo, blockPosition, itemCardPosition, changeItemPositionAppCard } = this.state;

    return (
      <div className="app">
        <AppHeader/>
          <main className="main">
              <AppSearchVideo searchData={ this.searchData } changeBlockPositionAppCard={ this.changeBlockPositionAppCard } changeItemPositionAppCard={ this.changeItemPositionAppCard } />
              <AppCard dataVideo={ dataVideo }
                       descriptionVideo={ descriptionVideo }
                       blockPosition={ blockPosition }
                       itemCardPosition={ itemCardPosition }
              />
          </main>
      </div>
    );
  };
}

export default App;
