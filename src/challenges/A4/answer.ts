/**
 * In this challenge, you have to regroup messages into an array of day based on their
 * sentAt property.
 * You have to manipulate dates in vanillaJS. Be carefull to call, if needed, setUTCHours, setUTCMinutes, ...
 * instead of setHouts, setMinutes, ... to avoid timezone offsets!
 *
 * Example:
 * Input: [{ message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" }, { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" }, { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" }]
 * Output: [
 *      {
 *          day: "2020-11-17T00:00:00.000Z",
 *          messages: [
 *              { message: "Hi there", sentAt: "2020-11-17T10:38:01.021Z" },
 *              { message: "Hello", sentAt: "2020-11-17T11:45:01.721Z" },
 *          ]
 *      },
 *      {
 *          day: "2020-11-18T00:00:00.000Z",
 *          messages: [
 *              { message: "It's a new day", sentAt: "2020-11-18T10:38:01.021Z" },
 *          ]
 *      },
 * ]
 *
 * @param messages List of messages, unsorted and not grouped in days
 * @returns Sorted list of days (only days with messages!) with a list of sorted messages of the day
 */

// ↓ uncomment bellow lines and add your response!

// ✅ DONE

// export default function ({ messages }: { messages: Message[] }): DayMessages[] {
//   const response: DayMessages[] = [];
//   messages.forEach((msg) => {
//     let msgDate = new Date(msg.sentAt);
//     let year = msgDate.getUTCFullYear();
//     let month = msgDate.getUTCMonth();
//     let day = msgDate.getUTCDate();

//     let dayOfTheYear = new Date(Date.UTC(year, month, day)).toISOString();
//     console.log(year, month, day, dayOfTheYear);

//     if (!response.some((dayObj) => dayObj.day === dayOfTheYear)) {
//       response.push({
//         day: dayOfTheYear,
//         messages: [msg],
//       });
//     } else {
//       let dayIndex = response.findIndex((el) => el.day === dayOfTheYear);
//       response[dayIndex].messages.push(msg);
//     }
//   });

//   const sortedResponse = response.sort(
//     (dateA, dateB) => Date.parse(dateA.day) - Date.parse(dateB.day)
//   );

//   sortedResponse.forEach((element) => {
//     element.messages.sort(
//       (msgA, msgB) => Date.parse(msgA.sentAt) - Date.parse(msgB.sentAt)
//     );
//   });

//   return sortedResponse;
// }

// used interfaces, do not touch
export interface Message {
  author: string;
  sentAt: string;
  message: string;
}

export interface DayMessages {
  day: string;
  messages: Message[];
}
