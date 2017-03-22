import React, { Component } from 'react';


class albumsList extends Component {

  constructor(props) {
    super(props);

  }

  deleteItem(id) {
    this.props.delAlbum(id);
  }

  renderList() {
    return(
      <div className="containerList">
        {this.props.albums.map((album) => {
          return this.renderListItem(album)})
        }
      </div>
    );
  }

  renderListItem(album) {
    return (
      <div className="listItem" key={album.id}>
        <div className="albumName">{album.title}</div>
        <div className="delButton" onClick={this.deleteItem.bind(this, album.id)}>delete</div>
      </div>
    );
  }

  render() {
    return(
      this.renderList()
    );
  }

}

albumsList.propTypes = {
  albums: React.PropTypes.array,
  delAlbum: React.PropTypes.func,
};

export default albumsList;