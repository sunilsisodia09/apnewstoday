
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

import "./LatestNews.css";



interface NewsItem {
  id: number;
  category: string;
  location: string;
  title: string;
  excerpt: string;
  time: string;
  date: string;
  image: string;
  youtube?: string;
  breaking?: boolean;
}


/* =========================================================
   NEWS DATA
========================================================= */

const latestNews: NewsItem[] = [
  {
    id: 1,

    category: "उत्तराखंड",

    location: "देहरादून",

    title:
      "उत्तराखंड से जुड़ी आज की प्रमुख खबरें और ताजा अपडेट",

    excerpt:
      "प्रदेश के अलग-अलग जिलों से दिनभर की महत्वपूर्ण खबरों और स्थानीय घटनाक्रम पर नजर।",

    time: "आज 08:30 PM",

    date: "28 सितंबर 2026",

    image: "/news/news-1.jpg",

    youtube:
      "https://youtu.be/xfWDnrqVZ6A?si=ca56a6SIxsHcwf47",

    breaking: true,
  },

  {
    id: 2,

    category: "देहरादून",

    location: "Dehradun",

    title:
      "देहरादून में आज के प्रमुख स्थानीय अपडेट, प्रशासन और शहर की खबरें",

    excerpt:
      "राजधानी देहरादून से जुड़ी महत्वपूर्ण गतिविधियों और स्थानीय खबरों का अपडेट।",

    time: "आज 07:45 PM",

    date: "28 सितंबर 2026",

    image: "/news/news-2.jpg",

    youtube:
      "https://youtu.be/xfWDnrqVZ6A?si=ca56a6SIxsHcwf47",
  },

  {
    id: 3,

    category: "हरिद्वार",

    location: "Haridwar",

    title:
      "हरिद्वार से सामने आईं दिनभर की प्रमुख खबरें",

    excerpt:
      "धर्मनगरी हरिद्वार से स्थानीय प्रशासन, यातायात और जनसरोकार से जुड़ी खबरें।",

    time: "आज 06:55 PM",

    date: "28 सितंबर 2026",

    image: "/news/news-3.jpg",

    youtube:
      "https://youtu.be/xfWDnrqVZ6A?si=ca56a6SIxsHcwf47",
  },

  {
    id: 4,

    category: "नैनीताल",

    location: "Nainital",

    title:
      "कुमाऊं क्षेत्र की ताजा खबरों और गतिविधियों पर एक नजर",

    excerpt:
      "नैनीताल और आसपास के क्षेत्रों से जुड़े प्रमुख स्थानीय अपडेट।",

    time: "आज 06:20 PM",

    date: "28 सितंबर 2026",

    image: "/news/news-4.jpg",

    youtube:
      "https://youtu.be/xfWDnrqVZ6A?si=ca56a6SIxsHcwf47",
  },

  {
    id: 5,

    category: "पौड़ी",

    location: "Pauri Garhwal",

    title:
      "गढ़वाल क्षेत्र से दिनभर के महत्वपूर्ण समाचार अपडेट",

    excerpt:
      "पौड़ी और आसपास के पहाड़ी क्षेत्रों से जुड़ी स्थानीय खबरों का संक्षिप्त अपडेट।",

    time: "आज 05:40 PM",

    date: "28 सितंबर 2026",

    image: "/news/news-5.jpg",

    youtube:
      "https://youtu.be/xfWDnrqVZ6A?si=ca56a6SIxsHcwf47",
  },

  {
    id: 6,

    category: "रुद्रप्रयाग",

    location: "Rudraprayag",

    title:
      "पहाड़ से जुड़ी खबरों और स्थानीय घटनाक्रम का ताजा अपडेट",

    excerpt:
      "रुद्रप्रयाग और आसपास के क्षेत्रों की प्रमुख गतिविधियों पर लगातार अपडेट।",

    time: "आज 05:10 PM",

    date: "28 सितंबर 2026",

    image: "/news/news-6.jpg",

    youtube:
      "https://youtu.be/xfWDnrqVZ6A?si=ca56a6SIxsHcwf47",
  },
];


/* =========================================================
   YOUTUBE ID
========================================================= */

