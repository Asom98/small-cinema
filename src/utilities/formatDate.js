export const formatDate = (dateTimeString) => {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  
  const formattedDate = new Date(dateTimeString).toLocaleString('en-US', options);
  return formattedDate;
};

export const formatDateMore = (dateTimeString) => {
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  
  const formattedDate = new Date(dateTimeString).toLocaleString('en-US', options);
  return formattedDate;
};