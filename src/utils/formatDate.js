export const formatDate = (dateString) => {
  if (!dateString) return '';
  if (dateString.includes('ago') || dateString.includes('Today') || dateString.includes('Yesterday') || dateString.includes('আগে') || dateString.includes('আজ')) {
    return dateString;
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};

export const getFormattedCurrentDate = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('en-US', options);
};
