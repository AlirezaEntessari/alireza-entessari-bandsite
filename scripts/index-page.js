import { BandSiteAPI } from "./band-site-api.js";

const apiKey = "110f646d-4cb5-453e-b789-72df9c4caed0";

const myBandSiteAPI = new BandSiteAPI(apiKey);

console.log(myBandSiteAPI.getComments());

const getReturn = async () => {
  const commentsArray = await myBandSiteAPI.getComments();
  renderComments(commentsArray);
  console.log(commentsArray);
};

getReturn();

function displayComment(comment) {
  const commentsContainer = document.querySelector(".comment__list");

  const pDiv = document.createElement("div");
  pDiv.classList.add("comment__div");
  const pDiv2 = document.createElement("div");
  pDiv2.classList.add("comment__div2");
  const pTag = document.createElement("p");
  pTag.textContent = comment.name;
  pTag.classList.add("comment__pTag");
  const pTag2 = document.createElement("p");
  const newDate = new Date(comment.timestamp);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  pTag2.textContent = `${month}/${day}/${year}`;
  pTag2.classList.add("comment__pTag2");
  const pTag3 = document.createElement("p");
  pTag3.textContent = comment.comment;
  pTag3.classList.add("comment__pTag3");
  const img = document.createElement("img");
  img.classList.add("comment__img");
  pDiv.appendChild(img);
  pDiv.appendChild(pTag);
  pDiv.appendChild(pTag2);
  pDiv2.appendChild(pTag3);
  commentsContainer.appendChild(pDiv);
  commentsContainer.appendChild(pDiv2);
}


// Function to clear all comments from the page
function clearComments() {
  const commentsContainer = document.querySelector(".comment__list");
  commentsContainer.innerHTML = "";
}

// clearComments();

// Function to re-render all comments from the comment array
function renderComments(commentsArray) {
  clearComments();
  commentsArray.forEach((comment) => {
    displayComment(comment);
  });
}

// Add event listener to the comment form
const commentForm = document.querySelector(".comment__form");
commentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.querySelector(".comment__top--name-input");
  const commentInput = document.querySelector(".comment__bottom--textarea");

  const newName = nameInput.value;
  const newCommentText = commentInput.value;

  if (newName && newCommentText) {
    const newComment = {
      name: newName,
      comment: newCommentText,
    };

    const postComment = async () => {
        const newCommentsArray = myBandSiteAPI.postComment(newComment);
        console.log(newCommentsArray);
        renderComments(newCommentsArray);
     
    }

    postComment();

       // Clear input fields
       nameInput.value = "";
       commentInput.value = "";
    
  }
});


