const avatar = document.getElementById("avatar");
const reviewerName = document.getElementById("name");
const job = document.getElementById("job");
const review = document.getElementById("review");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const nameInput = document.getElementById("submissionName");
const jobInput = document.getElementById("submissionJob");
const messageInput = document.getElementById("message");
const submitNew = document.getElementById("submitReview");
const submitMessage = document.getElementById("submitMessage");


var reviewNumber = 0;

var reviewsArray = [
    {avatar: "/avatars/blueman.png",name: "John Citizen", job: "Frontend Developer", review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."'},
    {avatar: "/avatars/greenwoman.jpeg",name: "Lauren Smith", job: "Marketing Consultant", review: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."'},
    {avatar: "/avatars/orangewoman.png",name: "Melissa Lastname", job: "Administration Assistant", review: '"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."'}
]

var randomAvatar = ["/avatars/bluewoman.png", "/avatars/greenman.jpeg", "/avatars/pinkwoman.png"]

document.addEventListener('click', function(){
    avatar.src = reviewsArray[reviewNumber].avatar;
    reviewerName.innerText = reviewsArray[reviewNumber].name;
    job.innerText = reviewsArray[reviewNumber].job;
    review.innerText = reviewsArray[reviewNumber].review;
    if(reviewNumber === 0){leftBtn.style.color = "grey";} else {leftBtn.style.color = "black";}
    if(reviewNumber === reviewsArray.length - 1){rightBtn.style.color = "grey"} else {rightBtn.style.color = "black";}
})

leftBtn.addEventListener("click", function(){
    if(reviewNumber > 0){
        reviewNumber = reviewNumber - 1;
    }
});

rightBtn.addEventListener("click", function(){
    if(reviewNumber < reviewsArray.length - 1){
        reviewNumber = reviewNumber + 1;
    }
});

submitNew.addEventListener('click', submitReview);

function submitReview(e) {
    e.preventDefault();
    if(nameInput.value != "" && jobInput.value != "" && messageInput.value != ""){
        var reviewObj = {
        avatar: randomAvatar[Math.floor(Math.random()*randomAvatar.length)], 
        name: nameInput.value, 
        job: jobInput.value, 
        review: messageInput.value
    };
    reviewsArray.push(reviewObj);
    nameInput.value = "";
    jobInput.value = "";
    messageInput.value = "";
    submitMessage.innerText = "Thank you for submitting";
    submitMessage.style.color = "green";
    } else {
        submitMessage.innerText = "Please enter all fields";
        submitMessage.style.color = "red";
    }
    
};