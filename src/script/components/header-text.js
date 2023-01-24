class HeaderText extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                .header-container{
                    text-align: center;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 5px 10px rgba(64, 79, 139, 0.5), 0 15px 40px rgba(166, 173, 201, 1);
                    padding: 18px;
                    margin-bottom: 14px;
                    flex-direction: column;
                    color: #875F59;
                }
            </style>

            <div class="header-container">
                <h2>Helo!! Welcome to ResepKu</h2>
                <p>Silahkan cari makananan kesukaan mu dengan memasukan nama makanan di kolom pencarian</p>
                <P>Selamat mencoba!!</p>
            </div>
        `;
    }
}
customElements.define("header-text", HeaderText);