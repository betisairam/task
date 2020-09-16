import { combineReducers } from "redux";
import formReducer from "../Form/formReducer";

export default combineReducers({
    form: formReducer
});
