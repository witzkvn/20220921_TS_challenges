/**
 * In this challenge, you should compute a week planning split in 1 hour slots
 * and including existing events. To keep it simple, don't work with Dates!
 * Be carefull with leading 0!
 *
 * Example:
 * Input: [{ day: "Monday", startTime: "09:00", endTime: "11:00", name: "First work day!" }]
 * Output: [
 *     { day: "Monday", startTime: "00:00", "endTime": "01:00"},
 *     { day: "Monday", startTime: "01:00", "endTime": "02:00"},
 *     ...,
 *     { day: "Monday", startTime: "09:00", "endTime": "10:00", event: [Object] },
 *     { day: "Monday", startTime: "10:00", "endTime": "11:00", event: [Object] },
 *     { day: "Monday", startTime: "11:00", "endTime": "12:00" },
 *     ...,
 *     { day: "Sunday", startTime: "23:00", "endTime": "00:00" },
 * ]
 *
 * @param events List of event to add on the planning
 * @returns List of planning slots, from Monday 00:00 to Sunday 00:00, 1 hour each slot
 */

// ↓ uncomment bellow lines and add your response!

// ✅ DONE

export default function ({ events }: { events: Event[] }): PlanningSlot[] {
  const dayPlanning: PlanningSlot[] = [];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  days.forEach((day) => {
    for (let i = 0; i < 24; i++) {
      let planningSlot = {
        day: day,
        startTime: formattedHours(i),
        endTime: formattedHours(i + 1),
      };
      dayPlanning.push(planningSlot);
    }
  });

  events.forEach((ev) => {
    let planningStartIndex = dayPlanning.findIndex(
      (el) => ev.day === el.day && ev.startTime === el.startTime
    );
    let planningEndIndex = dayPlanning.findIndex(
      (el) => ev.day === el.day && ev.endTime === el.endTime
    );

    for (let index = planningStartIndex; index <= planningEndIndex; index++) {
      dayPlanning[index].event = ev;
    }
  });
  return dayPlanning;
}

const formattedHours = (hour: number): string => {
  if (hour < 10) {
    return `0${hour}:00`;
  } else if (hour === 24) {
    return `00:00`;
  } else {
    return `${hour}:00`;
  }
};

// used interfaces, do not touch
export interface Event {
  day: string;
  startTime: string;
  endTime: string;
  name: string;
}

export interface PlanningSlot {
  day: string;
  startTime: string;
  endTime: string;
  event?: Event;
}
