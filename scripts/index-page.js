
        // Initialize an array with default comment objects
        const commentsArray = [
            { name: "User1", timestamp: new Date(), text: "This is comment 1" },
            { name: "User2", timestamp: new Date(), text: "This is comment 2" },
            { name: "User3", timestamp: new Date(), text: "This is comment 3" }
        ];

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
