export async function getCars() {
  console.log("getCars: fetching data from API");
  const response = await fetch("https://myfakeapi.com/api/cars/");
  const data = await response.json();
  console.log("getCars: data received", data.cars);
  return data.cars; // لأن API راجعة فيها { cars : [...] }
}
