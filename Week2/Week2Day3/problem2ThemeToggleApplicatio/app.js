const toggleBtn = document.getElementById("toggleBtn");

const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add("light-mode");
    }
};

const toggleTheme = () => {
    const isDark = document.body.classList.contains("dark-mode");
    if (isDark) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light-mode");
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
    }
};

toggleBtn.addEventListener("click", toggleTheme);
loadTheme();