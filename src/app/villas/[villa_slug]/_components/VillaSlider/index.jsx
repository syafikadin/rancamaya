import Slider from "@/app/_components/Slider";
import styles from "./styles.module.css";

function VillaSlider({ images }) {
  return (
    <div className={styles.sliderContainer}>
      <Slider images={images} imgPriority={true} />
    </div>
  );
}

export default VillaSlider;
