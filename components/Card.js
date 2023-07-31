import styles from "src/styles/Home.module.css";

const Card = ({ x }) => {
  return (
    <div className={styles.outOfStockCard}>
      <div className={styles.dispensaryStuff}>
        <h3>{x.dispensary.dispensaryName}</h3>
        <h6>Phone: {x.dispensary.phone}</h6>
        <h6>Address: {x.dispensary.address}</h6>
        <h6>
          Dispensary:{" "}
          <a href={x.dispensary.url} target="_blank">
            iHeartJane Page
          </a>
        </h6>
        <h6>
          Product:{" "}
          <a href={x.productUrl} target="_blank">
            iHeartJane Page
          </a>
        </h6>
      </div>
      <p>
        Product Type: <span>{x.productType}</span>
      </p>
      <p>
        Strain: <span>{x.product}</span>
      </p>
    </div>
  );
};

export default Card;
