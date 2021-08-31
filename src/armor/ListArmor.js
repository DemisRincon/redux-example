import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../components/List';
import { saveFilms } from '../library/redux/actions/films';

export default connect(
  ({filmReducer: {films}}) => ({films}),
  (dispatch) => bindActionCreators({saveFilms},dispatch),
)(List);
