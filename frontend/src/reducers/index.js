import { combineReducers} from 'redux';
import posts from './regmt';
import auth from './auth';

export default combineReducers({
    posts,
    auth,
});