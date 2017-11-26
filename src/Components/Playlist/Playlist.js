import React from 'react';
import TrackList from "../TrackList/TrackList.js";
import './Playlist.css';

class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.handleNameChange=this.handleNameChange.bind(this);
  }
  handleNameChange(event) {
      this.props.onNameChange(event.target.value);
   }

  render(){
    return(<div className="Playlist">
  <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
   <TrackList tracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove}/>
  <a onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</a>
</div>

    );
  }
}
export default Playlist;
