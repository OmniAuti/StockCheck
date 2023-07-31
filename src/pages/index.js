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

  const [productType, setProductType] = useState("flower");
  const [historyDate, setHistoryDate] = useState("5");
  useEffect(() => {
    getData(0);
  }, []);

  const getData = async (dateFinder) => {
    var num = dateFinder;

    const date = new Date();

    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    let currentDay = String(date.getDate() - dateFinder).padStart(2, "0");
    //
    if (currentDay == 0) {
      currentMonth = currentMonth - 1;
      if (currentMonth == 1) {
        currentDay = 31;
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 2) {
        currentDay = 28;
        yesterday = 27;
        dayThreeAgo = 26;
        dayFourAgo = 25;
        dayFiveAgo = 24;
      } else if (currentMonth == 3) {
        currentDay = 31;
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 4) {
        currentDay = 30;
        yesterday = 29;
        dayThreeAgo = 28;
        dayFourAgo = 27;
        dayFiveAgo = 26;
      } else if (currentMonth == 5) {
        currentDay = 31;
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 6) {
        currentDay = 30;
        yesterday = 29;
        dayThreeAgo = 28;
        dayFourAgo = 27;
        dayFiveAgo = 26;
      } else if (currentMonth == 7) {
        currentDay = 31;
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 8) {
        currentDay = 31;
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 9) {
        currentDay = 30;
        yesterday = 29;
        dayThreeAgo = 28;
        dayFourAgo = 27;
        dayFiveAgo = 26;
      } else if (currentMonth == 10) {
        currentDay = 31;
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 11) {
        currentDay = 30;
        yesterday = 29;
        dayThreeAgo = 28;
        dayFourAgo = 27;
        dayFiveAgo = 26;
      } else if (currentMonth == 12) {
        currentDay = 31;
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      }
    }
    //
    let currentDate = `${currentMonth}-${currentDay}-${currentYear}`;
    //
    await fetch(`dispensary_data/Dispensary-Scrape-${currentDate}.json`)
      .then((res) => {
        if (res.status === 404) {
          console.log("TODAY DATA NOT UPLOADED");
          return getData(num + 1);
        }
      })
      .catch(() => {
        console.log("TODAY DATA NOT UPLOADED");
        return;
      });

    let yesterday = String(date.getDate() - dateFinder - 1).padStart(2, "0");
    let dayThreeAgo = String(yesterday - dateFinder - 2).padStart(2, "0");
    let dayFourAgo = String(yesterday - dateFinder - 3).padStart(2, "0");
    let dayFiveAgo = String(yesterday - dateFinder - 4).padStart(2, "0");

    if (yesterday == 0) {
      currentMonth = currentMonth - 1;
      if (currentMonth == 1) {
        yesterday = 31;
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      } else if (currentMonth == 2) {
        yesterday = 28;
        dayThreeAgo = 27;
        dayFourAgo = 26;
        dayFiveAgo = 25;
      } else if (currentMonth == 3) {
        yesterday = 31;
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      } else if (currentMonth == 4) {
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 5) {
        yesterday = 31;
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      } else if (currentMonth == 6) {
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 7) {
        yesterday = 31;
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      } else if (currentMonth == 8) {
        yesterday = 31;
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      } else if (currentMonth == 9) {
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 10) {
        yesterday = 31;
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      } else if (currentMonth == 11) {
        yesterday = 30;
        dayThreeAgo = 29;
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 12) {
        yesterday = 31;
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      }
    }

    let yesterdayDate = `${currentMonth}-${yesterday}-${currentYear}`;

    if (dayThreeAgo == 0) {
      currentMonth = currentMonth - 1;
      if (currentMonth == 1) {
        dayThreeAgo = 31;
        dayFourAgo = 30;
        dayFiveAgo = 29;
      } else if (currentMonth == 2) {
        dayThreeAgo = 28;
        dayFourAgo = 27;
        dayFiveAgo = 26;
      } else if (currentMonth == 3) {
        dayThreeAgo = 31;
        dayFourAgo = 30;
        dayFiveAgo = 29;
      } else if (currentMonth == 4) {
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      } else if (currentMonth == 5) {
        dayThreeAgo = 31;
        dayFourAgo = 30;
        dayFiveAgo = 29;
      } else if (currentMonth == 6) {
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      } else if (currentMonth == 7) {
        dayThreeAgo = 31;
        dayFourAgo = 30;
        dayFiveAgo = 29;
      } else if (currentMonth == 8) {
        dayThreeAgo = 31;
        dayFourAgo = 30;
        dayFiveAgo = 29;
      } else if (currentMonth == 9) {
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      } else if (currentMonth == 10) {
        dayThreeAgo = 31;
        dayFourAgo = 30;
        dayFiveAgo = 29;
      } else if (currentMonth == 11) {
        dayThreeAgo = 30;
        dayFourAgo = 29;
        dayFiveAgo = 28;
      } else if (currentMonth == 12) {
        dayThreeAgo = 31;
        dayFourAgo = 30;
        dayFiveAgo = 29;
      }
    }

    let beforeYesterdayDate = `${currentMonth}-${dayThreeAgo}-${currentYear}`;

    if (dayFourAgo == 0) {
      currentMonth = currentMonth - 1;
      if (currentMonth == 1) {
        dayFourAgo = 31;
        dayFiveAgo = 30;
      } else if (currentMonth == 2) {
        dayFourAgo = 28;
        dayFiveAgo = 27;
      } else if (currentMonth == 3) {
        dayFourAgo = 31;
        dayFiveAgo = 30;
      } else if (currentMonth == 4) {
        dayFourAgo = 30;
        dayFiveAgo = 29;
      } else if (currentMonth == 5) {
        dayFourAgo = 31;
        dayFiveAgo = 30;
      } else if (currentMonth == 6) {
        dayFourAgo = 30;
        dayFiveAgo = 29;
      } else if (currentMonth == 7) {
        dayFourAgo = 31;
        dayFiveAgo = 30;
      } else if (currentMonth == 8) {
        dayFourAgo = 31;
        dayFiveAgo = 30;
      } else if (currentMonth == 9) {
        dayFourAgo = 30;
        dayFiveAgo = 29;
      } else if (currentMonth == 10) {
        dayFourAgo = 31;
        dayFiveAgo = 30;
      } else if (currentMonth == 11) {
        dayFourAgo = 30;
        dayFiveAgo = 29;
      } else if (currentMonth == 12) {
        dayFourAgo = 31;
        dayFiveAgo = 30;
      }
    }

    let fourAgoDate = `${currentMonth}-${dayFourAgo}-${currentYear}`;

    if (dayFiveAgo == 0) {
      currentMonth = currentMonth - 1;
      if (currentMonth == 1) {
        dayFiveAgo = 31;
      } else if (currentMonth == 2) {
        dayFiveAgo = 28;
      } else if (currentMonth == 3) {
        dayFiveAgo = 31;
      } else if (currentMonth == 4) {
        dayFiveAgo = 30;
      } else if (currentMonth == 5) {
        dayFiveAgo = 31;
      } else if (currentMonth == 6) {
        dayFiveAgo = 30;
      } else if (currentMonth == 7) {
        dayFiveAgo = 31;
      } else if (currentMonth == 8) {
        dayFiveAgo = 31;
      } else if (currentMonth == 9) {
        dayFiveAgo = 30;
      } else if (currentMonth == 10) {
        dayFiveAgo = 31;
      } else if (currentMonth == 11) {
        dayFiveAgo = 30;
      } else if (currentMonth == 12) {
        dayFiveAgo = 31;
      }
    }

    let fiveAgoDate = `${currentMonth}-${dayFiveAgo}-${currentYear}`;

    // console.log(
    //   currentDate,
    //   yesterdayDate,
    //   beforeYesterdayDate,
    //   fourAgoDate,
    //   fiveAgoDate
    // );
    // CURRENT
    //
    await fetch(`dispensary_data/Dispensary-Scrape-${currentDate}.json`)
      .then((res) => res.json())
      .then((data) => {
        setDays(data);
      });
    console.log(currentDate, "Most Recent Data Date");
    // YESTERDAY
    await fetch(`dispensary_data/Dispensary-Scrape-${yesterdayDate}.json`)
      .then((res) => res.json())
      .then((data) => {
        setYesterday(data);
      });
    console.log(yesterdayDate);
    // DAY BEFORE YESTERDAY
    await fetch(`dispensary_data/Dispensary-Scrape-${beforeYesterdayDate}.json`)
      .then((res) => res.json())
      .then((data) => {
        setBeforeYesterday(data);
      });
    console.log(beforeYesterdayDate);
    // FOUR DAYS AGO
    await fetch(`dispensary_data/Dispensary-Scrape-${fourAgoDate}.json`)
      .then((res) => res.json())
      .then((data) => {
        setFourDaysAgo(data);
      });
    console.log(fourAgoDate);
    // FIVE DAYS AGO
    await fetch(`dispensary_data/Dispensary-Scrape-${fiveAgoDate}.json`)
      .then((res) => res.json())
      .then((data) => {
        setFiveDaysAgo(data);
      });
    console.log(fiveAgoDate);
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
