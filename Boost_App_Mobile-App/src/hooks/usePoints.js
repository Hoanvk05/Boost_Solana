import {useSelector} from 'react-redux';
export default function usePoints() {
  const points = useSelector(m => m.points.points);
  return [points];
}
