const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const pesanPeringatan = document.getElementById("pesanPeringatan");

const daftarTugas = document.getElementById("daftarTugas");
const pesanKosong = document.getElementById("pesanKosong");

const totalTugas = document.getElementById("totalTugas");
const tugasSelesai = document.getElementById("tugasSelesai");
const tugasBelum = document.getElementById("tugasBelum");


function perbaruiStatistik() {
    const semuaTugas = daftarTugas.querySelectorAll("li");
    const jumlahSelesai = daftarTugas.querySelectorAll(".completed");

    totalTugas.innerText = semuaTugas.length;
    tugasSelesai.innerText = jumlahSelesai.length;
    tugasBelum.innerText = semuaTugas.length - jumlahSelesai.length;
}


function tambahTugas() {
    const teksTugas = inputTugas.value.trim();

    if (teksTugas === "") {
        pesanPeringatan.innerText = "Tugas tidak boleh kosong.";
        return;
    }

    pesanPeringatan.innerText = "";

    const tugasBaru = document.createElement("li");

    const ceklisTugas = document.createElement("input");
    ceklisTugas.type = "checkbox";

    const teksTugasBaru = document.createElement("span");
    teksTugasBaru.innerText = teksTugas;

    const btnHapus = document.createElement("button");
    btnHapus.innerText = "Hapus";


    ceklisTugas.addEventListener("change", function() {
        tugasBaru.classList.toggle("completed");

        perbaruiStatistik();
    });


    btnHapus.addEventListener("click", function(event) {
        event.stopPropagation();

        tugasBaru.remove();

        perbaruiStatistik();

        if (daftarTugas.children.length === 0) {
            pesanKosong.style.display = "block";
        }
    });


    tugasBaru.appendChild(ceklisTugas);
    tugasBaru.appendChild(teksTugasBaru);
    tugasBaru.appendChild(btnHapus);

    daftarTugas.appendChild(tugasBaru);

    inputTugas.value = "";

    pesanKosong.style.display = "none";

    perbaruiStatistik();
}


btnTambah.addEventListener("click", tambahTugas);


inputTugas.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        tambahTugas();
    }
});


perbaruiStatistik();