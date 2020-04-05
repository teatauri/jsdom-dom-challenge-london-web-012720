document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded and parsed");

    const timer = setInterval(timedCounter, 1000);
    const minusButton = document.querySelector("#minus");
    const plusButton = document.querySelector("#plus");
    const pauseButton = document.querySelector("#pause");
    const likeButton = document.querySelector("#heart");
    const likesUl = document.querySelector(".likes");

    timedCounter();
    eventListeners();
    count = {};
    likesArray = [];

    function returnCounter() {
        const counter = document.querySelector("#counter"); 
        return counter;
    }

    function timedCounter() {
        returnCounter
        counter.innerText++
    };

    function eventListeners() {

        minusButton.addEventListener("click", () => {
            returnCounter
            counter.innerText -= 1;
        })

        plusButton.addEventListener("click", () => {
            returnCounter
            counter.innerText++;
        })

        likeButton.addEventListener("click", () => {
            returnCounter
            let i = parseInt(counter.innerText)
            likesArray.push(i)

            const likesLi = document.createElement("li");
            count = {};
            likesArray.forEach(num => count[num] = (count[num] || 0) +1);
                likesLi.innerText = `${counter.innerText} has been liked ${count[i]} times`;
            likesUl.append(likesLi);
        })

        // pauseButton.addEventListener("click", {
        // })
    }

 })