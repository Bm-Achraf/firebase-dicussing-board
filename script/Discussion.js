import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getTopic = async () => {
    try {
        
        const urlParams = new URLSearchParams(window.location.search)
        const param = urlParams.get('title');

        const DocRef = doc(db, 'TOPICS', param);
        const Snapshot = await getDoc(DocRef);

        if(Snapshot.exists())
        {
            document.getElementById('title').innerHTML = Snapshot.data().title
            document.getElementById('author').innerHTML = Snapshot.data().username
            document.getElementById('content').innerHTML = Snapshot.data().content
        }        

    } catch (error) {
        console.error('Error getting topics: ', error);
        throw error; // Propagate the error
    }
};getTopic()



document.getElementById('AddCommentForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = event.currentTarget["name"].value;
    const password = event.currentTarget["password"].value;
    const comment = event.currentTarget["comment"].value;

    const urlParams = new URLSearchParams(window.location.search)
    const param = urlParams.get('title');


    const userDocRef = doc(db, 'USERS', username);
    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists() && userSnapshot.data().password === password)
    {
        const DocRef = doc(db, `${param}-COMMENTS`, username);
        await setDoc(DocRef, {
            name: username,
            comment: comment,
        });
        alert('Comment added successfuly')
    }
    else
    {
        alert('Incorect password');
    }
});




const getAllComments = async () => {
    try {
        const comments = document.getElementById('comments')
        
        const urlParams = new URLSearchParams(window.location.search)
        const param = urlParams.get('title');

        const CommentCollection = await getDocs(collection(db, `${param}-COMMENTS`));

        CommentCollection.forEach((doc) => {
            const listItem = document.createElement('div');
            listItem.classList.add('comment')
            
            const author = document.createElement('p');
            author.classList.add('author')
            author.textContent = doc.data().name

            const content = document.createElement('p');
            content.classList.add('content')
            content.textContent = doc.data().comment

            listItem.appendChild(author);
            listItem.appendChild(content)
            comments.appendChild(listItem);
        });

    } catch (error) {
        console.error('Error getting topics: ', error);
        throw error; // Propagate the error
    }
};getAllComments()