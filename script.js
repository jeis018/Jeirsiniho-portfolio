function addRecommendation() {
  const recommendation = document.getElementById("new_recommendation").value;

  if (recommendation.trim() === "") {
    return;
  }

  const element = document.createElement("div");
  element.className = "recommendation";
  element.innerHTML = `"${recommendation}"`;

  document.getElementById("all_recommendations").appendChild(element);

  document.getElementById("new_recommendation").value = "";

  showPopup(true);
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  popup.style.display = show ? "flex" : "none";
}