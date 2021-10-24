import { walletsSelectors } from '../../redux/wallets'
import {useSelector} from 'react-redux';
import {Loader} from '../../components/Loader';

export default function Bills() {
  const isLoading = useSelector(walletsSelectors.getLoading);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <h1>Hello world!</h1>
      </div>
    </>
  );
}
