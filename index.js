/** @format */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const inputNilaiMhs = async () => {
  let input,
    listNilaiMhs = [];
  console.log('=======================');
  console.log('Program Nilai Mahasiswa');
  console.log('=======================');
  console.log('Inputkan nilai mahasiswa dan ketik "q" jika sudah selesai');
  while (input !== 'q') {
    if (input === 'q') {
      break;
    }

    input = await question('Masukkan nilai: ');
    listNilaiMhs.push(input);
  }

  listNilaiMhs.pop();
  let result = listNilaiMhs.map((nilaiMhs) => Number(nilaiMhs));

  // console.log(result[0]);
  // Nilai Terendah
  let nilaiTerendah = result[0];
  for (let i = 0; i < result.length; i++) {
    if (nilaiTerendah > result[i]) {
      nilaiTerendah = result[i];
    }
  }

  // Nilai TerTinggi
  let nilaiTerTinggi = result[0];
  for (let i = 0; i < result.length; i++) {
    if (nilaiTerTinggi < result[i]) {
      nilaiTerTinggi = result[i];
    }
  }

  // Rata-rata
  let rataRata = 0;
  for (let i = 0; i < result.length; i++) {
    rataRata += result[i];
  }

  // Jumlah Siswa Lulus / Tidak Lulus Ujian
  let jumlahSiswaLulus = 0;
  let jumlahSiswaTidakLulus = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] >= 75) {
      jumlahSiswaLulus++;
    } else {
      jumlahSiswaTidakLulus++;
    }
  }

  // Urutan Nilai dari Terendah ke Tertinggi pake sort function
  let urutanNilai = result.sort((a, b) => a - b);

  console.log(`Nilai Terendah : ${nilaiTerendah}`);
  console.log(`Nilai Tertinggi : ${nilaiTerTinggi}`);
  console.log(`Rata-rata : ${rataRata / result.length}`);
  console.log(`Jumlah Siswa Lulus : ${jumlahSiswaLulus}`);
  console.log(`Jumlah Siswa Tidak Lulus : ${jumlahSiswaTidakLulus}`);
  console.log(`Urutan Nilai dari Terendah ke Tertinggi : ${urutanNilai}`);

  console.log(result);
  rl.close();
};

inputNilaiMhs();
