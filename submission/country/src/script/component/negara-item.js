class NegaraItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set negara(negara) {
        this._negara = negara;
        this.render();
    }

    render() {
        let i = 0;
        let ejaan="";
        if (this._negara.altSpellings.length>i) {
          while (i<this._negara.altSpellings.length) {
            if (i==this._negara.altSpellings.length-1) {
              ejaan=`${ejaan}${this._negara.altSpellings[i]}`;
            }
            else {
              ejaan=`${ejaan}${this._negara.altSpellings[i]}, `;
            }
            i++;
          }
        }
        else{
          ejaan=this._negara.altSpellings[i];
        }

        let n = 0;
        let batas="";
        if (this._negara.borders.length>n) {
          while (n<this._negara.borders.length) {
            if (n==this._negara.borders.length-1) {
              batas=`${batas}${this._negara.borders[n]}`;
            }
            else {
              batas=`${batas}${this._negara.borders[n]}, `;
            }
            n++;
          }
        }
        else {
          batas=this._negara.borders[n];
        }

        let x = 0;
        let zona="";
        if (this._negara.timezones.length>x) {
          while (x<this._negara.timezones.length) {
            if (x==this._negara.timezones.length-1) {
              zona=`${zona}${this._negara.timezones[x]}`;
            }
            else {
              zona=`${zona}${this._negara.timezones[x]}, `;
            }
            x++;
          }
        }
        else {
          zona=this._negara.timezones[x];
        }

        let isi = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .bendera {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }

               .table-container {
                  overflow: auto;
                  padding: 14px;
                  min-widht: 250px;
                }
              
               .negara-info {
                   padding: 24px;
               }
              
               .negara-info > h2 {
                   font-weight: lighter;
               }
              
               .negara-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }
               .info {
                color: darkblue;
               }

               .tombol {
                  cursor: pointer;
                  color: white;   
                  background-color: #2ecc71;
                  outline:0;
                  font-family: 'Ubuntu', sans-serif;
                  font-size: 1.1em;
                  border:0;
                  padding: 5px;
                }
                .tombol:hover, .tombol:focus{
                    background-color: #23b05f;
                }
           </style>
           <img class="bendera" src="${this._negara.flag}" alt="bendera">
             <div class="table-container">
                <h2>${this._negara.name}</h2>
                <table>
              <tr>
                <td colspan=2>Ejaan Lain: <font class="info">${ejaan}</font><br/><br/></td>
              </tr>
              <tr>
                <td>Ibu Kota:<font class="info">${this._negara.capital}</font></td>
                <td>Bahasa: <font class="info">${this._negara.languages[0].name}</font></td>
              </tr>
              <tr>
                <td>Mata Uang: <font class="info">${this._negara.currencies[0].name}</font></td>
                <td>Populasi: <font class="info">${this._negara.population}</font></td>
              </tr>
              <tr>
                <td>Sub Benua: <font class="info">${this._negara.subregion}</font></td>
                <td>Kode Telepon: <font class="info">+${this._negara.callingCodes[0]}</font></td>
              </tr>
              <tr>
                <td>Native Name: <font class="info">${this._negara.nativeName}</font></td>
                <td>Kode Negara: <font class="info">${this._negara.alpha2Code}</font></td>
              </tr>
              <tr>
                <td>Zona Waktu: <font class="info">${zona}</font></td>
                <td>Batas Daratan: <font class="info">${batas}</font></td>
              </tr>
              <tr>
                <td>Luas Wilayah: <font class="info">${this._negara.area} km<sup>2</sup></font></td>
                <td><button class="tombol" onclick="lokasi('${this._negara.latlng}', '${this._negara.numericCode}')">View Location</button></td>
              </tr>
            </table>
           </div>
               ` ;

           this.shadowDOM.innerHTML = `${isi}</div>`;
    }
}

customElements.define("negara-item", NegaraItem);