calculateDays = () => {
  const oneDayMs = 86400000; //Number of milliseconds in a day

  const currentDate = new Date();
  const omloopDate = new Date(2019, 02, 02)

  return Math.round(Math.abs((currentDate.getTime() - omloopDate.getTime()) / (oneDayMs)) + 1);
}

document.getElementById('dayContainer').innerHTML = calculateDays()