import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const getAllTopics = async () => {
    try {
        const topicList = document.getElementById('topicList')
        
        const topicsCollection = await getDocs(collection(db, 'TOPICS'));
        const topicTitles = [];

        topicsCollection.forEach((doc) => {
            
            const listItem = document.createElement('li');
            const topicLink = document.createElement('a');
            topicLink.href = `Discussion.html?title=${doc.id}`; // Replace with the appropriate link
            topicLink.classList.add('topic-link');
            topicLink.textContent = doc.id;
            listItem.appendChild(topicLink);
            topicList.appendChild(listItem);
        });

        console.log(topicTitles);
    } catch (error) {
        console.error('Error getting topics: ', error);
        throw error; // Propagate the error
    }
};getAllTopics()