'use client'

import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from 'react';


interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// use client directive
export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');


  const sasUrl = "https://interactiveflixblob.blob.core.windows.net/flixblobstorage1/brothers.mp4?sv=2023-11-03&st=2024-04-25T11%3A32%3A11Z&se=2024-04-25T12%3A32%3A11Z&sr=b&sp=r&sig=dDUJkkoK2lC5AIfo38jiwgN4TwTf9JBne8SWaKLsuhI%3D";
  // useEffect(() => {
  //   // Replace `API_ENDPOINT` with your actual API endpoint
  //   // and `videoId` with the identifier for your video.
  //   const fetchVideoUrl = async () => {
  //     try {
  //       const response = await fetch(`/api/videos/${videoId}`);
  //       const data = await response.json();
  //       setVideoUrl(data.videoUrl); // Assuming the response contains the video URL
  //     } catch (error) {
  //       console.error('Failed to fetch video', error);
  //     }
  //   };

  //   fetchVideoUrl();
  // }, [videoId]);

  const sendMessage = async () => {
    const body = {
        model: "llama3",
        messages: [
            ...messages,
            { role: "user", content: userInput }
        ]
    };

    try {
        const response = await fetch('http://127.0.0.1:32777/Chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        // Assume responseData.message is the reply from the assistant
        setMessages(prevMessages => [
            ...prevMessages,
            { role: "user", content: userInput },
            { role: "assistant", content: responseData.message }
        ]);
    } catch (error) {
        console.error('Failed to send message:', error);
    }
};


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
        <video width="100%" height="auto" controls>
          <source src={sasUrl} type="video/mp4" />
        </video>
        
      </div>

      
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>

      {/* Display the response */}
      <div style={{maxWidth: "200px"}}>
      {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.role}`}>
                    <span>{msg.role}: </span>{msg.content}
                </div>
            ))}
      </div>
    </main>
  );
}
