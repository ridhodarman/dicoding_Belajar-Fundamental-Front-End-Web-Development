class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
           width: 87.5%;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           border-radius: 5px;
           position: fixed;
           top: 80px;
           background-color: white;
       }
      
       .search-container > input {
           width: 75%;
           padding: 16px;
           border: 0;
           border-bottom: 1px solid gray;
           font-weight: bold;
       }
      
       .search-container > input:focus {
           outline: 0;
           border-bottom: 2px solid gray;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: gray;
           font-weight: normal;
       }
      
      
      .tombol-cari {
          width: 23%;
          margin-left: auto;
          padding: 16px;
          border-style: solid;
          border-width: 0px 0px 3px;
          box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;
          color: #FFFFFF;    
          border-radius: 6px;
          cursor: pointer;
          display: inline-block;
          font-style: normal;
          overflow: hidden;
          text-align: center;
          text-decoration: none;
          text-overflow: ellipsis;
          transition: all 200ms ease-in-out 0s;
          white-space: nowrap;  
          font-family: "Gotham Rounded A","Gotham Rounded B",Helvetica,Arial,sans-serif;
          font-weight: 700; 
          font-size: 18px;
          border-color: #326E99;
          background-color: #3F8ABF;
      }

      .tombol-cari:hover, .tombol-cari:focus {
          background-color: #397CAC;
          border-color: #326E99;   
      }

       #searchButtonElement {
           padding-left: 0%;
       }

       </style>
         <div id="cari">
           <div id="search-container" class="search-container">
               <input placeholder="masukkan nama negara, misal: indonesia, arab, united, china, dsb." id="searchElement" type="search">
               <button id="searchButtonElement" class="tombol-cari" type="submit">Go !</button>
           </div>
         </div>
       `;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);