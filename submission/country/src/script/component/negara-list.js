import './negara-item.js';

class NegaraList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set negaras(negaras) {
        this._negara = negaras;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `<div style="padding-top: 112px"> </div`;
        hapusmarker()
        if (this._negara.status=="404") {
          this.shadowDOM.innerHTML += `<h3 style="color: gray">lokasi tidak ditemukan:(</h2>`;
        }
        else {
          let n=0;
          this._negara.forEach(negara => {
              const negaraItemElement = document.createElement("negara-item");
              negaraItemElement.negara = negara;
              this.shadowDOM.appendChild(negaraItemElement);
              //alert(this._negara[n].latlng)
              if (this._negara[n].latlng.length>0) {
                var respon = `${this._negara[n].latlng}`
                var koordinat = respon.split(","); 
                koordinat[0] = parseFloat(koordinat[0]); //lat
                koordinat[1] = parseFloat(koordinat[1]); //lng 
                var id= parseInt(this._negara[n].numericCode);
                marker[id] = L.marker(koordinat)
                    .addTo(map)
                    .bindPopup(`<img src="${this._negara[n].flag}" width="17px"> ${this._negara[n].name}`, {closeOnClick: false, autoClose: false}).openPopup();
                map.flyTo(koordinat, 4)
              }
            n++;
          })
        }
        $("#peta").css("position", "fixed");
        $("#peta").css("top", "180px");
        $("#peta").css("width", "60%");
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
        $("#peta").css("top", "180px");
        hapusmarker();
        if (document.getElementById("searchElement")==null) {
          this.shadowDOM.innerHTML += `<h2 class="placeholder" style="padding-top: 110px">silahkan ketik nama sebuah negara di kolom pencarian</h2>`;
          $("#peta").css("width", "70%");
        }
        else {
          this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
        }
    }

}

function hapusmarker() {
  if (marker.length>0) {
    let i=0;
    while(i<marker.length){
      if (marker[i]!=null) {
        map.removeLayer(marker[i]);
      }
      i++;
    }
  }
}

customElements.define("negara-list", NegaraList);