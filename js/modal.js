const body = document.querySelector("body");
const reservationButton = document.querySelector("#intro-button");
const createModal = () => {
    const modal = document.createElement("div");
    modal.classList.add("modal-wrapper");
    modal.insertAdjacentHTML(
        "afterbegin",
        `
    <div class="modal">
      <span>Reservation</span>
      <form action = 'https://formspree.io/f/mnqorark' method = 'POST'>
        <input name="mobile" type="tel" pattern="(\+?380|0)\d{9}" required autocomplete="off" placeholder="+38 0XX XXXX XXX"/>
        <label for="mobile"
          >just leave a number and our<br />call manager will contact with
          you</label>
        <button type="submit">call me</button>
      </form>
      <svg height="150px" width="150px">
          <circle cx="150" cy="150" r="150"></circle>
          <circle cx="150" cy="150" r="110"></circle>
      </svg>
  </div>`
    );
    body.appendChild(modal);
    return modal;
};

reservationButton.addEventListener("click", () => {
    const $modal = createModal();
    setTimeout(() => {
        $modal.classList.add("active");
    }, 10);

    document.querySelector('.modal button').addEventListener('click', e => {
        e.preventDefault();
        if (document.querySelector('.modal input').checkValidity()) {
            $modal.classList.remove("active")
            document.querySelector('.modal form').requestSubmit()
        } else {
            alert('Invalid Phone')
        }
    })
    document.addEventListener("click", (event) => {
        if (event.target === $modal) {
            $modal.classList.remove("active");
            setTimeout(() => {
                $modal.remove();
            }, 500);
        }
    });
});