
        // Initialize an array with default comment objects
        const commentsArray = [
            { name: "Connor Walton", timestamp: "02/17/2021", text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." },
            { name: "Emilie Beach", timestamp: "01/09/2021", text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." },
            { name: "Miles Acosta", timestamp: "12/20/2020", text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." }
        ];


        // const commentsList = document.querySelector('.comments__list');
        // const commentForm = document.querySelector('.comment__top--container');

        // function showComment(comment){
        //     const item = document.createElement('li');
        //     item.innerText = `${commentsArray.name} ${commentsArray.timestamp} ${commentsArray.text}`;
        //     commentsList.appendChild(item);
        // }

        // function clear(){
        //     commentsList.innerText = "";
        // }

        // function addText(event){
        //     event.preventDefault();

        //     const nameDiv = document.querySelector(".comment__1");
        //     const commentDiv = document.querySelector('.comment__2');

        //     const name = nameDiv.value;
        //     const commentText = commentDiv.value;
        //     const timestamp = new Date().toISOString();

        //     const newComment = { name, timestamp, text: commentText };
        //     commentsArray.push(newComment);

        //     // Clear input fields
        //     nameDiv.value = "";
        //     commentDiv.value = "";

        // }

        // commentForm.addEventListener("submit", addText);

        // comments.forEach(displayComment);

        // Function to display a comment on the page
        function displayComment(comment) {
            const commentsContainer = document.getElementById("comments");

            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");

            const nameElement = document.createElement("strong");
            nameElement.textContent = comment.name;

            const timestampElement = document.createElement("span");
            timestampElement.textContent = comment.timestamp.toLocaleString();

            const textElement = document.createElement("p");
            textElement.textContent = comment.text;

            commentDiv.appendChild(nameElement);
            commentDiv.appendChild(timestampElement);
            commentDiv.appendChild(textElement);

            commentsContainer.appendChild(commentDiv);
        }

        // Function to clear all comments from the page
        function clearComments() {
            const commentsContainer = document.getElementById("comments");
            commentsContainer.innerHTML = "";
        }

        // Function to re-render all comments from the comment array
        function renderComments() {
            clearComments();
            commentsArray.forEach(comment => {
                displayComment(comment);
            });
        }

        // Add event listener to the comment form
        const commentForm = document.getElementById("comment-form");
        commentForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nameInput = document.getElementById("name");
            const commentInput = document.getElementById("comment");

            const newName = nameInput.value;
            const newCommentText = commentInput.value;

            if (newName && newCommentText) {
                const newComment = {
                    name: newName,
                    timestamp: new Date(),
                    text: newCommentText
                };

                commentsArray.push(newComment);
                renderComments();

                // Clear input fields
                nameInput.value = "";
                commentInput.value = "";
            }
        });

        // Initial rendering of comments
        renderComments();
