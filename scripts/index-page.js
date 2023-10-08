
        // Initialize an array with default comment objects
        const commentsArray = [
            { name: "Connor Walton", timestamp: "02/17/2021", text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." },
            { name: "Emilie Beach", timestamp: "01/09/2021", text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." },
            { name: "Miles Acosta", timestamp: "12/20/2020", text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." }
        ];

        function displayComment(comment) {

            const commentsContainer = document.querySelector(".comment__list");

            commentsArray.forEach((i) => {
                const pDiv = document.createElement('div');
                pDiv.classList.add("comment__div");
                const pDiv2 = document.createElement('div');
                pDiv2.classList.add("comment__div2");
                const pTag = document.createElement('p');
                pTag.textContent = i.name;
                pTag.classList.add("comment__pTag");
                // commentsContainer.appendChild(pTag);
                const pTag2 = document.createElement('p');
                pTag2.textContent = i.timestamp;
                pTag2.classList.add("comment__pTag2");
                const pTag3 = document.createElement('p');
                pTag3.textContent = i.text;
                pTag3.classList.add("comment__pTag3");
                const img = document.createElement('img');
                img.classList.add("comment__img");
                pDiv.appendChild(img);
                pDiv.appendChild(pTag);
                pDiv.appendChild(pTag2);
                pDiv2.appendChild(pTag3);
                commentsContainer.appendChild(pDiv);
                commentsContainer.appendChild(pDiv2);


                // commentsContainer.appendChild(pTag2);

            })
        }

        displayComment();

        // Function to clear all comments from the page
        function clearComments() {
            const commentsContainer = document.querySelector("comment__list");
            commentsContainer.innerHTML = "";
        }

        clearComments();

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