function getYouTubeId(
  url: string
): string | null {

  try {

    const parsedUrl = new URL(url);

    const hostname =
      parsedUrl.hostname.toLowerCase();


    /* youtube.com/watch?v= */

    if (
      hostname === "youtube.com" ||
      hostname === "www.youtube.com"
    ) {

      const videoId =
        parsedUrl.searchParams.get("v");

      if (videoId) {
        return videoId;
      }
    }


    /* youtu.be/VIDEO_ID */

    if (
      hostname === "youtu.be" ||
      hostname === "www.youtu.be"
    ) {

      return parsedUrl.pathname
        .replace("/", "")
        .split("?")[0];
    }


    /* youtube.com/embed/VIDEO_ID */

    if (
      parsedUrl.pathname.includes("/embed/")
    ) {

      return parsedUrl.pathname
        .split("/embed/")[1]
        .split("/")[0];
    }


    /* youtube.com/shorts/VIDEO_ID */

    if (
      parsedUrl.pathname.includes("/shorts/")
    ) {

      return parsedUrl.pathname
        .split("/shorts/")[1]
        .split("/")[0];
    }


    return null;

  } catch {

    return null;

  }
}


/* =========================================================
   YOUTUBE VIDEO
========================================================= */

interface YouTubeVideoProps {
  youtube: string;
  title: string;
}


