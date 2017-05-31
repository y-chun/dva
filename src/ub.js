import axios from 'axios'
export async function query(){
  return  axios.post('http://localhost:3000/indexMenu',{user:'21',id:'26'})
}