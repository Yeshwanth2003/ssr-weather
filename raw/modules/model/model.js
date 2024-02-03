export default async function Model({ place }) {
  const apiKey = process.env._apikey;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  try {
    return {
      description: data["weather"][0].description,
      cel: (data["main"].temp - 273.15).toPrecision(2),
      wind_speed: data["wind"].speed,
      hum: data["main"].humidity,
      con: data["sys"].country,
    };
  } catch {}
  return {
    description: "",
    cel: 0,
    wind_speed: 0,
    hum: 0,
    con: "",
  };
}
