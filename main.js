// Toggle tema
function toggleTheme() {
  const html = document.documentElement;
  const theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

if (localStorage.getItem('theme')) {
  document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
}

// Handle klik tombol Daftar Sekarang
document.getElementById('daftarBtn').addEventListener('click', function(e) {
  e.preventDefault();

  const nama   = document.getElementById('nama').value.trim();
  const nik    = document.getElementById('nik').value.trim();
  const email  = document.getElementById('email').value.trim();
  const hp     = document.getElementById('hp').value.trim();
  const alamat = document.getElementById('alamat').value.trim();
  const tgl    = document.getElementById('tgl_lahir').value;
  const jenis  = document.getElementById('jenis_kelamin').value;
  const faskes = document.getElementById('faskes').value.trim();

  // Format pesan minimalis + emoji bullet (paling aman untuk preview WA)
  let pesan = `*Pendaftaran BPJS Baru* `;
pesan += `Nama: ${nama || '-'} `;
pesan += `NIK: ${nik || '-'} `;
pesan += `Email: ${email || '-'} `;
pesan += `HP: ${hp || '-'} `;
pesan += `Alamat: ${alamat || '-'} `;
pesan += `Lahir: ${tgl_lahir || '-'} `;
pesan += `Kelamin: ${jenis || '-'} `;
pesan += `Faskes: ${faskes || '-'} `;
pesan += `Via Chill Aja`;
  const baseLink = this.getAttribute('data-link-base');
  const waLink = baseLink + encodeURIComponent(pesan);

  window.open(waLink, '_blank');

  alert('Pesan sudah siap di WhatsApp!\nTekan "Kirim" di WA ya.');

  document.getElementById('bpjsForm').reset();
});