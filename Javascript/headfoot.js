class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="topp">
            <div class="henthjelp">
                <ul>
                    <li><a href="./Hente.html">Utleveringssteder</a></li>
                    <li><a href="./Kontaktoss.html">Kontakt oss</a></li>
                </ul>
            </div>
            <div class="logo">
                <h1>
                    <a href="./KLEDELI.html">KLEDELI</a>
                </h1>
                <h2>For deling av klær</h2>
            </div>
            <div class="logginnknapp" onclick="document.getElementById('logginn').style.display='block'">Logg inn</div>
        </div>
            <br>
            <nav>
                <ul>
                    <li><a href="./Barn.html">Se alt</a></li>
                    <li class="dropdown">
                        <a href="" id="kategorier">Kategorier</a>
                        <ul class="dropdowncontent">
                            <li><a href="./Yttertoy.html">Ytterklær</a></li>
                            <li><a href="./Innetøy.html">Innerklær</a></li>
                            <li><a href="./Undertøy.html">Undertøy</a></li>
                        </ul>
                    </li>
                    <li><a href="./Baerekraft.html">Bærekraft</a></li>
                    <li><a href="./Omoss.html">Om oss</a></li>
                    <li><a href="./Medlemskap.html">Bli medlem</a></li>
                </ul>
            </nav>
        </header>
        `
    }

}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
    <h1 class="fhead">KLEDELI</h1>
    <br>
        <table class="tabell">
          <tr>
              <th>Handle</th>
              <th>Om KLEDELI</th>
              <th>Hjelp</th>
              <th>Medlemskap</th>
          </tr>
          <tr>
              <td><a href="./Barn.html">Se alt</a></td>
              <td><a href="./Omoss.html">Om oss</a></td>
              <td><a href="./Kontaktoss.html">Kontakt oss</a></td>
              <td><a href="./Medlemskap.html">Bli medlem</a></td>
          </tr>
          <tr>
              <td><a href="#kategorier">Kategorier</a></td>
              <td>Ofte stilte spørsmål</td>
              <td><a href="./Hente.html">levering og retur</a></td>
              <td>Leievilkår</td>
          </tr>
        </table>
        <p>&copy; 2023 KLEDELI</p>
    </footer>
    `
    }
}

customElements.define('my-footer', MyFooter)