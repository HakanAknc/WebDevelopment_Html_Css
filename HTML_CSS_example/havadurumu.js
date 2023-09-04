const getLocationButton = document.getElementById('getLocation');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const conditionElement = document.getElementById('condition');

getLocationButton.addEventListener('click', () => {
  // Simüle edilmiş hava durumu bilgileri
  const location = 'İstanbul';
  const temperature = '25';
  const condition = 'Güneşli';

  locationElement.textContent = location;
  temperatureElement.textContent = temperature;
  conditionElement.textContent = condition;
});
