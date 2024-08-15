const fetchImages = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  return data.slice(0, 4);
};

export default fetchImages;
