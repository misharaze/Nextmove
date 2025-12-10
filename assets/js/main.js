function sendFormData(formElement) {
    const loader = document.getElementById("loader");
    loader.classList.remove("hidden");
  
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
    
      const data = Object.fromEntries(new FormData(form));
    
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    
      const result = await res.json();
    
      if (result.success) {
        alert("✅ Заявка отправлена!");
        form.reset();
      } else {
        alert("❌ Ошибка отправки");
        console.error(result);
      }
    });
    
  
 
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
  
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
  document.addEventListener("mousemove", e => {
    document.querySelectorAll(".hero-particles span").forEach((particle, i) => {
      const speed = (i + 1) * 0.3;
      particle.style.transform = `translate(${e.clientX * speed / 100}px, ${e.clientY * speed / 100}px)`;
    });
  });
}
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hidden");
  }
});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
