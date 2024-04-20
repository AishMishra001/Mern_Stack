import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo;
    },
  })
});


// selector family get is a function which returns a function which is a asyncronous function in which we respond with the data we get from the server 


// export const todoAtomFamily = atomFamily({
//   key : 'todoAtomFamily' , 
//   default : selectorFamily({
//     key: 'todoSelectorFamily' , 
//     get : function(id){
//       return async function({get}){
//          const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
//          return res.data.todo ; 
//       }
//     }
//   })
// }) ; 