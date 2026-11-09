const metaData = {
  sempurna: {
    title: "[1] Metamorfosis Sempurna (Holometabola)",
    html: "<p>Metamorfosis sempurna adalah perubahan bentuk tubuh hewan yang mengalami <strong>4 tahapan berbeda</strong> secara signifikan pada setiap fasenya.</p><br><p><strong>Ciri Khas:</strong> Melewati fase kepompong (pupa) sebelum menjadi dewasa.</p><ul><li><strong>Tahapan:</strong> Telur &rarr; Larva (Ulat/Jentik) &rarr; Pupa (Kepompong) &rarr; Imago (Dewasa).</li><li><strong>Contoh Hewan:</strong> Kupu-kupu, nyamuk, katak, dan lalat tentara hitam (BSF).</li></ul>"
  },
  "tidak-sempurna": {
    title: "[2] Metamorfosis Tidak Sempurna (Hemimetabola)",
    html: "<p>Metamorfosis tidak sempurna adalah daur hidup di mana bentuk hewan muda yang baru menetas <strong>sudah mirip dengan induknya</strong>, hanya ukurannya lebih kecil dan belum memiliki sayap yang sempurna.</p><br><p><strong>Ciri Khas:</strong> Tidak mengalami fase pupa (kepompong).</p><ul><li><strong>Tahapan:</strong> Telur &rarr; Nimfa (Hewan Muda) &rarr; Imago (Dewasa).</li><li><strong>Contoh Hewan:</strong> Kecoak, belalang, capung, dan jangkrik.</li></ul>"
  }
};

function showExplanation(type) {
  const modal = document.getElementById('metaModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  if (metaData[type]) {
    modalTitle.innerHTML = metaData[type].title;
    modalBody.innerHTML = metaData[type].html;
    modal.style.display = 'flex';
  }
}

function closeExplanation() {
  document.getElementById('metaModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('metaModal');
  if (event.target === modal) {
    closeExplanation();
  }
};
