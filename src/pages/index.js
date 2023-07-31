import styles from "src/styles/Home.module.css";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import Card from "../../components/Card";

const Home = () => {
  const [days, setDays] = useState([]);
  const [yesterday, setYesterday] = useState([]);
  const [beforeYesterday, setBeforeYesterday] = useState([]);
  const [fourDaysAgo, setFourDaysAgo] = useState([]);
  const [fiveDaysAgo, setFiveDaysAgo] = useState([]);
  const [outOfStock, setOutOfStock] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const [dateFinder, setDateFinder] = useState(0);
  const [productType, setProductType] = useState("flower");
  const [historyDate, setHistoryDate] = useState("5");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, "0");
    let yesterday = String(date.getDate() - dateFinder).padStart(2, "0");
    let dayBeforeYesterday = String(date.getDate() - dateFinder - 1).padStart(
      2,
      "0"
    );
    let dayFourAgo = String(date.getDate() - dateFinder - 2).padStart(2, "0");
    let dayFiveAgo = String(date.getDate() - dateFinder - 3).padStart(2, "0");
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentMonth}-${currentDay}-${currentYear}`;
    let yesterdayDate = `${currentMonth}-${yesterday}-${currentYear}`;
    let beforeYesterdayDate = `${currentMonth}-${dayBeforeYesterday}-${currentYear}`;
    let fourAgoDate = `${currentMonth}-${dayFourAgo}-${currentYear}`;
    let fiveAgoDate = `${currentMonth}-${dayFiveAgo}-${currentYear}`;

    // console.log(
    //   currentDate,
    //   yesterdayDate,
    //   beforeYesterdayDate,
    //   fourAgoDate,
    //   fiveAgoDate
    // );
    console.log(dateFinder);
    // CURRENT
    await fetch(`dispensary_data/Dispensary-Scrape-${currentDate}.json`)
      .then((res) => res.json())
      .then((data) => {
        setDays(data);
      });
    console.log("one");
    // YESTERDAY
    await fetch(`dispensary_data/Dispensary-Scrape-${yesterdayDate}.json`)
      .then((res) => res.json())
      .then((data) => {
        setYesterday(data);
      });
    console.log("two");
    // DAY BEFORE YESTERDAY
    await fetch(`dispensary_data/Dispensary-Scrape-${beforeYesterdayDate}.json`)
      .then((res) => res.json())
      .then((data) => {
        setBeforeYesterday(data);
      });
    console.log("three");

    // FOUR DAYS AGO
    await fetch(`dispensary_data/Dispensary-Scrape-${fourAgoDate}.json`)
      .then((res) => res.json())
      .then((data) => {
        setFourDaysAgo(data);
      });
    console.log("four");
    // FIVE DAYS AGO
    await fetch(`dispensary_data/Dispensary-Scrape-${fiveAgoDate}.json`)
      .then((res) => res.json())
      .then((data) => {
        setFiveDaysAgo(data);
      });
    console.log("five");
    setTrigger(!trigger);
    // // CURRENT
    // await fetch(`dispensary_data/Dispensary-Scrape-07-20-2023.json`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setDays(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     setDateFinder(dateFinder + 1);
    //   });
    // console.log("one");
    // // YESTERDAY
    // await fetch(`dispensary_data/Dispensary-Scrape-07-15-2023.json`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setYesterday(data);
    //   });
    // console.log("two");
    // // DAY BEFORE YESTERDAY
    // await fetch(`dispensary_data/Dispensary-Scrape-07-14-2023.json`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBeforeYesterday(data);
    //   });
    // console.log("three");

    // // FOUR DAYS AGO
    // await fetch(`dispensary_data/Dispensary-Scrape-07-13-2023.json`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setFourDaysAgo(data);
    //   });
    // console.log("four");
    // // FIVE DAYS AGO
    // await fetch(`dispensary_data/Dispensary-Scrape-07-12-2023.json`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setFiveDaysAgo(data);
    //   });
    // console.log("five");
  };

  useEffect(() => {
    //
    var arrHolder = [];
    //
    if (
      days.length > 0 &&
      yesterday.length > 0 &&
      beforeYesterday.length > 0 &&
      fourDaysAgo.length > 0 &&
      fiveDaysAgo.length > 0
    ) {
      if (historyDate == 5) {
        for (let i = 0; i < fiveDaysAgo.length; i++) {
          for (let j = 0; j < fiveDaysAgo[i].aeriz[productType].length; j++) {
            // 5 DAYS AGO
            var strainNameFiveDaysAgo =
              fiveDaysAgo[i].aeriz[productType][j].strain;
            // 4 DAYS AGO
            var strainNameFourDaysAgo = fourDaysAgo[i].aeriz[productType];
            // 3 DAYS AGO
            var strainNameBeforeYesterday =
              beforeYesterday[i].aeriz[productType];
            // YESTERDAY
            var strainNameYesterday = yesterday[i].aeriz[productType];
            // CURRENT DAY
            var currentDay = days[i].aeriz[productType];
            // ALGO
            if (
              strainNameFourDaysAgo.some(
                (x) => x.strain === strainNameFiveDaysAgo
              )
            ) {
              if (
                strainNameBeforeYesterday.some(
                  (x) => x.strain === strainNameFiveDaysAgo
                )
              ) {
                if (
                  strainNameYesterday.some(
                    (x) => x.strain === strainNameFiveDaysAgo
                  )
                ) {
                  if (
                    currentDay.some((x) => x.strain === strainNameFiveDaysAgo)
                  ) {
                  } else {
                    arrHolder.push({
                      product: strainNameFiveDaysAgo,
                      productType: productType,
                      dispensary: days[i],
                      productUrl:
                        fiveDaysAgo[i].aeriz[productType][j].productURL,
                    });
                    //
                  }
                }
              }
            }
          }
        }
        setOutOfStock(arrHolder);
      } else if (historyDate == 3) {
        for (let i = 0; i < beforeYesterday.length; i++) {
          for (
            let j = 0;
            j < beforeYesterday[i].aeriz[productType].length;
            j++
          ) {
            // 3 DAYS AGO
            var strainNameBeforeYesterday =
              beforeYesterday[i].aeriz[productType][j].strain;
            // YESTERDAY
            var strainNameYesterday = yesterday[i].aeriz[productType];
            // CURRENT DAY
            var currentDay = days[i].aeriz[productType];
            // ALGO
            if (
              strainNameYesterday.some(
                (x) => x.strain === strainNameBeforeYesterday
              )
            ) {
              if (
                currentDay.some((x) => x.strain === strainNameBeforeYesterday)
              ) {
              } else {
                arrHolder.push({
                  product: strainNameBeforeYesterday,
                  productType: productType,
                  dispensary: days[i],
                  productUrl:
                    beforeYesterday[i].aeriz[productType][j].productURL,
                });
                //
              }
            }
          }
        }
      }
      setOutOfStock(arrHolder);

      //
      // console.log(days, yesterday, beforeYesterday);
      // console.log(outOfStock);
    }
  }, [trigger, productType, historyDate]);

  const handleUnlock = (val) => {
    if (val === "aeroponic") {
      setUnlocked(true);
    }
  };
  return (
    <>
      <Head>
        <title>Aeriz - Out of Stock</title>
        <link rel="shortcut icon" href="faviAeriz.png" />
      </Head>

      <section className={`${styles.mainSection} `}>
        {unlocked ? (
          <>
            <div className={styles.headlineForm}>
              <h1>Out of Stock</h1>
              <form className={styles.form}>
                Product:
                <select onChange={(e) => setProductType(e.target.value)}>
                  <option value="flower">Flower</option>
                  <option value="vape">Vape</option>
                  <option value="extract">Extract</option>
                  <option value="preroll">Pre-Roll</option>
                  <option value="edible">Edible</option>
                </select>
                Stock Period:
                <select onChange={(e) => setHistoryDate(e.target.value)}>
                  <option value="5">5</option>
                  <option value="3">3</option>
                </select>
              </form>
            </div>

            {outOfStock.length > 0 ? (
              outOfStock.map((x) => (
                <Card key={Math.ceil(Math.random() * 5000)} x={x} />
              ))
            ) : (
              <p className={styles.noResult}>No Results</p>
            )}
          </>
        ) : (
          <form className={styles.lockForm}>
            <input onChange={(e) => handleUnlock(e.target.value)} type="text" />
          </form>
        )}
      </section>
    </>
  );
};

export default Home;
