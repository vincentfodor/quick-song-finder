import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import axios from 'axios';
import TrackList from './components/TrackList';

import './App.css';

class App extends Component {
  state = {
    accessToken: false,
    tracks: false,
    offset: 0,
    search: null
  }

  componentDidMount = () => {
    if(window.location.href.includes("#")) {
      this.setState({ accessToken: window.location.href.split("#")[1].slice(13) });
    } else {
      if(!this.state.accessToken) window.location = "https://accounts.spotify.com/authorize?client_id=c65c8403c7404c17a3963c299c4c0a79&redirect_uri=http://www.vfodor.de&response_type=token";
    }
  }

  handleSubmitSearch = e => {
    e.preventDefault();

    const { value } = e.target.query;

    if(value !== "") {
      this.setState({ tracks: false, search: value, offset: 0 }, () => this.getSongs(value));
        
      e.target.query.value = null;
    }
  }

  getSongs = query => {
    axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10&offset=${this.state.offset}`, {
        headers: {
          Authorization: `Bearer ${this.state.accessToken}`
        }
      }).then(({data}) => {
        this.setState({ tracks: data.tracks.items })
        console.log(data.tracks.items);
      });
  }

  loadMoreSongs = () => {
    this.setState(prevState => ({
      offset: prevState.offset + 10
    }), () => this.getSongs(this.state.search));
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <h1>Quick Song Finder</h1>
              <Searchbar handleSubmitSearch={this.handleSubmitSearch} />
              <button className="app-next-songs-button" onClick={this.loadMoreSongs}>Next 10 songs</button>
              <TrackList tracks={this.state.tracks} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
