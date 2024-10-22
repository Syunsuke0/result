export const fetchResultsData = async () => {
  const response = await fetch("http://localhost:8080/api/results");
  const data = await response.json();
  return data;
};
