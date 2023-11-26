import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



/*
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



const getAllTopics = async () => {
    try {
        const topicList = document.getElementById('topicList')
        
        const topicsCollection = await getDocs(collection(db, 'TOPICS'));
        const topicTitles = [];

        topicsCollection.forEach((doc) => {
            
            const listItem = document.createElement('li');
            const topicLink = document.createElement('a');
            topicLink.href = `#${doc.id}`; // Replace with the appropriate link
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
*/