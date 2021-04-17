(function() {
    const burger_el = document.querySelector(".burger-toggle");

    const OPEN = "open";
    const CLOSED = "closed";

    burger_el.addEventListener("click", handle_burger_click);

    burger_el.dataset.enabled = true;
    burger_el.dataset.state = CLOSED;

    function handle_burger_click() {
        toggle_menu();
    }

    function toggle_menu(state) {
        if (state) {
            if (burger_el.dataset.state === state) {
                return;
            }

            burger_el.dataset.state = state;
            return;
        }

        burger_el.dataset.state = burger_el.dataset.state === OPEN ? CLOSED : OPEN;
    }
})();