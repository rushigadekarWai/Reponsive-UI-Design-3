

        // sidebar script----------------------------------------------
        document.addEventListener("DOMContentLoaded", () => {
            const toggleBtn = document.getElementById("toggleSidebar");
            const sidebar = document.getElementById("sidebar");

            // Toggle sidebar on button click
            toggleBtn.addEventListener("click", (event) => {
                sidebar.classList.toggle("open");
                event.stopPropagation(); // Prevents closing when clicking the button
            });

            // Close sidebar when clicking outside
            document.addEventListener("click", (event) => {
                if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
                    sidebar.classList.remove("open");
                }
            });

            // Close sidebar when resizing to a small screen
            window.addEventListener("resize", () => {
                if (window.innerWidth < 992) { // Adjust based on your breakpoint
                    sidebar.classList.remove("open");
                }
            });
        });
        // ------------------------------------------------------------------------------

        // navbar script------------------------------------------------

        document.addEventListener("DOMContentLoaded", () => {
            const navToggleBtn = document.querySelector(".navbar-toggler");
            const navMenu = document.querySelector(".navbar-menu");

            // Toggle navbar menu when button is clicked
            navToggleBtn.addEventListener("click", (event) => {
                navMenu.classList.toggle("open");
                event.stopPropagation(); // Prevent event bubbling
            });

            // Close navbar menu when clicking outside
            document.addEventListener("click", (event) => {
                if (!navMenu.contains(event.target) && !navToggleBtn.contains(event.target)) {
                    navMenu.classList.remove("open");
                }
            });

            // Close menu on window resize
            window.addEventListener("resize", () => {
                if (window.innerWidth >= 992) {
                    navMenu.classList.remove("open");
                }
            });
        });


        document.addEventListener("DOMContentLoaded", function () {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        });





