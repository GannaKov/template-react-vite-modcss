import styles from "../styles/Example.module.css";
import frogImg from "../assets/images/frog-green-md.png";

const Example = () => {
  return (
    <div className={styles.exampleDiv}>
      <h1>Good luck with the project!</h1>
      <img src={frogImg} alt="Frog" />
    </div>
  );
};

export default Example;
