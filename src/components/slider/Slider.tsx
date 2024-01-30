import React, { useRef } from "react";
import styles from "./styles.module.css";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleFill } from "react-icons/ri";

interface Props {
  children: React.ReactElement;
  step?: number;
}

const Slider = ({ children, step = 250 }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);
  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.slider_arrow}>
        <RiArrowLeftDoubleFill />
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.slider_arrow}>
        <RiArrowRightDoubleFill />
      </button>
    </div>
  );
};

export default Slider;
