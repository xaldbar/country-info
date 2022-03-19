import { Info } from './Info';
import { useDetails } from './use-details';
import Loader from '../../UI/Loader/Loader'

const CountryDetails = ({name = '', navigate}) => {
  const {status, error, currentCountry} = useDetails(name);

  return (
    <>
      {status === 'loading' && <Loader/>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  )
}

export {CountryDetails};
