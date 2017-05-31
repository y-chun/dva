import dva from 'dva';
import {query} from '../ub';
import { routerRedux } from 'dva/router';
export default {
  namespace: 'products',
  state: {
    menu:'1'
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    dataRedu(state, { payload }){
      console.log(payload)
      return [{ name: 'antd', id: 2 }]
    }
  },
  effects:{
    *query({payload},{call,put}){
     const data =  yield call(query,payload);
      yield put({type:'dataRedu',payload:data})
     
        //  yield put(routerRedux.push('/Detail'))
      //  console.log(data)
      // console.log(data)
    }
  }
};