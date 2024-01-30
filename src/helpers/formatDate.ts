export const formatDate = (data: Date) => {
  const opt: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return data.toLocaleDateString("en-Us", opt);
};
