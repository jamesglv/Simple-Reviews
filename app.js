const avatar = document.getElementById("avatar");
const reviewerName = document.getElementById("name");
const job = document.getElementById("job");
const review = document.getElementById("review");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

var reviewNumber = 0;

var reviewsArray = [
    {avatar: "/avatars/blueman.png",name: "John Citizen", job: "Frontend Developer", review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."'},
    {avatar: "/avatars/greenwoman.jpeg",name: "Lauren Smith", job: "Marketing Consultant", review: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."'},
    {avatar: "/avatars/orangewoman.png",name: "Melissa Lastname", job: "Administration Assistant", review: '"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."'}
]

document.addEventListener('click', function(){
    avatar.src = reviewsArray[reviewNumber].avatar;
    reviewerName.innerText = reviewsArray[reviewNumber].name;
    job.innerText = reviewsArray[reviewNumber].job;
    review.innerText = reviewsArray[reviewNumber].review;
    if(reviewNumber === 0){leftBtn.style.color = "grey";} else {leftBtn.style.color = "black";}
    if(reviewNumber === 2){rightBtn.style.color = "grey"} else {rightBtn.style.color = "black";}
})

leftBtn.addEventListener("click", function(){
    if(reviewNumber > 0){
        reviewNumber = reviewNumber - 1;
    }
});

rightBtn.addEventListener("click", function(){
    if(reviewNumber < 2){
        reviewNumber = reviewNumber + 1;
    }
});

