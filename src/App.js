import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { addAlbum, delAlbum, addSearchList, setAlbumsFromLocal, getAlbumsFromApi } from './redux/actions/actions'

import AlbumsList from './components/AlbumsList'


class AppContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentWillMount() {
    let localAlbums = JSON.parse(localStorage.getItem('albums'));
    localAlbums !== null ? this.props.setAlbumsFromLocal(localAlbums) : [];
  }

  addItem(item) {
    this.props.addAlbum(item);
    this.setState({inputValue: ''});
  }

  renderHeader() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to my Ultimate App</h2>
      </div>
    );
  }

  onChangeInput(event) {
    this.setState({inputValue: event.target.value});
    fetch(`http://musicbrainz.org/ws/2/release/?query=release:${encodeURI(event.nativeEvent.target.value)} AND primarytype:album&fmt=json&limit=10`, {mode: 'cors'})
      .then(res => res.json())
      .then(json => {
        this.props.addSearchList(json.releases);
      });
  }

  renderInput() {
    return (
      <div className="inputWrap">
        <input
          type="text"
          className="inputSearch"
          onChange={this.onChangeInput}
          placeholder="Enter plz album's name"
          value={this.state.inputValue}
          //ref={c => this.inputSearch = c}
        />
        {this.state.inputValue && this.renderSearchList()}
      </div>
    );
  }

  renderSearchList() {
    return (
      <div className="searchList">
        {this.props.searchResult.map((item) => {return this.renderSearchItem(item)})}
      </div>
    );
  }

  renderSearchItem(item) {
    return(
      <div key={item.id} className="searchItem" onClick={this.addItem.bind(null, item)}>
        {item.title}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderInput()}
        {this.props.albums[0] && <AlbumsList albums={this.props.albums} delAlbum={this.props.delAlbum}/>}
      </div>
    );
  }
}

const App = connect(
  (state) => ({ albums: state.albumsList.albums, searchResult: state.searchResultList.searchResult }),
  dispatch => bindActionCreators({
    addAlbum, delAlbum, addSearchList, setAlbumsFromLocal, getAlbumsFromApi
  }, dispatch)
)(AppContainer);

export default App;
