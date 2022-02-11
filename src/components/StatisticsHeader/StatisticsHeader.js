
import s from './StatisticsHeader.module.scss';
import vector from '../../icons/Vector 1.png';
export function StatisticsHeader() {
 
    let profit = 450000;
    let costs = 180000;
  return (
    
          <div className={s.statistics}>
          <div className={s.container}>
               <div className={s.costs__item+ ' '+ s.statistic__item}>
              <h3 className={s.title }  >Расходы: </h3>
              
                  <div className={s.statistic__costs + ' ' + s.item} >
                  
                      <p className={s.costs}  > - {costs} грн.</p>
                  
                  </div>
                 
              </div>
               <img src={vector} alt="vector1" width="32" className={s.vector} />
              
                 <div className={s.profit__item + ' ' + s.statistic__item}>
              
                  <h3 className={s.title } >Доходы: </h3>
              
                  <div className={s.statistic__profit + ' ' + s.item} >
                        
                     <p className={s.profit}> + {profit} грн. </p>
                  
                  </div>
               </div>

          </div> 
             
      </div>
 
  );
}
