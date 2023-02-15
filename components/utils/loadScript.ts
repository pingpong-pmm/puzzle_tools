function loadScript(scriptText) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.innerHTML = scriptText;
  document.head.appendChild(script);
}

export default loadScript;
