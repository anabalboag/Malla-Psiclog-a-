const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};

function puedeAprobar(ramo) {
  return (ramo.prerrequisitos || []).every(pr => estado[pr] === true);
}

function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estado));
}

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  malla.forEach((semestre, i) => {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    semestreDiv.innerHTML = `<h2>Semestre ${i + 1}</h2>`;

    semestre.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;

      const aprobado = estado[ramo.id] === true;
      const habilitado = puedeAprobar(ramo);

      if (aprobado) div.classList.add("aprobado");
      else if (!habilitado) div.classList.add("bloqueado");

      div.onclick = () => {
        if (!puedeAprobar(ramo)) return;
        estado[ramo.id] = !estado[ramo.id];
        guardarEstado();
        renderMalla();
      };

      semestreDiv.appendChild(div);
    });

    container.appendChild(semestreDiv);
  });
}

renderMalla();
