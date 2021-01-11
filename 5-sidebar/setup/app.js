const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  console.log(sidebar.classList);

  // the long way

  // if (sidebar.classList.contains('show-sidebar')) {
  //   sidebar.classList.remove('show-sidebar')
  // } else {
  //   sidebar.classList.add('show-sidebar')
  // }

  // the quick way

  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  }
});
