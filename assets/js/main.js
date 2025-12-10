function sendFormData(formElement) {
    const loader = document.getElementById("loader");
    loader.classList.remove("hidden");
  
    const formData = new FormData(formElement);
  
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message")
    };
  
    fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      loader.classList.add("hidden");
      if (data.success) {
        showToast("✅ Заявка успешно отправлена!");
        formElement.reset();
      } else {
        showToast("❌ Ошибка отправки");
      }
    })
    .catch(() => {
      loader.classList.add("hidden");
      showToast("❌ Сервер недоступен");
    });
  }
  
  // ===== SCROLL REVEAL =====
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