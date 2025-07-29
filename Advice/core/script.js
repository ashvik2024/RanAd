const advice = document.getElementById("advice");

const getAdvice = () => {
  console.log("📩 Fetching advice...");

  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log("✅ Advice received:", data);
      advice.textContent = data.slip.advice;
    })
    .catch((error) => {
      console.error("❌ Error fetching advice:", error);
      advice.textContent = "Something went wrong. Try again!";
    });
};
window.addEventListener("DOMContentLoaded", getAdvice);

//   ----------------Copy----------------------

function copy() {
  const adviceText = document.getElementById("advice").innerText;

  navigator.clipboard
    .writeText(adviceText)
    .then(() => {
      const toast = document.getElementById("toast");
      toast.classList.remove("hidden");
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
