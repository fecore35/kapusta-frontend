import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as V from 'victory';
import axios from 'axios'
import { currentThunk } from 'redux/asyncthunc';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
} from 'victory';
// import {store} from '../../../redux/store.js'
import styles from './Schedule.module.scss';
// import { reportSelectors } from 'redux/report';
// function Schedule({ type, category,err }) {
//   const [data, setData] = useState([]);
  const [tick, setTick] = useState(data);
  console.log(category);
  console.log(type)
  const dataForSchedule = () =>
    tick
      .sort((a, b) => {
        return b.sum - a.sum;
      })
      .map(el => {
        return {
          quarter: el.name,
          earnings: el.sum,
          label: el.sum,
          fill: '#FF751D',
        };
      });
  // console.log(dataForSchedule())

  // useEffect(() => {
  //   if (type) {
  //     return setTick([
  //       {
  //         name: 'Жены',
  //         sum: 20000,
  //       },
  //       {
  //         name: 'Моя',
  //         sum: 25000,
  //       },
  //     ]);
  //   }
  //   setTick(data);
  // }, [type]);
  useEffect(() => {
    console.log(
      'Изменили категорию - получаем новые данные с БД по выбранной категории и перерисовываем график',
    );
  }, [category]);

  return (
    <div className="section">
      <div className="container">
        <div className={styles.schedule}>
          <VictoryChart theme={VictoryTheme.material} width={620} padding={60}>
            <VictoryAxis
            // tickFormat={}
            />
            <VictoryBar
              cornerRadius={{topLeft:10,topRight:10}}
              style={{
                data: {
                  width: 36,
                  fill: ({ datum }) => datum.fill,
                },
              }}
              // data={[
              //     { quarter: "Свинина", earnings: 5000, label: "5000", fill: '#FF751D',},
              //     { quarter: "Говядина", earnings: 4500, label: "4500", fill:'#FFDAC0' },
              //     { quarter: "Курица", earnings: 3200, label: "3200" ,fill:'#FFDAC0'},
              //     { quarter: "Рыба", earnings: 2100, label: "2100", fill: '#FF751D' },
              //     { quarter: "Панини", earnings: 1800, label: "1800" ,fill:'#FFDAC0'},
              //     { quarter: "Кофе", earnings: 1700, label: "1700" ,fill:'#FFDAC0'},
              //     { quarter: "Спагетти", earnings: 1500, label: "1500", fill: '#FF751D' },
              //     { quarter: "Шоколад", earnings: 800, label: "800" ,fill:'#FFDAC0'},
              //     { quarter: "Маслины", earnings: 550, label: "550",fill:'#FFDAC0' },
              //     { quarter: "Зелень", earnings: 300, label: "300", fill: '#FF751D' },
              // ]}
              data={dataForSchedule()}
              // data accessor for x values
              x="quarter"
              // data accessor for y values
              y="earnings"
              labelComponent={
                <VictoryLabel
                  style={[
                    { fontFamily: 'Roboto', fontSize: 12, lineHeight: 14 },
                  ]}
                />
              }
            />
          </VictoryChart>
        </div>
      </div>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//    category:reportSelectors.getReportCategory(state),
//    type:reportSelectors.getReportType(state),
//    error: reportSelectors.getReportError(state)
//   }
// }
// export default connect(mapStateToProps, )(Schedule);
