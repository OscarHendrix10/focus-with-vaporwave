import { useState } from "react";
import YouTube from "react-youtube";
import '../assets/styles/youtubeEmbeded.css'


const playlistsList = [
    'bJGvLLEZQAA',
    'JELt1jxJsHQ',
    'CzO2yqmG9U',
    'QPAHVS-e1NM',
    'k_Dwg_x48Rw',
    'PJ0vYbUkSFU',
    'TJK_12I9HJ4'
]

const randomPlaylist = () => {
    const randomIndex = Math.floor(Math.random() * playlistsList.length);
    return playlistsList[randomIndex]
}

// eslint-disable-next-line react/prop-types
const YoutubeEmbedded = () => {
    const [volume, setVolume] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState(randomPlaylist());

    const _onReady = (event) => {
        event.target.setVolume(volume);
    }

    const handleSound = () => {
        if(volume > 0) {
            setVolume(0)
        } else {
            setSelectedVideo(randomPlaylist())
            setVolume(30)
        }
    }


  return (
        <div>
            <div className="absolute top-0 right-0 pt-8 z-50">
                <button onClick={() => handleSound()}>
                    {
                        volume > 0 ?
                        <img className="icon" src ="../../public/icons/loudspeaker_muted-0.png" alt="volume" viewBox="0 0 24 24" stroke-width="2" stroke="#F5F5DC" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        :
                        // <svg className="icon icon-tabler icon-tabler-volume-2" viewBox="0 0 24 24" stroke-width="2" stroke="#F5F5DC" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8a5 5 0 0 1 0 8" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
                        <img className="icon" src ="../../public/icons/loudspeaker_rays_green-0.png" alt="volume" viewBox="0 0 24 24" stroke-width="2" stroke="#F5F5DC" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                    }
                </button>
            </div>
            <div className='youtube-container'>
                <YouTube videoId={selectedVideo} opts={{playerVars: {autoplay:1, volume: volume}}} onReady={_onReady} />
            </div>
        </div>
  )
}

export default YoutubeEmbedded