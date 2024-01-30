import styles from "./styles.module.css";
interface Props {
  title: string;
}
const Title = ({ title }: Props) => {
  return <h2 className={styles.title}>{title ? title : "Latest"}</h2>;
};

export default Title;
