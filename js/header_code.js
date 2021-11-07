window.onload = function injectHeader() {
    let header = `
    <div class="container">
        <a href="#" class="logo">
            Ifat's Website</a>
        <nav class="main-nav">
            <ul class="main-nav-list">
                <li>
                    <a class="active" href="otherpage.html">Home</a>
                </li>
                <li>
                    <a href="#games">Games</a>
                </li>
                <li>
                    <a href="aboutme.html">About Me</a>
                </li>
                <li>
                    <a href="login.html">Log out</a>
                </li>
            </ul>
        </nav>
    </div>`
    document.getElementById("header").innerHTML = header;
  }