/**
 * In this challenge, you have to split up a video in several successive segments
 * that can be either segments with notes or without.
 *
 * Successive = the end time of a segment must be the start time of the next one.
 * Also FYI, duration are in the format "HH:mm:ss" (hours, minutes, seconds)
 *
 * Example:
 * Input: {
 *      videoDuration: "01:33:12",
 *      notes: [
 *          { fromTime: "00:05:23", toTime: "00:15:10", note: "NodeJS presentation" },
 *          { fromTime: "00:26:12", toTime: "00:51:02", note: "Installation" },
 *          { fromTime: "00:51:02", toTime: "00:53:55", note: "Execution" },
 *          { fromTime: "01:01:48", toTime: "01:07:29", note: "Livereloading" },
 *          { fromTime: "00:16:12", toTime: "00:24:39", note: "NodeJS concepts" }
 *      ]
 * }
 * Ouput: [
 *      { fromTime: "00:00:00", toTime: "00:05:23" },
 *      { fromTime: "00:05:23", toTime: "00:15:10", note: "NodeJS presentation" },
 *      { fromTime: "00:15:10", toTime: "00:16:12" },
 *      { fromTime: "00:16:12", toTime: "00:24:39", note: "NodeJS concepts" },
 *      { fromTime: "00:24:39", toTime: "00:26:12" },
 *      { fromTime: "00:26:12", toTime: "00:51:02", note: "Installation" },
 *      { fromTime: "00:51:02", toTime: "00:53:55", note: "Execution" },
 *      { fromTime: "00:53:55", toTime: "01:01:48" },
 *      { fromTime: "01:01:48", toTime: "01:07:29", note: "Livereloading" }
 *      { fromTime: "01:07:29", toTime: "01:33:12" },
 * ]
 */

// ↓ uncomment bellow lines and add your response!

// ✅ DONE

// export default function ({ video }: { video: VideoWithNotes }): VideoSegment[] {
//   const sortedNotes = video.notes.sort(
//     (noteA, noteB) =>
//       strToDate(noteA.fromTime).getTime() - strToDate(noteB.fromTime).getTime()
//   );

//   const result: VideoSegment[] = [];
//   let nextStartDate = new Date(0);

//   for (let i = 0; i < sortedNotes.length; i++) {
//     let note = sortedNotes[i];
//     let noteStartDate = strToDate(note.fromTime);

//     if (noteStartDate.getTime() === nextStartDate.getTime()) {
//       // if start of new note === end of previous, no empty VideoSegment
//       console.log("HERE");
//       result.push({
//         fromTime: note.fromTime,
//         toTime: note.toTime,
//         note: note.note,
//       });
//       nextStartDate = strToDate(note.toTime);
//     } else {
//       // if start of new note !== end of previous, empty VideoSegment from finish of previous to start of new one + new VideoSegment
//       result.push({
//         fromTime: dateToStr(nextStartDate),
//         toTime: note.fromTime,
//       });
//       result.push({
//         fromTime: note.fromTime,
//         toTime: note.toTime,
//         note: note.note,
//       });

//       nextStartDate = strToDate(note.toTime);
//     }

//     if (i === sortedNotes.length - 1 && note.toTime !== video.videoDuration) {
//       // if last note and doesn't go to end of video, add last empty segment
//       result.push({
//         fromTime: dateToStr(nextStartDate),
//         toTime: video.videoDuration,
//       });
//     }
//   }

//   return result;
// }

const strToDate = (strTime: string): Date => {
  let [durHours, durMinutes, durSeconds] = strTime.split(":");
  let newDate = new Date(0);
  newDate.setUTCHours(parseInt(durHours));
  newDate.setUTCMinutes(parseInt(durMinutes));
  newDate.setUTCSeconds(parseInt(durSeconds));

  return newDate;
};

const dateToStr = (date: Date): string => {
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let seconds = date.getUTCSeconds();

  return `${hours > 9 ? hours : "0" + hours}:${
    minutes > 9 ? minutes : "0" + minutes
  }:${seconds > 9 ? seconds : "0" + seconds}`;
};

// used interfaces, do not touch
export interface VideoWithNotes {
  videoDuration: string;
  notes: { fromTime: string; toTime: string; note: string }[];
}

export interface VideoSegment {
  fromTime: string;
  toTime: string;
  note?: string;
}
