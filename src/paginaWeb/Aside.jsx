import React from 'react';
import BasicSelect from '../Select';

function Aside() {
  return (
    <aside>
      <BasicSelect />
      <div className="video-container">
        <div className="responsive-video">
          <iframe
            src="https://www.youtube.com/embed/uthPvsqYkVE?si=3oaf4HvSFkwvhzqy"
            title="YouTube video player 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="responsive-video">
          <iframe
            src="https://www.youtube.com/embed/lnhRN9bqEx4?si=fwNmj7PYPBIo7GiF" // Reemplaza VIDEO_ID_2 con el ID del segundo video
            title="YouTube video player 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </aside>
  );
}

export default Aside;