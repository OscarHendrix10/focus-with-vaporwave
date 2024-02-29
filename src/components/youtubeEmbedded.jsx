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
    'GYSlY_Jt38w',
    '-CZHL8w52Co'
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

                        // className="icon icon-tabler icon-tabler-volume-2"
                        
                        // <img className="icon" src ="../../public/icons/loudspeaker_muted-0.png" alt="volume" viewBox="0 0 24 24" stroke-width="2" stroke="#F5F5DC" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                        <svg className="icon icon-tabler icon-tabler-volume-2" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
<path d="M0,0 L5,0 L5,1 L9,1 L9,2 L10,2 L10,3 L12,3 L12,4 L13,4 L13,5 L14,5 L14,6 L15,6 L15,8 L17,8 L17,13 L18,13 L18,15 L19,15 L19,16 L18,16 L18,18 L17,18 L17,23 L15,23 L15,25 L14,25 L14,26 L13,26 L13,27 L12,27 L12,28 L10,28 L10,29 L9,29 L9,30 L5,30 L5,31 L0,31 L0,30 L-4,30 L-4,29 L-5,29 L-5,28 L-7,28 L-7,27 L-8,27 L-8,26 L-9,26 L-9,25 L-10,25 L-10,23 L-11,23 L-11,22 L-12,22 L-12,19 L-13,19 L-13,12 L-12,12 L-12,9 L-11,9 L-11,8 L-10,8 L-10,6 L-9,6 L-9,5 L-8,5 L-8,4 L-7,4 L-7,3 L-5,3 L-5,2 L-4,2 L-4,1 L0,1 Z M-3,3 L-3,4 L-5,4 L-5,5 L-6,5 L-6,6 L-7,6 L-7,7 L-8,7 L-8,8 L-9,8 L-9,10 L-7,10 L-7,9 L-6,9 L-6,8 L-5,8 L-5,7 L-4,7 L-4,6 L-3,6 L-3,5 L-2,5 L-2,4 L-1,4 L-1,3 Z M6,3 L6,5 L7,5 L7,8 L8,8 L8,7 L9,7 L9,6 L10,6 L10,5 L8,5 L8,4 L9,4 L9,3 Z M12,6 L12,8 L11,8 L11,9 L10,9 L10,10 L9,10 L9,11 L8,11 L8,22 L7,22 L7,26 L6,26 L6,28 L8,28 L8,26 L11,26 L11,25 L13,25 L13,23 L14,23 L14,22 L15,22 L15,18 L16,18 L16,16 L10,16 L10,15 L16,15 L16,13 L15,13 L15,9 L14,9 L14,8 L13,8 L13,6 Z M-9,21 L-9,23 L-8,23 L-8,24 L-7,24 L-7,23 L-6,23 L-6,22 L-7,22 L-7,21 Z M-5,25 L-5,27 L-3,27 L-3,28 L-1,28 L-1,27 L-2,27 L-2,26 L-3,26 L-3,25 Z " fill="#D80A08" transform="translate(13,0)"/>
<path d="M0,0 L2,0 L2,1 L3,1 L3,3 L4,3 L4,7 L3,7 L3,8 L2,8 L2,9 L1,9 L1,10 L0,10 L0,11 L-1,11 L-1,12 L-2,12 L-2,14 L-3,14 L-3,11 L-2,11 L-2,4 L-3,4 L-3,7 L-4,7 L-4,16 L-5,16 L-5,17 L-6,17 L-6,18 L-7,18 L-7,19 L-10,19 L-10,18 L-13,18 L-13,16 L-14,16 L-14,11 L-13,11 L-13,8 L-10,8 L-10,7 L-9,7 L-9,6 L-8,6 L-8,5 L-7,5 L-7,4 L-6,4 L-6,3 L-5,3 L-5,2 L-3,2 L-3,1 L-2,1 L-2,3 L-1,3 L-1,1 L0,1 Z " fill="#B2B25D" transform="translate(16,2)"/>
<path d="M0,0 L1,0 L1,10 L0,10 L0,14 L-1,14 L-1,16 L-2,16 L-2,17 L-4,17 L-4,16 L-5,16 L-5,13 L-6,13 L-6,9 L-5,9 L-5,8 L-4,8 L-4,6 L-3,6 L-3,3 L-2,3 L-2,2 L-1,2 L-1,1 L0,1 Z " fill="#D9D9D9" transform="translate(20,12)"/>
<path d="M0,0 L1,0 L1,4 L0,4 L0,13 L-1,13 L-1,14 L-2,14 L-2,13 L-3,13 L-3,12 L-4,12 L-4,11 L-5,11 L-5,10 L-6,10 L-6,9 L-7,9 L-7,7 L-5,7 L-5,6 L-4,6 L-4,4 L-3,4 L-3,3 L-2,3 L-2,2 L-1,2 L-1,1 L0,1 Z " fill="#F7F7AE" transform="translate(12,5)"/>
<path d="M0,0 L2,0 L2,1 L3,1 L3,3 L4,3 L4,7 L3,7 L3,8 L2,8 L2,9 L1,9 L1,10 L-1,10 L-1,1 L0,1 Z " fill="#E3E3E3" transform="translate(16,2)"/>
<path d="M0,0 L1,0 L1,1 L0,1 Z M-4,1 L0,1 L0,4 L-1,4 L-1,3 L-3,3 L-3,4 L-5,4 L-5,5 L-6,5 L-6,6 L-7,6 L-7,7 L-8,7 L-8,8 L-9,8 L-9,10 L-10,10 L-10,13 L-12,13 L-12,14 L-13,14 L-13,12 L-12,12 L-12,9 L-11,9 L-11,8 L-10,8 L-10,6 L-9,6 L-9,5 L-8,5 L-8,4 L-7,4 L-7,3 L-5,3 L-5,2 L-4,2 Z " fill="#F80600" transform="translate(13,0)"/>
<path d="M0,0 L2,0 L2,1 L1,1 L1,2 L0,2 L0,6 L1,6 L1,7 L0,7 L0,9 L-1,9 L-1,8 L-3,8 L-3,7 L-4,7 L-4,4 L-3,4 L-3,3 L-1,3 L-1,1 L0,1 Z " fill="#6E6E30" transform="translate(14,19)"/>
<path d="M0,0 L2,0 L2,1 L3,1 L3,2 L4,2 L4,3 L5,3 L5,5 L4,5 L4,6 L1,6 L1,4 L0,4 Z " fill="#E0E055" transform="translate(5,15)"/>
<path d="M0,0 L3,0 L3,1 L0,1 Z " fill="#808080" transform="translate(24,21)"/>
<path d="M0,0 L3,0 L3,1 L0,1 Z " fill="#808080" transform="translate(24,9)"/>
<path d="M0,0 L2,0 L2,1 L0,1 Z " fill="#808080" transform="translate(25,28)"/>
<path d="M0,0 L2,0 L2,1 L0,1 Z " fill="#808080" transform="translate(25,2)"/>
<path d="M0,0 L1,0 L1,1 L0,1 Z " fill="#808080" transform="translate(27,29)"/>
<path d="M0,0 L1,0 L1,1 L0,1 Z " fill="#808080" transform="translate(30,23)"/>
<path d="M0,0 L1,0 L1,1 L0,1 Z " fill="#808080" transform="translate(23,20)"/>
<path d="M0,0 L1,0 L1,1 L0,1 Z " fill="#808080" transform="translate(23,10)"/>
<path d="M0,0 L1,0 L1,1 L0,1 Z " fill="#808080" transform="translate(30,7)"/>
<path d="M0,0 L1,0 L1,1 L0,1 Z " fill="#808080" transform="translate(27,1)"/>
</svg>
                        :
                        // <svg className="icon icon-tabler icon-tabler-volume-2" viewBox="0 0 24 24" stroke-width="2" stroke="#F5F5DC" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8a5 5 0 0 1 0 8" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
                        <svg className="icon icon-tabler icon-tabler-volume-2" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                        <path d="M0 0 C2.59157192 1.20227563 3.37290331 2.90655501 4.35546875 5.51953125 C5.7915923 11.80517346 5.93527725 19.03703226 3.64453125 25.12890625 C1.89453125 27.87890625 1.89453125 27.87890625 0.03125 28.7890625 C-2.10546875 28.87890625 -2.10546875 28.87890625 -4.0703125 27.296875 C-4.72128906 26.56082031 -5.37226563 25.82476563 -6.04296875 25.06640625 C-8.89723713 21.86031951 -11.04479011 20.28743268 -15.10546875 18.87890625 C-16.10546875 17.87890625 -16.10546875 17.87890625 -16.29296875 14.44140625 C-16.10546875 10.87890625 -16.10546875 10.87890625 -14.10546875 8.87890625 C-13.38359375 8.65203125 -12.66171875 8.42515625 -11.91796875 8.19140625 C-8.36474798 6.53323656 -6.39790405 4.17665501 -3.8515625 1.2421875 C-2.10546875 -0.12109375 -2.10546875 -0.12109375 0 0 Z " fill="#067006" transform="translate(16.10546875,1.12109375)"/>
                        <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C5.86068149 7.51546519 6.2573495 15.53749946 4.32421875 22.3984375 C3.5 24.3125 3.5 24.3125 2 27 C1.01 26.67 0.02 26.34 -1 26 C-1 25.34 -1 24.68 -1 24 C-1.66 23.67 -2.32 23.34 -3 23 C-3 21.02 -3 19.04 -3 17 C-2.01 16.67 -1.02 16.34 0 16 C-0.33 15.67 -0.66 15.34 -1 15 C-1.33 15 -1.66 15 -2 15 C-2.33 10.71 -2.66 6.42 -3 2 C-2.01 1.34 -1.02 0.68 0 0 Z " fill="#D3D3D3" transform="translate(16,2)"/>
                        <path d="M0 0 C0 4.29 0 8.58 0 13 C-3.51716303 13 -4.37121748 12.17554415 -7 10 C-7.99 10.495 -7.99 10.495 -9 11 C-9.99 10.67 -10.98 10.34 -12 10 C-12 7.69 -12 5.38 -12 3 C-10.0625 3.3125 -10.0625 3.3125 -8 4 C-7.67 4.99 -7.34 5.98 -7 7 C-7 5.68 -7 4.36 -7 3 C-1.125 0 -1.125 0 0 0 Z " fill="#74D774" transform="translate(12,9)"/>
                        <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.2884375 1.61875 2.2884375 1.61875 1.5625 2.25 C-0.16433654 3.86534343 -0.16433654 3.86534343 -0.3125 6 C-1 8 -1 8 -3.9375 9.75 C-7 11 -7 11 -9 11 C-8.67 12.65 -8.34 14.3 -8 16 C-8.99 15.67 -9.98 15.34 -11 15 C-11 14.01 -11 13.02 -11 12 C-11.66 11.34 -12.32 10.68 -13 10 C-12.154375 9.649375 -11.30875 9.29875 -10.4375 8.9375 C-6.21055353 6.55503926 -3.27375359 3.53526645 0 0 Z " fill="#54B954" transform="translate(14,1)"/>
                        <path d="M0 0 C0.33 0 0.66 0 1 0 C1.33 3.3 1.66 6.6 2 10 C2.66 9.01 3.32 8.02 4 7 C4 8.65 4 10.3 4 12 C3.360625 12.103125 2.72125 12.20625 2.0625 12.3125 C1.0415625 12.6528125 1.0415625 12.6528125 0 13 C-0.33 13.99 -0.66 14.98 -1 16 C-2.08360869 9.93179132 -1.79074734 5.89893243 0 0 Z " fill="#253225" transform="translate(13,6)"/>
                        <path d="M0 0 C0 1.65 0 3.3 0 5 C-1.98 5.99 -1.98 5.99 -4 7 C-4.99 6.34 -5.98 5.68 -7 5 C-7 4.34 -7 3.68 -7 3 C-1.125 0 -1.125 0 0 0 Z " fill="#EEFFEE" transform="translate(12,9)"/>
                        <path d="M0 0 C0.66 0.66 1.32 1.32 2 2 C1.01 2.33 0.02 2.66 -1 3 C-0.67 4.65 -0.34 6.3 0 8 C-0.99 7.67 -1.98 7.34 -3 7 C-3 6.01 -3 5.02 -3 4 C-3.66 3.34 -4.32 2.68 -5 2 C-3.35 1.34 -1.7 0.68 0 0 Z " fill="#19D519" transform="translate(6,9)"/>
                        <path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C3.34 2.98 2.68 4.96 2 7 C1.34 7 0.68 7 0 7 C0 4.69 0 2.38 0 0 Z " fill="#9BE69B" transform="translate(0,12)"/>
                        <path d="M0 0 C2.0625 0.4375 2.0625 0.4375 4 1 C4 2.65 4 4.3 4 6 C2.35 4.35 0.7 2.7 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#52E852" transform="translate(8,15)"/>
                        <path d="M0 0 C2.97 0 5.94 0 9 0 C9 0.33 9 0.66 9 1 C6.03 1 3.06 1 0 1 C0 0.67 0 0.34 0 0 Z " fill="#808080" transform="translate(23,15)"/>
                        <path d="M0 0 C3 1 3 1 3 1 Z " fill="#808080" transform="translate(27,22)"/>
                        <path d="M0 0 C3 1 3 1 3 1 Z " fill="#808080" transform="translate(24,21)"/>
                        <path d="M0 0 C3 1 3 1 3 1 Z " fill="#808080" transform="translate(24,9)"/>
                        <path d="M0 0 C3 1 3 1 3 1 Z " fill="#808080" transform="translate(27,8)"/>
                        <path d="M0 0 C2 1 2 1 2 1 Z " fill="#808080" transform="translate(25,28)"/>
                        <path d="M0 0 C2 1 2 1 2 1 Z " fill="#808080" transform="translate(23,27)"/>
                        <path d="M0 0 C2 1 2 1 2 1 Z " fill="#808080" transform="translate(21,26)"/>
                        <path d="M0 0 C2 1 2 1 2 1 Z " fill="#808080" transform="translate(21,4)"/>
                        <path d="M0 0 C2 1 2 1 2 1 Z " fill="#808080" transform="translate(23,3)"/>
                        <path d="M0 0 C2 1 2 1 2 1 Z " fill="#808080" transform="translate(25,2)"/>
                        <path d="" fill="#808080" transform="translate(0,0)"/>
                        <path d="" fill="#808080" transform="translate(0,0)"/>
                        <path d="" fill="#808080" transform="translate(0,0)"/>
                        <path d="" fill="#808080" transform="translate(0,0)"/>
                        <path d="" fill="#808080" transform="translate(0,0)"/>
                        <path d="" fill="#808080" transform="translate(0,0)"/>
                        </svg>
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