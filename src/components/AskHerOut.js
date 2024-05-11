import React, { useState, useRef } from 'react';
import audioFile from '../assets/Can I have the day with you.m4a';
import yahFile from '../assets/yay-6326.mp3';
import dateGif from '../assets/giphy.gif';  // Importing GIF
import { useNavigate } from 'react-router-dom';
// import 

function AskOut() {
    const [position, setPosition] = useState({ top: 0, left: 0 });  // Initial position isn't relevant due to relative positioning initially
    const [init, setInit] = useState(false);  // State to track initial click
    const audioRef = useRef(null);
    const yahRef = useRef(null);
    const navigate = useNavigate();

    const onPlay = () => console.log('Audio is playing');
    const onPause = () => console.log('Audio is paused');
    const onError = (e) => console.log('Error in audio playback', e);

    const [isPlaying, setIsPlaying] = useState(false);  // State to track audio playing

    // Toggle play/pause audio
    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();  // Pause the audio if it is currently playing
            } else {
                audio.currentTime = 0;  // Optional: Reset audio to start from the beginning each time
                audio.play();  // Play the audio if it is not currently playing
            }
            setIsPlaying(!isPlaying);  // Toggle the state
        }
    };
    const yahAudio = () => {
        if (yahRef.current) {
            yahRef.current.play().then(() => {
                setTimeout(() => {
                    navigate('/yes');
                }, 2000); // Delay navigation to ensure audio is heard
            }).catch((error) => {
                console.error('Playback failed:', error);
                navigate('/yes');
            });
        } else {
            console.log('Audio reference not found');
            navigate('/yes');
        }
    };
    


    // Function to handle click on the "No" button and move it randomly
    const handleNoClick = () => {
        if (!init) {
            setInit(true);  // Change init state only on the first click
        }
        const newPosition = {
            top: Math.random() * (window.innerHeight - 100), // Avoiding edge overflow
            left: Math.random() * (window.innerWidth - 100)  // Avoiding edge overflow
        };
        setPosition(newPosition);
    };

    return (
        <div style={styles.container}>
            <audio
                ref={audioRef}
                src={audioFile}
                onPlay={onPlay}
                onPause={onPause}
                onError={onError}>
                Your browser does not support the audio element.
            </audio>

            <div style={styles.buttonContainer}>
                <p style={styles.text}>CAN I HAVE A DATE WITH YOU?</p>
                <button style={styles.playButton} onClick={togglePlayPause}>
                {isPlaying ? 'Pause Music' : 'Play Music'} 
            </button>
            </div>
            <img src={dateGif} alt="Date animation" style={styles.gifStyle} /> 
            <div style={styles.buttonContainer}>
                <button style={styles.yesButton} onClick={yahAudio}>Yes</button>
                <audio ref={yahRef} src={yahFile} preload="auto"></audio>
                <button 
                    style={{
                        ...styles.noButton,
                        top: init ? `${position.top}px` : undefined,
                        left: init ? `${position.left}px` : undefined,
                        position: init ? 'absolute' : 'relative'  // Start as relative, change to absolute after first click
                    }}
                    onClick={handleNoClick}
                >
                    No
                </button>
            </div>
        </div>
    );
}

export default AskOut;

// Define styles in your component for simplicity and organization
const styles = {
    container: {
        textAlign: 'center',
        backgroundColor: '#ffd1dc',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAndButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
    },
    text: {
        color: '#4a4a4a',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        fontSize: '24px',
        marginRight: '10px',  // Ensure there is space between the text and the button
        fontWeight: 'bold'
    },
    playButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'white',
        color: '#ff9fb2',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '20px',
        fontWeight: 'bold'
    },
    yesButton: {
        margin: '10px',
        cursor: 'pointer',
        padding: '10px 20px',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        color:'green',
        borderRadius: '5px'
    },
    noButton: {
        margin: '10px',
        cursor: 'pointer',
        padding: '10px 20px',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        color:'red',
        borderRadius: '5px',
        transition: 'top 0.5s, left 0.5s' // Smooth transition for moving button
    },
    buttonContainer: {
        display: 'flex'
    }
};
