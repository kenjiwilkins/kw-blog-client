import { format, parseISO } from "date-fns";

export function dateFormatter(date: string) {
  return format(parseISO(date), "yyyy/MM/dd");
}

export function dateTimeFormatter(date: string) {
  return format(parseISO(date), "yyyy/MM/dd HH:mm");
}
