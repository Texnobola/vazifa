// baholarni harf sistemaga o'girish
// bla bla bla va boshqalar endi esa men GPA qilishni xohlayman

const students = [
    {
        id: 1,
        name: "Ali Valiyev",
        courses: [
            { subject: "Mathematics", score: 95 },
            { subject: "Physics", score: 88 },
            { subject: "Chemistry", score: 92 },
            { subject: "English", score: 85 }
        ]
    },
    {
        id: 2,
        name: "Hasan Hasanov",
        courses: [
            { subject: "Mathematics", score: 78 },
            { subject: "Physics", score: 82 },
            { subject: "Chemistry", score: 75 },
            { subject: "English", score: 80 }
        ]
    },
    {
        id: 3,
        name: "Karim Karimov",
        courses: [
            { subject: "Mathematics", score: 65 },
            { subject: "Physics", score: 58 },
            { subject: "Chemistry", score: 62 },
            { subject: "English", score: 55 }
        ]
    },
    {
        id: 4,
        name: "Sardor G'aniyev",
        courses: [
            { subject: "Mathematics", score: 100 },
            { subject: "Physics", score: 98 },
            { subject: "Chemistry", score: 96 },
            { subject: "English", score: 99 }
        ]
    }
];

// birinchi talaba
if (students[0].courses[0].score >= 90) {
    students[0].courses[0].letterGrade = 'A';
} else if (students[0].courses[0].score >= 80) {
    students[0].courses[0].letterGrade = 'B';
} else if (students[0].courses[0].score >= 70) {
    students[0].courses[0].letterGrade = 'C';
} else if (students[0].courses[0].score >= 60) {
    students[0].courses[0].letterGrade = 'D';
} else {
    students[0].courses[0].letterGrade = 'F';
}

if (students[0].courses[1].score >= 90) {
    students[0].courses[1].letterGrade = 'A';
} else if (students[0].courses[1].score >= 80) {
    students[0].courses[1].letterGrade = 'B';
} else if (students[0].courses[1].score >= 70) {
    students[0].courses[1].letterGrade = 'C';
} else if (students[0].courses[1].score >= 60) {
    students[0].courses[1].letterGrade = 'D';
} else {
    students[0].courses[1].letterGrade = 'F';
}

if (students[0].courses[2].score >= 90) {
    students[0].courses[2].letterGrade = 'A';
} else if (students[0].courses[2].score >= 80) {
    students[0].courses[2].letterGrade = 'B';
} else if (students[0].courses[2].score >= 70) {
    students[0].courses[2].letterGrade = 'C';
} else if (students[0].courses[2].score >= 60) {
    students[0].courses[2].letterGrade = 'D';
} else {
    students[0].courses[2].letterGrade = 'F';
}

if (students[0].courses[3].score >= 90) {
    students[0].courses[3].letterGrade = 'A';
} else if (students[0].courses[3].score >= 80) {
    students[0].courses[3].letterGrade = 'B';
} else if (students[0].courses[3].score >= 70) {
    students[0].courses[3].letterGrade = 'C';
} else if (students[0].courses[3].score >= 60) {
    students[0].courses[3].letterGrade = 'D';
} else {
    students[0].courses[3].letterGrade = 'F';
}

let sum1 = 0;
if (students[0].courses[0].letterGrade === 'A') sum1 = sum1 + 4;
if (students[0].courses[0].letterGrade === 'B') sum1 = sum1 + 3;
if (students[0].courses[0].letterGrade === 'C') sum1 = sum1 + 2;
if (students[0].courses[0].letterGrade === 'D') sum1 = sum1 + 1;

if (students[0].courses[1].letterGrade === 'A') sum1 = sum1 + 4;
if (students[0].courses[1].letterGrade === 'B') sum1 = sum1 + 3;
if (students[0].courses[1].letterGrade === 'C') sum1 = sum1 + 2;
if (students[0].courses[1].letterGrade === 'D') sum1 = sum1 + 1;

if (students[0].courses[2].letterGrade === 'A') sum1 = sum1 + 4;
if (students[0].courses[2].letterGrade === 'B') sum1 = sum1 + 3;
if (students[0].courses[2].letterGrade === 'C') sum1 = sum1 + 2;
if (students[0].courses[2].letterGrade === 'D') sum1 = sum1 + 1;

if (students[0].courses[3].letterGrade === 'A') sum1 = sum1 + 4;
if (students[0].courses[3].letterGrade === 'B') sum1 = sum1 + 3;
if (students[0].courses[3].letterGrade === 'C') sum1 = sum1 + 2;
if (students[0].courses[3].letterGrade === 'D') sum1 = sum1 + 1;

students[0].gpa = sum1 / 4;

// ikkinchi talaba
if (students[1].courses[0].score >= 90) {
    students[1].courses[0].letterGrade = 'A';
} else if (students[1].courses[0].score >= 80) {
    students[1].courses[0].letterGrade = 'B';
} else if (students[1].courses[0].score >= 70) {
    students[1].courses[0].letterGrade = 'C';
} else if (students[1].courses[0].score >= 60) {
    students[1].courses[0].letterGrade = 'D';
} else {
    students[1].courses[0].letterGrade = 'F';
}

