/**
 * @file 根 store
 */
import testStore from '../testStore';
import okrStore from '../okrStore';
import devStore from '../devStore';
// import indexStore from './indexStore';
// import newBuiltStore from './newBuiltStore';
// import detailStore from './detailStore';
// import calendarStore from './calendarStore';
import {createContext} from "react";

const RootStoreContext = createContext({
  testStore,
  okrStore,
  devStore,
    // detailStore,
    // newBuiltStore,
    // calendarStore,
    isWin: /windows/i.test(window.navigator.userAgent)
});
export default RootStoreContext;
