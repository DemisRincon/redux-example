import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ViewContainer from '../components/ViewContainer';
import {getFilms} from '../library/redux/actions/films';

export default connect(
  ({filmReducer:{films}}) => ({films}),
  dispatch => bindActionCreators({getFilms}, dispatch),
)(ViewContainer);
