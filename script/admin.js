import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('AddUserForm').addEventListener('submit', async function(e){
    e.preventDefault();

    const username = e.currentTarget['username'].value
    const password = e.currentTarget['password'].value
    
    const newUserRef = doc(db, "USERS", username);

    await setDoc(newUserRef, {
        username: username,
        password: password
    })
    .then(() => {
        alert('User added successfully!');
    })
    .catch((error) => {
        alert('Error adding user: ', error);
    });
})