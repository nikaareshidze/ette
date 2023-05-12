import React, { useState } from "react";
import styles from "./styles.module.scss";
import { GrFormNextLink } from "react-icons/gr";

export default function FloraImage() {
  const [floraRosaImg, setFloraRosaImg] = useState([
    "https://ettespirits.com/static/e86923f4e547f8eb2b31e3ff9d119ef4/2c251/EtteSpirits_August2022_Moss_01_v5.webp",
    "https://ettespirits.com/static/5d471e394972c2c01bfc21283368325a/75e73/EtteSpirits_August2022_PDP_Front01_v2.webp",
    "https://ettespirits.com/static/dc8d1375b12a7b2b1c0181f9764fa77f/6b550/EtteSpirits_August2022_PDP_Back_v2.webp",
  ]);
  const [index, setIndex] = useState(0);

  const changeImageNext = () => {
    if (index < floraRosaImg.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const changeImagePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(2);
    }
  };

  return (
    <div className={styles.imageAndButtonsContainer}>
      <img
        src={floraRosaImg[index]}
        alt="flora rosa"
        className={styles.nextCursor}
      />
      <button
        onClick={changeImagePrev}
        className={styles.prevImageButton}
      ></button>
      <button
        onClick={changeImageNext}
        className={styles.nextImageButton}
      ></button>
    </div>
  );
}
