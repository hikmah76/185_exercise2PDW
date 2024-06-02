function kirimData() { //untuk mengumpulkan data
    var nama = document.getElementById("nama").value;
    var laguFavorite = document.getElementById("lagu_favorite").value;
    var penyanyiBandFavorite = document.getElementById("penyanyi_band_favorite").value;
    var tanggal = document.getElementById("tanggal").value; // Added this line to get the date value
    var peminatan = document.querySelector('input[name="Platform"]:checked').value;
    var alasanMemilihLagu = document.getElementById("alasan_memilih_lagu_ini").value;

    //ini nanti muncul stelah klik kirim
    alert(`
        Nama: ${nama}
        Lagu Favorite: ${laguFavorite}
        Penyanyi/Band Favorite: ${penyanyiBandFavorite}
        Tanggal: ${tanggal}  // Included the date in the alert
        Platform Musik Favorit: ${peminatan}
        Alasan Memilih Lagu Ini: ${alasanMemilihLagu}
    `);
}

//untuk menangkap dada dari form
function submitForm() {
    var form = document.getElementById("registrationForm");
    var formData = new FormData(form);

    document.getElementById("output").innerHTML = "";

    var output = "<h2>Informasi yang Anda isi:</h2>";
    formData.forEach(function(value, key) {
        output += "<p><strong>" + key + ":</strong> " + value + "</p>";
    });

    document.getElementById("output").innerHTML = output;
}