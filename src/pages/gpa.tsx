import React, { useState } from 'react'

enum Grade {
    A = 'A',
    A_MINUS = 'A-',
    B_PLUS = 'B+',
    B = 'B',
    B_MINUS = 'B-',
    C_PLUS = 'C+',
    C = 'C',
    C_MINUS = 'C-',
    D_PLUS = 'D+',
    D = 'D',
    D_MINUS = 'D-',
    F = 'F'
}

const gradeToGpa = {
  [Grade.A]: 4.0,
  [Grade.A_MINUS]: 3.7,
  [Grade.B_PLUS]: 3.3,
  [Grade.B]: 3.0,
  [Grade.B_MINUS]: 2.7,
  [Grade.C_PLUS]: 2.3,
  [Grade.C]: 2.0,
  [Grade.C_MINUS]: 1.7,
  [Grade.D_PLUS]: 1.3,
  [Grade.D]: 1.0,
  [Grade.D_MINUS]: .7,
  [Grade.F]: 0
}

interface CourseGrade {
    name: string,
    credits: number,
    grade: Grade
}

export default function GpaPage() {
  const [courses, setCourses] = useState<CourseGrade[]>([]);
  const [gpa, setGpa] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [credits, setCredits] = useState<number>(0);
  const [grade, setGrade] = useState<Grade>(Grade.A);

  function addCourses() {
    const newCourse: CourseGrade = {
        name: name,
        credits: credits,
        grade: grade
    }
    courses.push(newCourse)
    setCourses(courses);
    console.log(`Adding ${newCourse.name}`);
    return;
  } 

  function calculateGrade() {
    console.log('calculating grade!');
    let gpaGradeSum = 0;
    let gpaCreditsSum = 0;
    courses.forEach(grade => {
      gpaGradeSum += (gradeToGpa[grade.grade] * grade.credits)
      gpaCreditsSum += grade.credits
    });
    setGpa(gpaGradeSum / gpaCreditsSum);
  } 

  return (
    <>
    <div>GPA calculator</div>
    {
        courses?.map((course, index) => (
            <li key={index}>{course.name} | {course.credits} | {course.grade}</li>
        ))
    }
    <div>
    <label htmlFor="">Name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <label htmlFor="">Credits</label>
    <input type="text" value={credits} onChange={(e) => setCredits(parseInt(e.target.value))} />
    <label htmlFor="">Grade</label>
    <select value={grade} onChange={(e) => setGrade(e.target.value as Grade)}>
        {Object.values(Grade).map((grade) => (
          <option key={grade} value={grade}>
            {grade}
          </option>
        ))}
      </select>
    <button onClick={addCourses}>Add course</button>
    </div>
    <h2>{gpa}</h2>
    <button onClick={calculateGrade}>Calculate GPA</button>
    </>
  )
}
