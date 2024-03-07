const studentName = prompt("Nama kamu?")
const studentWish = prompt("kau mau kuliah?")

if(studentWish === "mau") {
    var nilaiAkhirSMA = prompt("masukkan nilai SMA / SMK MU DONG !!")
    if (nilaiAkhirSMA < 30) {
        alert("Tidak mungkin masuk UNIV");
    } else {
        var chanceGetUniv = ((nilaiAkhirSMA - 30) / 20) * 100;
        if (nilaiAkhirSMA < 50) {
            // Jika hasil chanceGetUniv dibawah 50 persen
            if (chanceGetUniv < 50) {
                alert("Hmmm, kemungkinan kamu " + studentName + " kecil masuk UNIV");
            } else {
                alert("Hmmm, kemungkinan kamu " + studentName + " bisa masuk UNIV");
            }
        } else {
            if (chanceGetUniv > 70 && nilaiAkhirSMA > 60) {
                alert("Hei " + studentName + ", pasti masuk UNIV dengan nilai SMA " + nilaiAkhirSMA + " mu yang besar itu");
            }
            else if (chanceGetUniv > 70 || nilaiAkhirSMA > 80) {
                alert("Hei " + studentName + " pasti masuk UNIV dengan nilai SMA " + nilaiAkhirSMA + " mu yang besar itu");
            }
        }
    }
} else {
    alert("okedeh goodluck Terserah Lu!")
}