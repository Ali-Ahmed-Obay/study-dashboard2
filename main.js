// NavBar

// add images to navbar
let imageLink = ["https://cdn-icons-png.flaticon.com/512/609/609803.png",
    "https://cdn-icons-png.flaticon.com/512/7827/7827377.png",
    "https://cdn-icons-png.flaticon.com/512/6091/6091204.png",
    "https://cdn-icons-png.flaticon.com/512/3300/3300595.png",
    "https://cdn-icons-png.flaticon.com/512/921/921470.png",
    "https://cdn-icons-png.flaticon.com/512/2436/2436846.png",
    "https://cdn-icons-png.flaticon.com/512/5486/5486259.png"];

let headerImages = document.querySelectorAll(".navbar ul li img")

headerImages.forEach(function (ele,i) {
	ele.src = imageLink[i]
});

// Home Tab

let subjectTitles = document.querySelectorAll(".home .today .subj .title")
let subjects = []
let subjectImages = document.querySelectorAll(".home .today .subj img")
let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let imgages = []

const d = new Date();
let day = weekdays[d.getDay()];

if (d.getDay() == 0 || d.getDay() == 2 || d.getDay() == 4) {
    subjects[0] = "Scince"
    subjects[1] = "Social studies"
    imgages[0] = imageLink[5]
    imgages[1] = imageLink[4]
}else if (d.getDay() == 5){
    subjects = 0
}else{
    subjects[0] = "Arabic"
    subjects[1] = "Math"
    imgages[0]=imageLink[2]
    imgages[1]=imageLink[3]
}


subjectTitles.forEach(function (ele,i) {
    ele.textContent = subjects[i]
})

subjectImages.forEach(function (ele,i) {
    ele.src = imgages[i]
})

// Progress Section
let numDay = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

const endDate = new Date('11/1/2023');
const startDate =new Date(`${month}/${numDay}/${year}`);
const diffTime = Math.abs(startDate - endDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");

let remaining = document.querySelector(".progress .remaining span")
remaining.textContent = diffDays

let arabic = 14,
    math = 16,
    science = 8,
    socialStudies = 14,
    lessonsCompleted = 17,
    allLessons = 52,
    precentage = (lessonsCompleted / allLessons ) * 100
let completeingEle = document.querySelector(".complete span")
completeingEle.textContent = lessonsCompleted

let valuePrecnt = document.querySelector(".progress-bar .value")
valuePrecnt.textContent = precentage.toFixed(1) + "%"

let progress = document.querySelector(".progress-bar .percent .progress")
progress.style.width = `${precentage}%`

// subjects-prog
let allSubjects = [14,16,8,14]
let completedLessons = [1,1,1,14]

let subjectsProg = document.querySelectorAll(".subjects-prog .progress-bar .value")
let subjectsProgress = document.querySelectorAll(".subjects-prog .progress-bar .percent .progress")

for (let i = 0; i < subjectsProg.length; i++) {
    let precent = (completedLessons[i] / allSubjects[i]) * 100
    subjectsProg[i].textContent = precent.toFixed(1) + "%"
    subjectsProgress[i].style.width = `${precent}%`
}


// Active the li

let lis = document.querySelectorAll(".navbar ul li")

lis.forEach(function (ele) {

    ele.onclick = function () {
        lis.forEach(function (ele) {
        ele.classList.remove("active");
      });

      this.classList.add("active");
      
    };
});
