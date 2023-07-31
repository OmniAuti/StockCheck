import styles from "src/styles/Home.module.css";

const MainLocked = ({ handleUnlock }) => {
  <section className={styles.lockScreen}>
    <form>
      <input onChange={(e) => handleUnlock(e.target.value)} type="text" />
    </form>
    <h1>kasjdhflkjashfkjdh</h1>
  </section>;
};

export default MainLocked;
