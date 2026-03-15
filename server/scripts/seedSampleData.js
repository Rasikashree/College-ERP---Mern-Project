import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import Department from "../models/department.js";
import Subject from "../models/subject.js";
import Faculty from "../models/faculty.js";
import Student from "../models/student.js";

dotenv.config();

const departments = [
  { department: "Computer Science Engineering", departmentCode: "CSE" },
  { department: "Electronics and Communication", departmentCode: "ECE" },
  { department: "Mechanical Engineering", departmentCode: "ME" },
  { department: "Civil Engineering", departmentCode: "CE" },
  { department: "Information Technology", departmentCode: "IT" },
];

const subjects = [
  { subjectName: "Programming Fundamentals", subjectCode: "CSE101", department: "Computer Science Engineering", year: "1" },
  { subjectName: "Data Structures", subjectCode: "CSE201", department: "Computer Science Engineering", year: "2" },
  { subjectName: "Basic Electronics", subjectCode: "ECE101", department: "Electronics and Communication", year: "1" },
  { subjectName: "Signals and Systems", subjectCode: "ECE201", department: "Electronics and Communication", year: "2" },
  { subjectName: "Engineering Mechanics", subjectCode: "ME101", department: "Mechanical Engineering", year: "1" },
  { subjectName: "Thermodynamics", subjectCode: "ME201", department: "Mechanical Engineering", year: "2" },
  { subjectName: "Surveying", subjectCode: "CE101", department: "Civil Engineering", year: "1" },
  { subjectName: "Strength of Materials", subjectCode: "CE201", department: "Civil Engineering", year: "2" },
  { subjectName: "Web Technology", subjectCode: "IT101", department: "Information Technology", year: "1" },
  { subjectName: "Database Management", subjectCode: "IT201", department: "Information Technology", year: "2" },
];

const facultySeed = [
  { name: "Anita Rao", email: "anita.rao@collegeerp.com", username: "FAC2026CSE001", dob: "1990-05-10", department: "Computer Science Engineering", designation: "Assistant Professor", joiningYear: 2020, contactNumber: 9876500001, gender: "Female" },
  { name: "Vikram Nair", email: "vikram.nair@collegeerp.com", username: "FAC2026ECE001", dob: "1989-08-18", department: "Electronics and Communication", designation: "Associate Professor", joiningYear: 2018, contactNumber: 9876500002, gender: "Male" },
  { name: "Suresh Kumar", email: "suresh.kumar@collegeerp.com", username: "FAC2026ME001", dob: "1988-02-26", department: "Mechanical Engineering", designation: "Assistant Professor", joiningYear: 2019, contactNumber: 9876500003, gender: "Male" },
  { name: "Priya Menon", email: "priya.menon@collegeerp.com", username: "FAC2026CE001", dob: "1991-11-04", department: "Civil Engineering", designation: "Assistant Professor", joiningYear: 2021, contactNumber: 9876500004, gender: "Female" },
  { name: "Rahul Das", email: "rahul.das@collegeerp.com", username: "FAC2026IT001", dob: "1992-01-14", department: "Information Technology", designation: "Lecturer", joiningYear: 2022, contactNumber: 9876500005, gender: "Male" },
];

