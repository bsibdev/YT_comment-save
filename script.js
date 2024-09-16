
const commentBox = document.querySelector("#placeholder-area")
const ytComment = document.querySelector("#contenteditable-root");

ytComment.addEventListener("click", function() {
    const submitButton = document.querySelector('#submit-button');
    if(submitButton) {
        submitButton.addEventListener("click", function() {
                    console.log(ytComment);
        })
    }
})