if (students[1].courses[1].score >= 90) {
    students[1].courses[1].letterGrade = 'A';
} else if (students[1].courses[1].score >= 80) {
    students[1].courses[1].letterGrade = 'B';
} else if (students[1].courses[1].score >= 70) {
    students[1].courses[1].letterGrade = 'C';
} else if (students[1].courses[1].score >= 60) {
    students[1].courses[1].letterGrade = 'D';
} else {
    students[1].courses[1].letterGrade = 'F';
}

if (students[1].courses[2].score >= 90) {
    students[1].courses[2].letterGrade = 'A';
} else if (students[1].courses[2].score >= 80) {
    students[1].courses[2].letterGrade = 'B';
} else if (students[1].courses[2].score >= 70) {
    students[1].courses[2].letterGrade = 'C';
} else if (students[1].courses[2].score >= 60) {
    students[1].courses[2].letterGrade = 'D';
} else {
    students[1].courses[2].letterGrade = 'F';
}

if (students[1].courses[3].score >= 90) {
    students[1].courses[3].letterGrade = 'A';
} else if (students[1].courses[3].score >= 80) {
    students[1].courses[3].letterGrade = 'B';
} else if (students[1].courses[3].score >= 70) {
    students[1].courses[3].letterGrade = 'C';
} else if (students[1].courses[3].score >= 60) {
    students[1].courses[3].letterGrade = 'D';
} else {
    students[1].courses[3].letterGrade = 'F';
}

let sum2 = 0;
if (students[1].courses[0].letterGrade === 'A') sum2 = sum2 + 4;
if (students[1].courses[0].letterGrade === 'B') sum2 = sum2 + 3;
if (students[1].courses[0].letterGrade === 'C') sum2 = sum2 + 2;
if (students[1].courses[0].letterGrade === 'D') sum2 = sum2 + 1;

if (students[1].courses[1].letterGrade === 'A') sum2 = sum2 + 4;
if (students[1].courses[1].letterGrade === 'B') sum2 = sum2 + 3;
if (students[1].courses[1].letterGrade === 'C') sum2 = sum2 + 2;
if (students[1].courses[1].letterGrade === 'D') sum2 = sum2 + 1;

if (students[1].courses[2].letterGrade === 'A') sum2 = sum2 + 4;
if (students[1].courses[2].letterGrade === 'B') sum2 = sum2 + 3;
if (students[1].courses[2].letterGrade === 'C') sum2 = sum2 + 2;
if (students[1].courses[2].letterGrade === 'D') sum2 = sum2 + 1;

if (students[1].courses[3].letterGrade === 'A') sum2 = sum2 + 4;
if (students[1].courses[3].letterGrade === 'B') sum2 = sum2 + 3;
if (students[1].courses[3].letterGrade === 'C') sum2 = sum2 + 2;
if (students[1].courses[3].letterGrade === 'D') sum2 = sum2 + 1;

students[1].gpa = sum2 / 4;

// uchinchi talaba
if (students[2].courses[0].score >= 90) {
    students[2].courses[0].letterGrade = 'A';
} else if (students[2].courses[0].score >= 80) {
    students[2].courses[0].letterGrade = 'B';
} else if (students[2].courses[0].score >= 70) {
    students[2].courses[0].letterGrade = 'C';
} else if (students[2].courses[0].score >= 60) {
    students[2].courses[0].letterGrade = 'D';
} else {
    students[2].courses[0].letterGrade = 'F';
}

if (students[2].courses[1].score >= 90) {
    students[2].courses[1].letterGrade = 'A';
} else if (students[2].courses[1].score >= 80) {
    students[2].courses[1].letterGrade = 'B';
} else if (students[2].courses[1].score >= 70) {
    students[2].courses[1].letterGrade = 'C';
} else if (students[2].courses[1].score >= 60) {
    students[2].courses[1].letterGrade = 'D';
} else {
    students[2].courses[1].letterGrade = 'F';
}

if (students[2].courses[2].score >= 90) {
    students[2].courses[2].letterGrade = 'A';
} else if (students[2].courses[2].score >= 80) {
    students[2].courses[2].letterGrade = 'B';
} else if (students[2].courses[2].score >= 70) {
    students[2].courses[2].letterGrade = 'C';
} else if (students[2].courses[2].score >= 60) {
    students[2].courses[2].letterGrade = 'D';
} else {
    students[2].courses[2].letterGrade = 'F';
}

if (students[2].courses[3].score >= 90) {
    students[2].courses[3].letterGrade = 'A';
} else if (students[2].courses[3].score >= 80) {
    students[2].courses[3].letterGrade = 'B';
} else if (students[2].courses[3].score >= 70) {
    students[2].courses[3].letterGrade = 'C';
} else if (students[2].courses[3].score >= 60) {
    students[2].courses[3].letterGrade = 'D';
} else {
    students[2].courses[3].letterGrade = 'F';
}

