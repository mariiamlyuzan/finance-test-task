export const dateNow = () => {
  const options = {
    month: 'long',
    day: 'numeric',
  };
  const today = new Date().toLocaleDateString('en-US', options);
  return today;
};
