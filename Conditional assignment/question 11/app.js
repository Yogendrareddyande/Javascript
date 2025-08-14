// 11. An online exam system assigns grades based on percentage: 90% and above = 
// Grade A, 80–89% = Grade B, 70–79% = Grade C, 60–69% = Grade D, 50–59% = 
// Grade E, and below 50% = Fail. Additionally, if the student’s score is between 
// 45–49% and they are in the final year, they get a chance for re-evaluation. Implement 
// this grading logic using an else-if ladder. 

let percentage = 47;
let isFinalYear = true;

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else if (percentage >= 60) {
    console.log("Grade D");
} else if (percentage >= 50) {
    console.log("Grade E");
} else if (percentage >= 45 && isFinalYear) {
    console.log("Fail but eligible for re-evaluation");
} else {
    console.log("Fail");
}

//OUTPUT:
//Fail but eligible for re-evaluation

