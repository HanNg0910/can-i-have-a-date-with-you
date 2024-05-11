import React, { useState } from 'react';
import hurrayGif from '../assets/output_HiWnWX.gif';  // Importing GIF

function Yes() {
    return (
        <div style={styles.container}>
                <p style={styles.text}>OH YEAHHHHH!!!!</p>
                <p style={styles.textVi}>Ngày mình gặp lại sẽ là ngày đẹp nhất. Yêu thương và nhớ bồ rất nhiều❤️</p>
                <img src={hurrayGif} alt="Date animation" style={styles.gifStyle} /> 
        </div>
    );
}

export default Yes;

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
    text: {
        color: '#4a4a4a',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        fontSize: '24px',
        marginRight: '10px',  // Ensure there is space between the text and the button
        fontWeight: 'bold'
    },
    textVi:{
        color: '#4a4a4a',
        fontSize: '20px',
    },
    gifStyle: {
        width: '400px', // Set the width you want
        height: 'auto', // Maintain aspect ratio
        marginBottom: '20px' // Space below the GIF
    },
};
