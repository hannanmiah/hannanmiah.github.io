let sidebar = document.querySelector('aside')
let sidebarClose = document.getElementById('sidebarClose')
let sidebarOpen = document.getElementById('sidebarOpen')

//toggling between sidebar and menu
sidebarClose.addEventListener('click', function () {
    sidebar.style.display = 'none'
})

sidebarOpen.addEventListener('click', function () {
    sidebar.style.display = 'block'
})