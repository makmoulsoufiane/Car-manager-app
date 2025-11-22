export async function getCars() {
  const response = await fetch("https://myfakeapi.com/api/cars/");
  const data = await response.json();
  return data.cars; // لأن API راجعة فيها { cars : [...] }
}
