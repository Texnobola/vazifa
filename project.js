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

for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].courses.length; j++) {
        if (students[i].courses[j].score >= 90) students[i].courses[j].letterGrade = 'A';
        else if (students[i].courses[j].score >= 80) students[i].courses[j].letterGrade = 'B';
        else if (students[i].courses[j].score >= 70) students[i].courses[j].letterGrade = 'C';
        else if (students[i].courses[j].score >= 60) students[i].courses[j].letterGrade = 'D';
        else students[i].courses[j].letterGrade = 'F';
    }
    let sum = 0;
    for (let j = 0; j < students[i].courses.length; j++) {
        if (students[i].courses[j].letterGrade === 'A') sum += 4;
        else if (students[i].courses[j].letterGrade === 'B') sum += 3;
        else if (students[i].courses[j].letterGrade === 'C') sum += 2;
        else if (students[i].courses[j].letterGrade === 'D') sum += 1;
    }
    students[i].gpa = sum / students[i].courses.length;
}

console.log(students);