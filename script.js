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
  return widget
}

const quotes = [
    "Believe in youself",
    "Be great.",
    "Every day is a new day."
  ];

  function displayQuote() {
    const day = new Date().getDate();
    const index = day % quotes.length;
    document.getElementById('quote').textContent = quotes[index];
  }
  
  displayQuote();
  