const studentSeed = [
  { name: "Aarav Sharma", email: "aarav.sharma@collegeerp.com", username: "STU2026CSE001", dob: "2006-01-15", department: "Computer Science Engineering", year: 1, section: "1", batch: "2026", contactNumber: 9876510001, fatherName: "Raj Sharma", motherName: "Nita Sharma", fatherContactNumber: 9876511001, gender: "Male" },
  { name: "Diya Verma", email: "diya.verma@collegeerp.com", username: "STU2026CSE002", dob: "2006-03-09", department: "Computer Science Engineering", year: 1, section: "NA", batch: "2026", contactNumber: 9876510002, fatherName: "Amit Verma", motherName: "Sana Verma", fatherContactNumber: 9876511002, gender: "Female" },
  { name: "Kiran Reddy", email: "kiran.reddy@collegeerp.com", username: "STU2026ECE001", dob: "2005-12-05", department: "Electronics and Communication", year: 1, section: "2", batch: "2026", contactNumber: 9876510003, fatherName: "Ravi Reddy", motherName: "Latha Reddy", fatherContactNumber: 9876511003, gender: "Male" },
  { name: "Meera Iyer", email: "meera.iyer@collegeerp.com", username: "STU2026ECE002", dob: "2006-06-22", department: "Electronics and Communication", year: 1, section: "NA", batch: "2026", contactNumber: 9876510004, fatherName: "Ganesh Iyer", motherName: "Uma Iyer", fatherContactNumber: 9876511004, gender: "Female" },
  { name: "Naveen Paul", email: "naveen.paul@collegeerp.com", username: "STU2026ME001", dob: "2005-09-30", department: "Mechanical Engineering", year: 1, section: "3", batch: "2026", contactNumber: 9876510005, fatherName: "Thomas Paul", motherName: "Rekha Paul", fatherContactNumber: 9876511005, gender: "Male" },
  { name: "Pooja Singh", email: "pooja.singh@collegeerp.com", username: "STU2026ME002", dob: "2006-02-11", department: "Mechanical Engineering", year: 1, section: "NA", batch: "2026", contactNumber: 9876510006, fatherName: "Ramesh Singh", motherName: "Anita Singh", fatherContactNumber: 9876511006, gender: "Female" },
  { name: "Rohan Patel", email: "rohan.patel@collegeerp.com", username: "STU2026CE001", dob: "2006-05-03", department: "Civil Engineering", year: 1, section: "1", batch: "2026", contactNumber: 9876510007, fatherName: "Mahesh Patel", motherName: "Seema Patel", fatherContactNumber: 9876511007, gender: "Male" },
  { name: "Sneha Joshi", email: "sneha.joshi@collegeerp.com", username: "STU2026CE002", dob: "2006-10-19", department: "Civil Engineering", year: 1, section: "NA", batch: "2026", contactNumber: 9876510008, fatherName: "Dinesh Joshi", motherName: "Rekha Joshi", fatherContactNumber: 9876511008, gender: "Female" },
  { name: "Tanvi Kulkarni", email: "tanvi.kulkarni@collegeerp.com", username: "STU2026IT001", dob: "2005-08-08", department: "Information Technology", year: 1, section: "2", batch: "2026", contactNumber: 9876510009, fatherName: "Prakash Kulkarni", motherName: "Mina Kulkarni", fatherContactNumber: 9876511009, gender: "Female" },
  { name: "Yash Gupta", email: "yash.gupta@collegeerp.com", username: "STU2026IT002", dob: "2006-07-28", department: "Information Technology", year: 1, section: "NA", batch: "2026", contactNumber: 9876510010, fatherName: "Sanjay Gupta", motherName: "Neha Gupta", fatherContactNumber: 9876511010, gender: "Male" },
];

const toDefaultPassword = (dob) => dob.split("-").reverse().join("-");

const main = async () => {
  if (!process.env.CONNECTION_URL) {
    throw new Error("CONNECTION_URL is missing in environment variables.");
  }

  await mongoose.connect(process.env.CONNECTION_URL);

  const stats = {
    departmentsInserted: 0,
    departmentsSkipped: 0,
    subjectsInserted: 0,
    subjectsSkipped: 0,
    facultyInserted: 0,
    facultySkipped: 0,
    studentsInserted: 0,
    studentsSkipped: 0,
  };

  for (const dep of departments) {
    const existing = await Department.findOne({ departmentCode: dep.departmentCode });
    if (existing) {
      stats.departmentsSkipped += 1;
    } else {
      await Department.create(dep);
      stats.departmentsInserted += 1;
    }
  }

  for (const sub of subjects) {
    const existing = await Subject.findOne({ subjectCode: sub.subjectCode });
    if (existing) {
      stats.subjectsSkipped += 1;
    } else {
      await Subject.create(sub);
      stats.subjectsInserted += 1;
    }
  }

  for (const fac of facultySeed) {
    const existing = await Faculty.findOne({ email: fac.email });
    if (existing) {
      stats.facultySkipped += 1;
      continue;
    }

    const hashedPassword = await bcrypt.hash(toDefaultPassword(fac.dob), 10);
    await Faculty.create({
      ...fac,
      password: hashedPassword,
      passwordUpdated: false,
      avatar: "",
    });
    stats.facultyInserted += 1;
  }

  for (const stu of studentSeed) {
    const existing = await Student.findOne({ email: stu.email });
    if (existing) {
      stats.studentsSkipped += 1;
      continue;
    }

    const studentSubjects = await Subject.find({
      department: stu.department,
      year: String(stu.year),
    }).select("_id");

    const hashedPassword = await bcrypt.hash(toDefaultPassword(stu.dob), 10);
    await Student.create({
      ...stu,
      password: hashedPassword,
      motherContactNumber: stu.fatherContactNumber,
      passwordUpdated: false,
      avatar: "",
      subjects: studentSubjects.map((s) => s._id),
    });
    stats.studentsInserted += 1;
  }

  console.log("Seed completed successfully.");
  console.table(stats);
  console.log("Default password pattern for seeded faculty/students: dd-mm-yyyy (from DOB)");
};

main()
  .catch((error) => {
    console.error("Seed failed:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
