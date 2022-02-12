import { useEffect, useState } from 'react';
import * as V from 'victory';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
} from 'victory';
import styles from './Schedule.module.scss';
function Schedule({ type, category }) {
  const [data, setData] = useState([
    { name: 'Свинина', sum: 3000 },
    { name: 'Говядина', sum: 500 },
    { name: 'Курица', sum: 1800 },
    { name: 'Рыба', sum: 2100 },
    { name: 'Панини', sum: 1800 },
    { name: 'Кофе', sum: 1700 },
    { name: 'Спагетти', sum: 1500 },
    { name: 'Шоколад', sum: 800 },
    { name: 'Маслины', sum: 500 },
    { name: 'Зелень', sum: 300 },
  ]);
  const [tick, setTick] = useState(data);
  console.log(category);
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
  //   if (type !== 'Расход') {
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
export default Schedule;
