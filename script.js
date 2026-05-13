function showDetails(title, technologies, description) {

  const popup = document.createElement('div');

  popup.className = 'popup-container';

  popup.innerHTML = `

    <div class="popup-box">

      <h2>${title}</h2>

      <p><strong>${technologies}</strong></p>

      <p>${description}</p>

      <button onclick="closePopup()">Close</button>

    </div>

  `;

  document.body.appendChild(popup);
}

function closePopup() {

  const popup = document.querySelector('.popup-container');

  if (popup) {
    popup.remove();
  }
}