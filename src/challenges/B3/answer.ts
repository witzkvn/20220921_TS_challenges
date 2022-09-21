/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common.
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 *
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */

// ↓ uncomment bellow lines and add your response!

// ✅ DONE

// export default function ({
//   groups,
// }: {
//   groups: GroupWithSills[];
// }): GroupWithSillsAndClosestGroups[] {
//   let groupsCopy: GroupWithSillsAndClosestGroups[] = [];
//   for (let i = 0; i < groups.length; i++) {
//     let lastBestMatchCount = 0;
//     let bestMatchingGroups: GroupWithSills[] = [];

//     for (let j = 0; j < groups.length; j++) {
//       if (i === j) continue;
//       let matchingCount = 0;

//       groups[i].skills.forEach((skill) => {
//         if (groups[j].skills.some((s) => s === skill)) {
//           matchingCount++;
//         }
//       });

//       if (matchingCount > lastBestMatchCount) {
//         bestMatchingGroups = [groups[j]];
//         lastBestMatchCount = matchingCount;
//       } else if (matchingCount === lastBestMatchCount) {
//         bestMatchingGroups = [...bestMatchingGroups, groups[j]];
//       }
//     }
//     groupsCopy[i] = {
//       ...groups[i],
//       closestGroups: bestMatchingGroups,
//     };
//   }
//   return groupsCopy;
// }

// used interfaces, do not touch
export interface GroupWithSills {
  name: string;
  skills: string[];
}

export interface GroupWithSillsAndClosestGroups extends GroupWithSills {
  closestGroups: GroupWithSills[];
}
