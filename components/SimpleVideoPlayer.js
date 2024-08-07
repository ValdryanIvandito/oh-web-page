"use client";

import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

export default function SimpleVideoPlayer({ src, type }) {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Track video playing state
  const [isMute, setIsMute] = useState(true); // Track video mute state

  const handlePlayPauseToggle = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying); // Toggle the state
  };

  const handleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMute(!isMute);
  };

  const handleVolumeChange = (event) => {
    videoRef.current.volume = event.target.value;
  };

  return (
    <div className="bg-slate-800 text-white text-xs font-bold">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        style={{ width: "auto", height: "auto" }}
      >
        <source src={src} type={type} />
        {t("t7")}
      </video>
      <div className="flex justify-center items-center p-2 gap-3 md:gap-6">
        <button
          className="hover:bg-slate-500 border-2 border-white rounded-full w-16 py-1 px-2"
          onClick={handlePlayPauseToggle}
        >
          {isPlaying ? t("Pause") : t("Play")}{" "}
          {/* Toggle text based on state */}
        </button>
        <button
          className="hover:bg-slate-500 border-2 border-white rounded-full w-16 py-1 px-2"
          onClick={handleMute}
        >
          {isMute ? t("Unmute") : t("Mute")} {/* Toggle text based on state */}
        </button>

        <div className="flex justify-center items-center gap-2">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            onChange={handleVolumeChange}
            // className="border border-black transform -rotate-90 of"
          />
        </div>
      </div>
    </div>
  );
}

// // components/SimpleVideoPlayer.js
// import dynamic from "next/dynamic";
// import React, { Component } from "react";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// // Import Player component dynamically without SSR
// const Player = dynamic(() => import("video-react").then((mod) => mod.Player), {
//   ssr: false,
// });

// export default class PlayerExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       playerSource: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
//       inputVideoUrl: "http://www.w3schools.com/html/mov_bbb.mp4",
//     };

//     this.handleValueChange = this.handleValueChange.bind(this);
//     this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.playerSource !== prevState.playerSource) {
//       this.player.load();
//     }
//   }

//   handleValueChange(e) {
//     const { value } = e.target;
//     this.setState({
//       inputVideoUrl: value,
//     });
//   }

//   updatePlayerInfo() {
//     const { inputVideoUrl } = this.state;
//     this.setState({
//       playerSource: inputVideoUrl,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Player
//           ref={(player) => {
//             this.player = player;
//           }}
//           videoId="video-1"
//         >
//           <source src={this.state.playerSource} />
//         </Player>
//         <div className="docs-example">
//           <Form>
//             <FormGroup>
//               <Label for="inputVideoUrl">Video Url</Label>
//               <Input
//                 name="inputVideoUrl"
//                 id="inputVideoUrl"
//                 value={this.state.inputVideoUrl}
//                 onChange={this.handleValueChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Button type="button" onClick={this.updatePlayerInfo}>
//                 Update
//               </Button>
//             </FormGroup>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }
