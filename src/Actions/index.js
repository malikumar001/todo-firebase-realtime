import firebase from '../config/firebase';

import { FETCH_TODOS } from "./types";
import _ from 'lodash';


const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});


export const fetchTodos = () => dispatch => {
    const array1 = [];

   
    db.collection("todos").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            const data = doc.data()
            array1.push(data)
        });
        dispatch({ type: FETCH_TODOS, payload: array1 })
    });
}

export const addToDo = (data, id) => async dispatch => {


    const todoRef = db.collection("todos")


    todoRef.doc(`todo_${id}`).set({
        id,
        title: data.title,
        description: data.description
    });

};

// export const completeToDo = completeToDoId => async dispatch => {
//   todosRef.child(completeToDoId).remove();
// };

// export const fetchToDos = () => async dispatch => {
//   todosRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_TODOS,
//       payload: snapshot.val()
//     });
//   });
// };