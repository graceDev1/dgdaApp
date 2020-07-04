import { combineReducers} from 'redux';
import posts from './regmt';
import auth from './auth';
import forums from './forum';

export default combineReducers({
    posts,
    auth,
    forums,
});