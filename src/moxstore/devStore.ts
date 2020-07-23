import {action, observable} from 'mobx';
// import { createContext } from 'react';  //只有在跟状态中需要使用
export default observable.object(
  {
    time: 0,
    changtime(val) {
      this.time = val;
    },
    increa(num: any) {
      this.changtime(this.time + num);
    },
    decreat(num: any) {
      this.changtime(this.time - num);
    },
    TestEnvTeamOKRData: [
      
    ]
  },
  {
    increa: action,
    decreat: action,
  },
);
