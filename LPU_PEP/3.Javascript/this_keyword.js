function printStudentInfo() {
    console.log(`Student Record -> Name: ${this.name}, Roll No: ${this.rollNo}, Class: ${this.class}, Section: ${this.section}`);
}

function Student(name, rollNo, studentClass, section) {
    this.name = name;
    this.rollNo = rollNo;
    this.class = studentClass;
    this.section = section;
}

const studentList = [
    new Student("Harsh", 101, "XII", "A"),
    new Student("Anjali", 102, "XII", "B"),
    new Student("Rohan", 103, "XI", "A")
];

console.log("--- 1. Using .call() to invoke a function on array elements ---");

studentList.forEach(function (student) {
    printStudentInfo.call(student);
});

console.log("\n--- 2. Using Object.create() ---");

const studentPrototype = {
    details: function () {
        return `[Prototype Method] ${this.name} is in Class ${this.class}-${this.section}`;
    }
};

const specialStudent = Object.create(studentPrototype);
specialStudent.name = "Vikram";
specialStudent.rollNo = 105;
specialStudent.class = "X";
specialStudent.section = "D";

console.log(specialStudent.details());
printStudentInfo.call(specialStudent);


console.log("\n--- 3. 'this' referring to an object holding an array ---");

const schoolRegister = {
    schoolName: "LPU High",
    records: studentList,

    showAll: function () {
        console.log(`Listing all students for ${this.schoolName}:`);
        this.records.forEach((stu, index) => {
            console.log(`${index + 1}. ${stu.name} (Roll: ${stu.rollNo})`);
        });
    }
};

schoolRegister.showAll();
