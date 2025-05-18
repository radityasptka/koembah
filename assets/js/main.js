// === FORM PEMESANAN ===
document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const address = this.address.value.trim();
  const phone = this.phone.value.trim();
  const service = this.service.value;
  const date = this.date.value;
  const notes = this.notes.value.trim();

  const message = `Halo Koembah! Saya ingin memesan layanan:\n\n` +
    `Nama: ${name}\n` +
    `Alamat: ${address}\n` +
    `Nomor HP: ${phone}\n` +
    `Layanan: ${service}\n` +
    `Tanggal: ${date}\n` +
    `Catatan: ${notes || '-'}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor tim Koembah
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(waUrl, "_blank");
  this.reset();
});


// === FORM FEEDBACK ===
document.getElementById("feedback-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this["feedback-name"].value.trim();
  const rating = this.rating.value;
  const comments = this.comments.value.trim();

  if (!name || !rating) {
    alert("Harap isi nama dan pilih rating.");
    return;
  }

  const message = `Pesanan Selesai - Feedback Pelanggan\n\n` +
    `Nama: ${name}\n` +
    `Rating: ${rating} ⭐\n` +
    `Komentar: ${comments || '-'}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "6281234567890";
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(waUrl, "_blank");
  this.reset();
});


// === ANIMASI SCROLL (fade-in-up / zoom-in) ===
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in-up, .zoom-in');

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (top < triggerPoint) {
      el.classList.add('visible');
    }
  });
});

// Trigger langsung saat halaman dibuka
window.dispatchEvent(new Event('scroll'));
