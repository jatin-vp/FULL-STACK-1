const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        toggleBtn.innerHTML = "🌙 Dark Mode";
    } else {
        toggleBtn.innerHTML = "☀ Light Mode";
    }
});
