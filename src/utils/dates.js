import moment from "moment";

export const latestUpdateDate = (postDate) => {

  return (
    <time
      dateTime={moment(postDate).format("MM-DD-YYYY")}
      className="flex gap-2 flex-row-reverse text-sky-600"
    >
      <span>{moment(postDate).format("YYYY")}</span>
      <span className="w-px flex-1 bg-gray-900/10"></span>
      <span>{moment(postDate).format("MMM DD")}</span>
    </time>
  )
}

export const blogCardDate = (date, year = false) => {
  let formattedDate = "";
  if (year) {
    formattedDate = moment(date).format('DD MMM, YYYY');
    return formattedDate;
  }
  formattedDate = moment(date).format('MMM D');
  return formattedDate;
}