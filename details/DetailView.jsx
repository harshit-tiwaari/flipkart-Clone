//we have to call redux data as we open our detailed view component.so we use UseEffect.
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction';

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); //In our React app sometimes we want to access the parameters of the current route in this case useParams hook comes into action. The react-router-dom package has useParams hooks that let you access the parameters of the current route. {url} me se variable ko nikalne ka kaam
  useEffect(() => {
    dispatch(getProductDetails(id))
  },[dispatch,id])

  return (
    <div>Hello</div>

  )
}
export default DetailView
//now we want to open a new page with same details so we have to import router dom library 