function YouTubeVideo({
  youtube,
  title,
}: YouTubeVideoProps) {

  const wrapperRef =
    useRef<HTMLDivElement | null>(null);

  const iframeRef =
    useRef<HTMLIFrameElement | null>(null);


  const [isPlaying, setIsPlaying] =
    useState(false);

  const [isMuted, setIsMuted] =
    useState(true);


  const videoId =
    getYouTubeId(youtube);


  /* =======================================================
     SEND COMMAND
  ======================================================= */

  const sendCommand = (
    command: string
  ) => {

    if (
      !iframeRef.current ||
      !iframeRef.current.contentWindow
    ) {
      return;
    }


    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: [],
      }),
      "*"
    );
  };


  /* =======================================================
     PLAY
  ======================================================= */

  const playVideo = () => {

    sendCommand("mute");

    sendCommand("playVideo");

    setIsMuted(true);

    setIsPlaying(true);
  };


  /* =======================================================
     PAUSE
  ======================================================= */

  const pauseVideo = () => {

    sendCommand("pauseVideo");

    setIsPlaying(false);
  };


  /* =======================================================
     MUTE
  ======================================================= */

  const muteVideo = () => {

    sendCommand("mute");

    setIsMuted(true);
  };


  /* =======================================================
     UNMUTE
  ======================================================= */

  const unmuteVideo = () => {

    sendCommand("unMute");

    setIsMuted(false);
  };


  /* =======================================================
     AUTO PLAY / AUTO PAUSE
  ======================================================= */

  useEffect(() => {

    const wrapper =
      wrapperRef.current;

    if (!wrapper) {
      return;
    }


    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (
              entry.isIntersecting &&
              entry.intersectionRatio >= 0.65
            ) {

              /*
                Autoplay muted
              */

              sendCommand("mute");

              sendCommand("playVideo");

              setIsMuted(true);

              setIsPlaying(true);

            } else {

              /*
                Outside viewport
                = pause
              */

              sendCommand("pauseVideo");

              setIsPlaying(false);
            }

          });

        },
        {
          threshold: [
            0,
            0.35,
            0.65,
            1,
          ],
        }
      );


    observer.observe(wrapper);


    return () => {

      observer.disconnect();

    };

  }, []);


  /* =======================================================
     INVALID URL
  ======================================================= */

  if (!videoId) {

    return (
      <div className="latest-news-invalid-video">

        <span>
          Video unavailable
        </span>

      </div>
    );
  }


  /* =======================================================
     VIDEO
  ======================================================= */

  return (

    <div
      ref={wrapperRef}
      className="latest-news-video"
    >

      <iframe
        ref={iframeRef}

        src={
          `https://www.youtube.com/embed/${videoId}` +
          `?enablejsapi=1` +
          `&autoplay=0` +
          `&mute=1` +
          `&controls=1` +
          `&rel=0` +
          `&modestbranding=1` +
          `&playsinline=1`
        }

        title={title}

        allow={
          "autoplay; encrypted-media; " +
          "picture-in-picture"
        }

        allowFullScreen
      />


      {/* VIDEO BADGE */}

      <span className="latest-news-video-badge">
        VIDEO
      </span>


      {/* CONTROLS */}

      <div className="latest-video-controls">

        {/* PLAY / PAUSE */}

        <button
          type="button"

          className="latest-video-control-button"

          onClick={() => {

            if (isPlaying) {

              pauseVideo();

            } else {

              sendCommand("playVideo");

              setIsPlaying(true);
            }

          }}

          aria-label={
            isPlaying
              ? "Pause video"
              : "Play video"
          }
        >

          {isPlaying ? (
            <Pause size={17} />
          ) : (
            <Play size={17} />
          )}

        </button>


        {/* SOUND */}

        <button
          type="button"

          className="latest-video-control-button"

          onClick={() => {

            if (isMuted) {

              unmuteVideo();

            } else {

              muteVideo();

            }

          }}

          aria-label={
            isMuted
              ? "Unmute video"
              : "Mute video"
          }
        >

          {isMuted ? (
            <VolumeX size={17} />
          ) : (
            <Volume2 size={17} />
          )}

        </button>

      </div>

    </div>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function LatestNews() {

  return (

    <section
      className="latest-news"
      id="latest-news"
    >

      <div className="latest-news-container">


        {/* ===================================================
            HEADING
        =================================================== */}

        <div className="latest-news-heading">

          <div className="latest-news-heading-left">

            <span className="latest-news-small-label">
              उत्तराखंड न्यूज़
            </span>


            <h2>
              आज की{" "}
              <span>
                ताज़ा खबरें
              </span>
            </h2>


            <p>
              उत्तराखंड के हर जिले और शहर से जुड़ी
              महत्वपूर्ण खबरों और अपडेट पर नजर।
            </p>

          </div>


          <Link
            href="/news"
            className="latest-news-view-all"
          >

            सभी खबरें

            <ArrowRight size={18} />

          </Link>

        </div>


        {/* ===================================================
            BREAKING NEWS
        =================================================== */}

        <div className="latest-breaking-bar">

          <div className="latest-breaking-label">

            <span className="latest-breaking-dot" />

            BREAKING NEWS

          </div>


          <div className="latest-breaking-content">

            उत्तराखंड की ताजा खबरों और महत्वपूर्ण
            अपडेट के लिए जुड़े रहिए...

          </div>


          <Link
            href="/news"
            className="latest-breaking-arrow"
            aria-label="View latest news"
          >

            <ChevronRight size={20} />

          </Link>

        </div>


        {/* ===================================================
            NEWS GRID
        =================================================== */}

        <div className="latest-news-grid">

          {latestNews.map((news) => (

            <article
              key={news.id}
              className="latest-news-card"
            >


              {/* =================================================
                  VIDEO / IMAGE
              ================================================= */}

              {news.youtube ? (

                <YouTubeVideo
                  youtube={news.youtube}
                  title={news.title}
                />

              ) : (

                <Link
                  href={`/news/${news.id}`}
                  className="latest-news-image-link"
                >

                  <div className="latest-news-image">

                    <img
                      src={news.image}
                      alt={news.title}
                      loading="lazy"
                    />


                    {news.breaking && (

                      <span className="latest-news-breaking-badge">
                        BREAKING
                      </span>

                    )}


                    <span className="latest-news-category">
                      {news.category}
                    </span>

                  </div>

                </Link>

              )}


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="latest-news-content">


                {/* META */}

                <div className="latest-news-meta">

                  <span className="latest-news-location">

                    <MapPin size={14} />

                    {news.location}

                  </span>


                  <span className="latest-news-time">

                    <Clock3 size={14} />

                    {news.time}

                  </span>

                </div>


                {/* TITLE */}

                <h3>

                  <Link
                    href={`/news/${news.id}`}
                  >
                    {news.title}
                  </Link>

                </h3>


                {/* DESCRIPTION */}

                <p>
                  {news.excerpt}
                </p>


                {/* FOOTER */}

                <div className="latest-news-footer">

                  <span>
                    {news.date}
                  </span>


                  <Link
                    href={`/news/${news.id}`}
                    className="latest-news-read-more"
                  >

                    पढ़ें

                    <ArrowRight size={15} />

                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* ===================================================
            BOTTOM BUTTON
        =================================================== */}

       

      </div>

    </section>
  );
}