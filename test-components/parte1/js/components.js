async function cargarComponente(id, url) {
    const resp = await fetch(url);
    const html = await resp.text();
    console.log("info del componente", html)
    document.getElementById(id).innerHTML = html;
  }
cargarComponente("header", "components/header/header.html");
