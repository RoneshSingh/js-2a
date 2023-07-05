import './App.css'

interface Student{
  name?: string | undefined ;
  age?: string | undefined;
  grade?: Array<Number> | undefined;

}
 function App() {
  const students: Student[]=[{name: 'Ann', age: '29', grade: [20,40,60]}, {name : 'Kri', age : '28', grade:[20, 40, 60]}, {name: 'Ary', age: '10', grade:[30,50, 60]}];

  function calculateAverageGrade(grades : any) {

    let sum = 0;

    grades.forEach((number:any )=>{sum += number});
    const average = sum/grades.length;
    return average

  }

  return (

    <>
    <h1>{students[0].name}, {students[0].age}, {calculateAverageGrade(students[0].grade)}</h1>
    <h1>{students[1].name}, {students[1].age}, {calculateAverageGrade(students[1].grade)}</h1>
    <h1>{students[2].name}, {students[2].age}, {calculateAverageGrade(students[2].grade)}</h1>

    </>
  )
}

export default App
