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

interface CourseGrade {
    name: string,
    credits: number,
    grade: Grade
}

export default function GpaPage() {
  const [courses, setCourses] = useState<CourseGrade[]>([]);
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
    // TODO
    console.log('calculating grade!');
    return;
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
    {/* <button onClick={calculateGrade}>Calculate GPA</button> */}
    </>
  )
}
