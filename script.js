document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard ready");
  });

function createWidget(title, content) {
  const widget = document.createElement('div');
  widget.className = 'widget';
  

  const widgetTitle = document.createElement('h2');
  widgetTitle.textContent = title

  const widgetContent = document.createElement('p');
  widgetContent.innerHTML = content;

  widget.appendChild(widgetTitle);
  widget.appendChild(widgetContent);
}