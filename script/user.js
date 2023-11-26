import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('AddTopicForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = event.currentTarget["name"].value;
    const password = event.currentTarget["password"].value;
    const title = event.currentTarget["title"].value;
    const content = event.currentTarget["content"].value;

    // Get a reference to the specific user document
    const userDocRef = doc(db, 'USERS', username);

    try {
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot.exists() && userSnapshot.data().password === password) {
            // Add the topic to the "TOPICS" collection
            const newTopicRef = doc(db, "TOPICS", title);
            await setDoc(newTopicRef, {
                title: title,
                content: content,
                username: username
            });

            console.log('Topic added successfully!');
        } else {
            console.log('Invalid username or password.');
        }
    } catch (error) {
        console.error('Error adding topic: ', error);
    }
});