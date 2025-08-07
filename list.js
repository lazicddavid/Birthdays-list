const birthdays = [
  { name: "Bertie Yates", age: 29, img: "person1.jpg" },
  { name: "Hester Hogan", age: 32, img: "person2.jpg" },
  { name: "Larry Little", age: 36, img: "person3.jpg" },
  { name: "Sean Walsh", age: 34, img: "person4.jpg" },
  { name: "Lola Gardner", age: 29, img: "person5.jpg" },
];

const listContainer = document.getElementById("list");
const title = document.getElementById("title");
const clearBtn = document.getElementById("clearBtn");

function showBirthdays() {
  listContainer.innerHTML = "";

  birthdays.forEach((person) => {
    const personDiv = document.createElement("div");
    personDiv.classList.add("person");

    personDiv.innerHTML = `
      <img src="${person.img}" alt="${person.name}" />
      <div class="info">
        <h4>${person.name}</h4>
        <p class="years">${person.age} years</p>
      </div>
    `;

    listContainer.appendChild(personDiv);
  });

  title.textContent = `${birthdays.length} Birthday${
    birthdays.length === 1 ? "" : "s"
  } Today`;
}

showBirthdays();

clearBtn.addEventListener("click", function () {
  birthdays.length = 0;
  showBirthdays();
});
