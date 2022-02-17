import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
} from 'victory';
import styles from './Schedule.module.scss';
import { reportSelectors } from 'redux/report';
function ScheduleMobile({ type, currentCategory, month, year }) {
  const [data, setData] = useState([]);
  const [tick, setTick] = useState(data);
  const getData = async (category, month, year) => {
    if (month !== undefined || !year || !category) {
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
        return a.sum - b.sum;
      })
      .map(el => {
        return {
          quarter: el.name,
          earnings: Number(el.sum),
          label: el.sum,
          fill: '#FF751D',
        };
      });
  return (
    <div className="section">
      {
        <div className={styles.schedule}>
          <VictoryChart theme={VictoryTheme.material} width={282} padding={70}>
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
              horizontal
              cornerRadius={{ topLeft: 5, topRight: 5 }}
              style={{
                data: {
                  width: 15,
                  fill: ({ datum }) => datum.fill,
                },
              }}
              data={dataForSchedule()}
              // data accessor for x values
              x="quarter"
              // data accessor for y values
              y="earnings"
              labelComponent={
                <VictoryLabel
                  dy={-13}
                  dx={1}
                  style={[
                    {
                      fontFamily: 'Roboto',
                      fontSize: 10,
                      lineHeight: 12,
                      fill: '#52555F',
                    },
                  ]}
                />
              }
            />
          </VictoryChart>
        </div>
      }
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
export default connect(mapStateToProps)(ScheduleMobile);
