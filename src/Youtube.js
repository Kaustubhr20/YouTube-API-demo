import React, { Component } from 'react'

const API = 'AIzaSyA4gzOSjQ8Y4MbMMM-hRmSiRa1MOBNY--Y';
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A';
const result = 10;

var finalURL = `https://www.googleapis.com/youtube/v3/videos?id=${channelID}&key=${API}&part=snippet,contentDetails,statistics,status`;

class Youtube extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson);
          const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
          this.setState({resultyt});
        })
        .catch((error) => {
          console.error(error);
        });
    }

  render() {
    return (
      <div>
        <button onClick={this.clicked}>Get YouTube Videos</button>
        {
          this.state.resultyt.map((link, i) => {
            var frame = <div key={i} className='youtube'><iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            return frame;
          })
        }
        {this.frame}
      </div>
    )
  }
}

export default Youtube;
