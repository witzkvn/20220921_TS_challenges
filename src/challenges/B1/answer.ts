/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 *
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

// ✅ DONE

export default function ({
  events,
}: {
  events: EventDatetime[];
}): EventDatetime[] {
  const sortedEvents = events.sort((evA, evB) => {
    let diffTime =
      Date.parse(evA.startDatetime) - Date.parse(evB.startDatetime);
    if (diffTime) return diffTime;

    let evADuration =
      Date.parse(evA.endDatetime) - Date.parse(evA.startDatetime);
    let evBDuration =
      Date.parse(evB.endDatetime) - Date.parse(evB.startDatetime);

    if (evADuration < evBDuration) return -1;
    return 1;
  });
  return sortedEvents;
}

// used interfaces, do not touch
export interface EventDatetime {
  startDatetime: string;
  endDatetime: string;
  event: string;
}
