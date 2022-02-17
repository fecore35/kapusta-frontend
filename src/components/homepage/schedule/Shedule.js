import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Media from 'react-media';
import ScheduleMobile from './ScheduleMobile.js';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
} from 'victory';
import styles from './Schedule.module.scss';
import { reportSelectors } from 'redux/report';

function Schedule({ type, currentCategory, month, year }) {
  const [data, setData] = useState([]);
  const [tick, setTick] = useState(data);
  const getData = async (category, month, year) => {
    if (month === undefined || !year || !category) {
      return setTick([]);
    }
    try {
      const data = await axios.get(
        `/transactions/description/${month}/${year}/${category}`,
      );
      return setTick(data.data.data.descriptionsSum);
    } catch (error) {
      return setTick([]);
    }
  };
  useEffect(() => {
    getData(currentCategory, month, year);
  }, [currentCategory, month, year]);

  const dataForSchedule = () =>
    tick
      .sort((a, b) => {
        return b.sum - a.sum;
      })
      .map(el => {
        return {
          quarter: el.name,
          earnings: Math.trunc(Number(el.sum)),
          label: el.sum + 'грн',
          fill: '#FF751D',
        };
      });
  return (
    <div className="section__inner">
      <Media query="(max-width: 768px)" render={() => <ScheduleMobile />} />
      <Media
        query="(min-width: 767.5px)"
        render={() => (
          <div className={styles.schedule}>
            <div className={styles.bg}>
              <VictoryChart
                theme={VictoryTheme.material}
                width={620}
                padding={{ left: 50, top: 60, bottom: 40, right: 60 }}
              >
                <VictoryAxis
                  style={{
                    axis: {
                      strokeWidth: 0,
                    },
                    grid: {
                      stroke: null,
                    },
                    ticks: {
                      size: null,
                    },
                  }}
                />
                <VictoryBar
                  cornerRadius={{ topLeft: 10, topRight: 10 }}
                  style={{
                    data: {
                      width: 30,
                      fill: ({ datum }) => datum.fill,
                    },
                  }}
                  data={dataForSchedule()}
                  x="quarter"
                  y="earnings"
                  labelComponent={
                    <VictoryLabel
                      style={[
                        {
                          fontFamily: 'Roboto',
                          fontSize: 10,
                          lineHeight: 14,
                          fill: '#52555F',
                        },
                      ]}
                    />
                  }
                />
              </VictoryChart>
            </div>
          </div>
        )}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    type: reportSelectors.getReportType(state),
    currentCategory: state.report.currentCategory,
    year: state.report.year,
    month: state.report.month,
  };
};

export default connect(mapStateToProps)(Schedule);
