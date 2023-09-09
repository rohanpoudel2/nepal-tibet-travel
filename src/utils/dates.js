import moment from "moment";

export const latestUpdateDate = (postDate) => {

  const postDateTime = moment(postDate, "YYYY-MM-DD HH:mm:ss");

  const currentDateTime = moment();
  const timeDifference = currentDateTime.diff(postDateTime, 'seconds');

  let result = "";

  if (timeDifference < 60) {
    result = `Last Updated ${timeDifference} sec ago`;
  } else if (timeDifference < 3600) {
    result = `Last Updated ${Math.floor(timeDifference / 60)} min ago`;
  } else if (timeDifference < 86400) {
    result = `Last Updated ${Math.floor(timeDifference / 3600)} hr ago`;
  } else {
    result = `Last Updated ${Math.floor(timeDifference / 86400)} day ago`;
  }

  return result

}

export const blogCardDate = (date, year = false) => {
  let formattedDate = "";
  if (year) {
    formattedDate = moment(date).format('MMM DD, YYYY');
    return formattedDate;
  }
  formattedDate = moment(date).format('MMM D');
  return formattedDate;
}