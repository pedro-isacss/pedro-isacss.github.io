import { useState } from "react";
import styles from "../styles/coins.module.css";

function ToolCoins() {
  const [chartView, setChartView] = useState(true);
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Search a coin..." />
      <div className={styles.coins}>
        <div className={styles.coin}>
          <div className={styles.infos}>
            <span>1 Bitcoin = R$2000,00</span>
            <select>
              <option value="">Dollar</option>
              <option value="">Real</option>
              <option value="">Dollar</option>
              <option value="">euro</option>
              <option value="">bitcoin</option>
            </select>
          </div>
          <div className={styles.chartcontrollers}>
            <div>
              <button>30d</button>
              <button>60d</button>
            </div>
            <button
              onClick={() => setChartView(!chartView)}
              className={styles.viewhiddechart}
            >
              {chartView ? "Hide the chart" : "Show the chart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolCoins;
