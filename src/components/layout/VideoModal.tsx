import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import phoneIcon from 'public/phone.gif';
import Image from 'next/image';

const VideoModal = () => {
  const router = useRouter();
  const [vid, setVid] = useState(true);

  const heandelClick = () => {
    router.push('tel: +18882073469');
  };

  return (
    <div className={'vid-m' + (vid ? ' vid-a' : ' ')}>
      <div className="vid-c">
        <button
          aria-label="close video popup"
          className="close-v"
          onClick={() => setVid(false)}
        >
          <i className="fa-light fa-xmark-large"></i>
        </button>
        <video autoPlay loop  controls>
          <source src="/images/popup-video.mp4" type="video/mp4" />
        </video>

        <h5
          className="d-flex align-items-center "
          style={{
            width: '140px',
            height: '50px',
          }}
        >
          <Image
            onClick={heandelClick}
            src={phoneIcon}
            alt="Phone Icon"
            style={{
              width: '20px',
              height: '20px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />

          <p onClick={heandelClick} className="call-animation">
            Call Now
          </p>
        </h5>
      </div>
    </div>
  );
};

export default VideoModal;
