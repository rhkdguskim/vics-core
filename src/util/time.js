import moment from "moment";

export const unix_to_date_time = (unix) => {
  const parsed = moment.unix(unix);
  return parsed.toDate();
};

export const date_time_to_unix = (date) => {
  const parsed = moment(date);
  const time = parsed.unix();
  return time;
};
