function showBirthdays() {
  listContainer.innerHTML = "";

  birthdays.forEach((person) => {
    const personDiv = document.createElement("div");
    personDiv.classList.add("person");

    personDiv.innerHTML = `
      <img src="${person.img}" />
      <div class="info">
        <h4>${person.name}</h4>
        <p class="years">${person.age} years</p>
      </div>
    `;

    listContainer.appendChild(personDiv);
  });
}
