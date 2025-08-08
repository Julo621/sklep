import { useState } from "react";
import "./App.css";

function Zdjecie(props) {
  const { alt, filename, price, desc } = props.zdjecia;
  return (
    <div>
      <img src={`assets/${filename}`} alt={alt} />
      <h3>Cena: {price} zł</h3>
      <p>Opis: {desc}</p>
    </div>
  );
}

function App() {
  const zdjecia = [
    { id: 0, alt: "Mak", filename: "obraz1.jpg", category: 1, price: 35, desc: "Opis1" },
    { id: 1, alt: "Bukiet", filename: "obraz2.jpg", category: 1, price: 43, desc: "Opis2" },
    { id: 2, alt: "Dalmatyńczyk", filename: "obraz3.jpg", category: 2, price: 2, desc: "Opis3" },
    { id: 3, alt: "Świnka morska", filename: "obraz4.jpg", category: 2, price: 53, desc: "Opis4" },
    { id: 4, alt: "Rotwailer", filename: "obraz5.jpg", category: 2, price: 43, desc: "Opis5" },
    { id: 5, alt: "Audi", filename: "obraz6.jpg", category: 3, price: 11, desc: "Opis6" },
    { id: 6, alt: "kotki", filename: "obraz7.jpg", category: 2, price: 22, desc: "Opis7" },
    { id: 7, alt: "Róża", filename: "obraz8.jpg", category: 1, price: 33, desc: "Opis8" },
    { id: 8, alt: "Świnka morska", filename: "obraz9.jpg", category: 2, price: 123, desc: "Opis9" },
    { id: 9, alt: "Foksterier", filename: "obraz10.jpg", category: 2, price: 22, desc: "Opis10" },
    { id: 10, alt: "Szczeniak", filename: "obraz11.jpg", category: 2, price: 12, desc: "Opis11" },
    { id: 11, alt: "Garbus", filename: "obraz12.jpg", category: 3, price: 321, desc: "Opis12" },
  ];

  const [showKwiaty, setShowKwiaty] = useState(true);
  const [showZwierzeta, setShowZwierzeta] = useState(true);
  const [showSamochody, setShowSamochody] = useState(true);
  
  const handleKwiatyChange = (e) => setShowKwiaty(e.target.checked);
  const handleZwierzetaChange = (e) => setShowZwierzeta(e.target.checked);
  const handleSamochodyChange = (e) => setShowSamochody(e.target.checked);
  
  return (
    <div>
      <h1>Kategorie zdjęć</h1>
      <div className="vertical">
        <div className="form-check form-switch" style={{marginRight: 15 + 'px'}}>
          <input className="form-check-input" type="checkbox" id="cbox1" checked={showKwiaty} onChange={handleKwiatyChange}/>
          <label className="form-check-label" htmlFor="cbox1">Kwiaty</label>
        </div>
        <div className="form-check form-switch" style={{marginRight: 15 + 'px'}}>
          <input className="form-check-input" type="checkbox" id="cbox2" checked={showZwierzeta} onChange={handleZwierzetaChange}/>
          <label className="form-check-label" htmlFor="cbox2">Zwierzęta</label>
        </div>
        <div className="form-check form-switch" style={{marginRight: 15 + 'px'}}>
          <input className="form-check-input" type="checkbox" id="cbox3" checked={showSamochody} onChange={handleSamochodyChange}/>
          <label className="form-check-label" htmlFor="cbox3">Samochody</label>
        </div>
      </div>

      {showKwiaty && (
        <div className="vertical">
          <Zdjecie zdjecia={zdjecia[0]} />
          <Zdjecie zdjecia={zdjecia[1]} />
          <Zdjecie zdjecia={zdjecia[7]} />
        </div>
      )}

      {showZwierzeta && (
        <div className="vertical">
          <Zdjecie zdjecia={zdjecia[2]} />
          <Zdjecie zdjecia={zdjecia[3]} />
          <Zdjecie zdjecia={zdjecia[4]} />
          <Zdjecie zdjecia={zdjecia[6]} />
          <Zdjecie zdjecia={zdjecia[8]} />
          <Zdjecie zdjecia={zdjecia[9]} />
          <Zdjecie zdjecia={zdjecia[10]} />
        </div>
      )}

      {showSamochody && (
        <div className="vertical">
          <Zdjecie zdjecia={zdjecia[5]} />
          <Zdjecie zdjecia={zdjecia[11]} />
        </div>
      )}
    </div>
  );
}

export default App;