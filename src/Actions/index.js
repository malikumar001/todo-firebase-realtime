import firebase from '../config/firebase';
import { FETCH_TODOS } from "./types";

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


export const addToDo = (data) => dispatch => {
    debugger;
    const todoRef = db.collection("todos")
    todoRef.doc(`todo_${data.id}`).set({
        id: data.id,
        title: data.title,
        description: data.description,
        completed: false
    });
    debugger;

};


export const RemoveTodo = (id) => dispatch => {
    db.collection("todos").doc(`todo_${id}`).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
};



export const UpdateTodo = (data) => dispatch => {
        debugger;
    db.collection("todos").doc(`todo_${data.id}`).set({
        id: data.id,
        title: data.title,
        description: data.description,
        completed: !data.completed
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });


};






