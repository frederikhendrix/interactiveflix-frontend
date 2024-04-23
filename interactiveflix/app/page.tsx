import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';

export default function Home() {

  const sasUrl = "https://interactiveflixblob.blob.core.windows.net/flixblobstorage1/brothers.mp4?sv=2023-11-03&st=2024-04-23T20%3A58%3A16Z&se=2024-04-23T21%3A58%3A16Z&sr=b&sp=r&sig=th9zCKATBvtWY3ccqo2eCrFtQWs4TdDspHuPKMa%2FR5s%3D";
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


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        
        <video width="100%" height="auto" controls>
          <source src={sasUrl} type="video/mp4" />
        </video>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
