import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const axios = require('axios');

const Lyrics = ({history}) => {

  const API_KEY = '4728f41d8867111a2af67f30b7134aa4'
  const [artist, setArtist] = useState('Famous Dex')
  const [trackName, setTrackName] = useState('Hoes Mad')
  const [trackId, setTrackId] = useState('')
  const [lyrics, setLyrics] = useState('Loading Lyrics')

  useEffect(() => {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${history.location.state.artist}&q_track=${history.location.state.song}&apikey=${API_KEY}`)
      .then(res => getLyrics(res.data))
      .catch(err => console.log(err));
  });

  const goBack = (event) => {
    event.preventDefault()
    history.push("/view")
  }

  const getLyrics = (data) => {
    setTrackId(data.message.body.track_list[0].track['track_id'])
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${API_KEY}`)
      .then(res => displayLyrics(res.data))
      .catch(err => console.log(err));
  }

  const displayLyrics = (data) => {
    setLyrics(data.message.body.lyrics.lyrics_body)
  }

  return (
    <Container>
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <pre style={{fontFamily: "Roboto", color: 'white'}}><b>{lyrics}</b></pre>
      </div>
      <Button size = "lg" onClick={goBack} variant="dark">
        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
       </Button>
    </Container>
  )
}

export default Lyrics;