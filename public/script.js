const modal = document.getElementById("scrollModal");
const closeBtn = document.getElementById("closeScroll");
const scrollText = document.getElementById("scrollText");

const contentData = {
  early: `
    <h2>Early Life</h2>
    <p>William Shakespeare was born in 1564 in Stratford-upon-Avon. His father was a glove-maker and his mother came from a farming family. He studied at the King’s New School where he learned Latin and classical literature.</p>
  `,
  london: `
    <h2>London Years</h2>
    <p>Shakespeare moved to London in the 1580s and joined the Lord Chamberlain’s Men. His plays were performed at the Globe Theatre and he became one of the most successful playwrights of the Elizabethan era.</p>
  `,
  later: `
    <h2>Later Works</h2>
    <p>In his later life, Shakespeare wrote masterpieces such as Hamlet, Othello, King Lear, and Macbeth—works that explored power, madness, love, and betrayal.</p>
  `,
  legacy: `
    <h2>Legacy</h2>
    <p>Shakespeare’s influence continues across literature, film, and theater. His works are studied globally and translated into hundreds of languages.</p>
  `
};

document.querySelectorAll(".more-info").forEach(button => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-info");
    scrollText.innerHTML = contentData[key];
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
