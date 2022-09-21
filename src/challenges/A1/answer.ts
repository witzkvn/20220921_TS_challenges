/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 *
 * @param students Unsorted list of students
 * @returns Sorted list of students
 */

// ↓ uncomment bellow lines and add your response!

// ✅ DONE

// export default function ({ students }: { students: Student[] }): Student[] {
//   const studentsCopy = [...students];
//   // sort : a - b < 0 : a first; a - b > 0 : b first; if = 0 : continue comparison
//   studentsCopy.sort((a, b) => {
//     let diffAge = a.age - b.age;
//     if (diffAge) return diffAge;

//     // if tie, compare name
//     return a.name.localeCompare(b.name);
//   });

//   return studentsCopy;
// }

// used interfaces, do not touch
export interface Student {
  name: string;
  age: number;
  skills: string[];
}
