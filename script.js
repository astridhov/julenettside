document.addEventListener("DOMContentLoaded", () => {
    // Startside: hemmelig hilsen
    const openSecret = document.getElementById("openSecret");
    const secret = document.getElementById("secret");
    if (openSecret && secret) {
      openSecret.addEventListener("click", () => {
        secret.style.display = (secret.style.display === "none" || secret.style.display === "")
          ? "block"
          : "none";
      });
    }
  
    // Minner: vis/skjul tekst
    document.querySelectorAll(".reveal").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-target");
        const el = document.getElementById(id);
        if (!el) return;
        const hidden = getComputedStyle(el).display === "none";
        el.style.display = hidden ? "block" : "none";
      });
    });
  
    // Kalender: vis melding
    const kalenderResult = document.getElementById("kalenderResult");
    document.querySelectorAll(".luke").forEach((btn) => {
      btn.addEventListener("click", () => {
        const msg = btn.getAttribute("data-msg") || "";
        if (kalenderResult) kalenderResult.textContent = msg;
      });
    });
  
    // Quiz: riktig/feil
    const quizResult = document.getElementById("quizResult");
    document.querySelectorAll(".answer").forEach((btn) => {
      btn.addEventListener("click", () => {
        const ok = btn.getAttribute("data-correct") === "true";
        if (quizResult) quizResult.textContent = ok ? "Riktig! 🎉" : "Nesten 😄 Prøv en annen!";
      });
    });
  
    // Hilsen: kopier
    const copyBtn = document.getElementById("copyMessage");
    const message = document.getElementById("message");
    const status = document.getElementById("copyStatus");
    if (copyBtn && message) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(message.value);
          if (status) status.textContent = "Kopiert ✅";
        } catch {
          if (status) status.textContent = "Kunne ikke kopiere (nettleser blokkerte).";
        }
      });
    }
  });
  