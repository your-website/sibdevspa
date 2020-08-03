import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import login from '../../login';

import './css/app.css';
import '../app-main/css/main.css';

import AppHeader from '../app-header/app-header'
import AppSearchVideo from '../app-search-video'
import AppCard from "../app-card";
import Favorites from "../app-favorits";
import Login from '../app-login';

class App extends Component {

  state = {
    dataVideo: [],
    descriptionVideo: [],
    apiKey: 'AIzaSyAWNQTxM_QUduebjbAVluYQr123b5-E9mA',
    blockPosition: 'app-card__list',
    itemCardPosition: 'app-card__item',
    user: false,
    users: [],
    userName: '',
    dataSearch: [

    ],
    token: '',
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
          fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=${count}&${sort}q=${word}&key=AIzaSyACHODIWiw1_XoiPkjaWJpPGLFu8k5vZwQ`)
              .then(res => res.json())
              .then(res => {
                  this.searchData(res.items);
              });
      }
      fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=${count}&q=${word}&key=AIzaSyACHODIWiw1_XoiPkjaWJpPGLFu8k5vZwQ`)
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
        localStorage.setItem(String(this.state.userName), JSON.stringify(result))
    };

    userOk = (login, name) => {
        this.setState({user: login, userName: name});
        localStorage.setItem('tokensibdev', name);
        this.findDataLocalStorage(name);
    };

    findDataLocalStorage(name) {
        const dataSearch = JSON.parse (localStorage.getItem (String(name)));
        if (dataSearch) {
            this.setState({dataSearch});
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('tokensibdev');
        if (token !== undefined && token !== null) {
            this.userOk(true, token)
        }
    }

    render() {
      const users = login.users;

      const { dataVideo, descriptionVideo, blockPosition, itemCardPosition, dataSearch, user } = this.state;
      let header = user ? <AppHeader userOk={ this.userOk }/> : <Login users={ users } userOk={ this.userOk }/>;
      let main = user ?
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
          : null;

      return (
        <BrowserRouter>
            <div className="app">
                { header }
                { main }
            </div>
        </BrowserRouter>
    );
  };
}

export default App;