let sum3 = 0;
if (students[2].courses[0].letterGrade === 'A') sum3 = sum3 + 4;
if (students[2].courses[0].letterGrade === 'B') sum3 = sum3 + 3;
if (students[2].courses[0].letterGrade === 'C') sum3 = sum3 + 2;
if (students[2].courses[0].letterGrade === 'D') sum3 = sum3 + 1;

if (students[2].courses[1].letterGrade === 'A') sum3 = sum3 + 4;
if (students[2].courses[1].letterGrade === 'B') sum3 = sum3 + 3;
if (students[2].courses[1].letterGrade === 'C') sum3 = sum3 + 2;
if (students[2].courses[1].letterGrade === 'D') sum3 = sum3 + 1;

if (students[2].courses[2].letterGrade === 'A') sum3 = sum3 + 4;
if (students[2].courses[2].letterGrade === 'B') sum3 = sum3 + 3;
if (students[2].courses[2].letterGrade === 'C') sum3 = sum3 + 2;
if (students[2].courses[2].letterGrade === 'D') sum3 = sum3 + 1;

if (students[2].courses[3].letterGrade === 'A') sum3 = sum3 + 4;
if (students[2].courses[3].letterGrade === 'B') sum3 = sum3 + 3;
if (students[2].courses[3].letterGrade === 'C') sum3 = sum3 + 2;
if (students[2].courses[3].letterGrade === 'D') sum3 = sum3 + 1;

students[2].gpa = sum3 / 4;

// to'rtinchi talaba
if (students[3].courses[0].score >= 90) {
    students[3].courses[0].letterGrade = 'A';
} else if (students[3].courses[0].score >= 80) {
    students[3].courses[0].letterGrade = 'B';
} else if (students[3].courses[0].score >= 70) {
    students[3].courses[0].letterGrade = 'C';
} else if (students[3].courses[0].score >= 60) {
    students[3].courses[0].letterGrade = 'D';
} else {
    students[3].courses[0].letterGrade = 'F';
}

if (students[3].courses[1].score >= 90) {
    students[3].courses[1].letterGrade = 'A';
} else if (students[3].courses[1].score >= 80) {
    students[3].courses[1].letterGrade = 'B';
} else if (students[3].courses[1].score >= 70) {
    students[3].courses[1].letterGrade = 'C';
} else if (students[3].courses[1].score >= 60) {
    students[3].courses[1].letterGrade = 'D';
} else {
    students[3].courses[1].letterGrade = 'F';
}

if (students[3].courses[2].score >= 90) {
    students[3].courses[2].letterGrade = 'A';
} else if (students[3].courses[2].score >= 80) {
    students[3].courses[2].letterGrade = 'B';
} else if (students[3].courses[2].score >= 70) {
    students[3].courses[2].letterGrade = 'C';
} else if (students[3].courses[2].score >= 60) {
    students[3].courses[2].letterGrade = 'D';
} else {
    students[3].courses[2].letterGrade = 'F';
}

if (students[3].courses[3].score >= 90) {
    students[3].courses[3].letterGrade = 'A';
} else if (students[3].courses[3].score >= 80) {
    students[3].courses[3].letterGrade = 'B';
} else if (students[3].courses[3].score >= 70) {
    students[3].courses[3].letterGrade = 'C';
} else if (students[3].courses[3].score >= 60) {
    students[3].courses[3].letterGrade = 'D';
} else {
    students[3].courses[3].letterGrade = 'F';
}

let sum4 = 0;
if (students[3].courses[0].letterGrade === 'A') sum4 = sum4 + 4;
if (students[3].courses[0].letterGrade === 'B') sum4 = sum4 + 3;
if (students[3].courses[0].letterGrade === 'C') sum4 = sum4 + 2;
if (students[3].courses[0].letterGrade === 'D') sum4 = sum4 + 1;

if (students[3].courses[1].letterGrade === 'A') sum4 = sum4 + 4;
if (students[3].courses[1].letterGrade === 'B') sum4 = sum4 + 3;
if (students[3].courses[1].letterGrade === 'C') sum4 = sum4 + 2;
if (students[3].courses[1].letterGrade === 'D') sum4 = sum4 + 1;

if (students[3].courses[2].letterGrade === 'A') sum4 = sum4 + 4;
if (students[3].courses[2].letterGrade === 'B') sum4 = sum4 + 3;
if (students[3].courses[2].letterGrade === 'C') sum4 = sum4 + 2;
if (students[3].courses[2].letterGrade === 'D') sum4 = sum4 + 1;

if (students[3].courses[3].letterGrade === 'A') sum4 = sum4 + 4;
if (students[3].courses[3].letterGrade === 'B') sum4 = sum4 + 3;
if (students[3].courses[3].letterGrade === 'C') sum4 = sum4 + 2;
if (students[3].courses[3].letterGrade === 'D') sum4 = sum4 + 1;

students[3].gpa = sum4 / 4;

console.log(students);