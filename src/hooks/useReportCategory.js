import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reportSelectors, reportOperation } from 'redux/report';

export const useReportCategory = ({ month, year }) => {
  const categoryList = useSelector(reportSelectors.getVisibleCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      reportOperation.getCategory({
        month,
        year,
      }),
    );
  }, [dispatch, month, year]);

  return { categoryList };
};
