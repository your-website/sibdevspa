import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './css/app.css';
import '../app-main/css/main.css';

import AppHeader from '../app-header/app-header'
import AppSearchVideo from '../app-search-video'
import AppCard from "../app-card";
import Favorites from "../app-favorits";

class App extends Component {

  state = {
    dataVideo: [],
    descriptionVideo: [],
    apiKey: 'AIzaSyAWNQTxM_QUduebjbAVluYQr123b5-E9mA',
    blockPosition: 'app-card__list',
    itemCardPosition: 'app-card__item',
    dataSearch: [
        {
            searchWord: 'москва',
            title: 'кот',
            sort: 'rating',
            count: 3,
            id: 1
        },
        {
            searchWord: 'красноярск',
            title: 'путин',
            sort: 'rating',
            count: 25,
            id: 2

        },
        {
            searchWord: 'wer',
            title: 'gta',
            sort: 'rating',
            count: 13,
            id: 3

        },
        {
            searchWord: 'путин',
            title: 'путин',
            sort: 'rating',
            count: 1,
            id: 4

        },
    ],
  };

  searchData = (data) => {
    this.setState(() => {
      return {
        dataVideo: data
      };
    });
  };

  searchStart = (search, favorites, order) => {
      let count = 12;
      let word = search;
      if (favorites) {
          const data = this.state.dataSearch.find(ele => ele.title === search);
          word = data.searchWord;
          count = data.count;
          let sort = `order=${order}&`;
          fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=${count}&${sort}q=${word}&key=AIzaSyAAzHm2B7WC2O6w8y3_8RGdWrMcVSUugV8`)
              .then(res => res.json())
              .then(res => {
                  this.searchData(res.items);
              });
      }
      fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=${count}&q=${word}&key=AIzaSyAAzHm2B7WC2O6w8y3_8RGdWrMcVSUugV8`)
          .then(res => res.json())
          .then(res => {
              this.searchData(res.items);
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

    saveDataSearch = (searchWord, title, sort, count, id) => {
        let idx = '';
        this.state.dataSearch.forEach((ele, index) => {
            if(ele.id === id) {
                idx = index;
            }
        });
        const arr = this.state.dataSearch;

        const result = [
            ...arr.slice(0, idx),
            { ...arr[idx], searchWord,
                title,
                sort,
                count,
                id },
            ...arr.slice(idx + 1)
        ];
        this.setState({dataSearch: result})
    };

    addData = (searchWord, title, sort, count, id) => {
        const result = this.state.dataSearch;
        result.push({
            searchWord,
            title,
            sort,
            count,
            id
        });
        this.setState({dataSearch: result})
    };

  render() {

    const { dataVideo, descriptionVideo, blockPosition, itemCardPosition, dataSearch } = this.state;

    return (
        <BrowserRouter>
          <div className="app">
            <AppHeader/>
              <main className="main">
                  <Route path="/search"  render={()=>
                      <AppSearchVideo searchData={ this.searchData }
                         changeBlockPositionAppCard={ this.changeBlockPositionAppCard }
                         changeItemPositionAppCard={ this.changeItemPositionAppCard }
                         blockPosition={ blockPosition }
                         searchStart={ this.searchStart }
                         addData={ this.addData}
                      />}
                  />
                  <Route path="/search"  render={()=>
                      <AppCard dataVideo={ dataVideo }
                               descriptionVideo={ descriptionVideo }
                               blockPosition={ blockPosition }
                               itemCardPosition={ itemCardPosition }
                      />}
                  />
                  <Route path="/favorites"  render={()=><Favorites dataSearch={ dataSearch } searchStart={ this.searchStart } saveDataSearch={ this.saveDataSearch }/>}/>
              </main>
          </div>
        </BrowserRouter>
    );
  };
}

export default App;
