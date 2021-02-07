import { useState, useEffect } from "react";
import styles from "../styles/toolcoins.module.css";

interface Coin {
  code?: string;
  bid?: string;
}

function ToolCoins() {
  const [chartView, setChartView] = useState(false);
  const [currency, setCurrency] = useState("BRL");
  //Just to deploy
  setCurrency("BRL");
  const [coinsCode, setCoinsCode] = useState<string[]>([]);
  const [coins, setCoins] = useState<Object[]>([]);

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/json/all")
      .then((response) => response.json())
      .then((res) => {
        let data: Array<Object> = [];
        Object.keys(res).map((item) => {
          const prop = res[item];
          data.push(prop);
        });
        const codes: Array<string> = Object.keys(res);
        setCoinsCode(codes);
        setCoins(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.coins}>
        {coins.map((coin: Coin, index) => {
          return (
            <div className={styles.coin} key={`${coin.code}${index}`}>
              <div className={styles.infos}>
                <span>
                  1{coin.code} ={" "}
                  {coin.bid ? parseFloat(coin.bid).toFixed(2) : ""}
                  {currency}
                </span>
                <select>
                  {coinsCode.map((item) => {
                    return (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={styles.chartcontrollers}>
                {chartView ? (
                  <div>
                    <button>30d</button>
                    <button>60d</button>
                  </div>
                ) : (
                  <p></p>
                )}
                <button
                  onClick={() => setChartView(!chartView)}
                  className={styles.viewhiddechart}
                >
                  {chartView ? "Hide the chart" : "Show the chart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToolCoins;
