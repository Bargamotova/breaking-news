import styles from "./styles.module.css";
interface Props {
  image?: string;
}
const Image = ({ image }: Props) => {
  return (
    <div className={styles.img__wrapper}>
      {image && <img src={image} alt="news" className={styles.img} />}
    </div>
  );
};

export default Image;
