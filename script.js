const caseDetails = {
  kasus1: {
    title: "Penumpukan Sampah Organik & Maggot BSF",
    text: "Skenario: Sampah organik rumah tangga sering membusuk dan menghasilkan gas metana yang merugikan. Larva lalat Black Soldier Fly (BSF) memakan sampah organik hingga 3-4 kali berat tubuhnya setiap hari sebelum menjadi prepupa. Pertanyaan: Analisislah mengapa fase larva adalah fase paling efektif untuk pengolahan sampah dan bagaimana pupuk kasgot (bekas maggot) terbentuk!"
  },
  kasus2: {
    title: "Penurunan Populasi Kupu-Kupu di Taman",
    text: "Skenario: Penyemprotan obat hama secara rutin membasmi ulat di dedaunan taman. Dampaknya, pada bulan berikutnya jumlah kepompong dan kupu-kupu menurun drastis. Pertanyaan: Mengapa pembasmian pada tahap ulat memutus seluruh daur hidup kupu-kupu dan mengganggu penyerbukan tanaman di taman tersebut?"
  }
};

function openModal(caseId) {
  const modal = document.getElementById('caseModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  if (caseDetails[caseId]) {
    modalTitle.textContent = caseDetails[caseId].title;
    modalBody.textContent = caseDetails[caseId].text;
    modal.style.display = 'flex';
  }
}

function closeModal() {
  document.getElementById('caseModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('caseModal');
  if (event.target === modal) {
    closeModal();
  }
};