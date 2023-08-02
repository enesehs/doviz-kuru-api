<!DOCTYPE html>
<html lang="tr" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>Kur Gösterimi</title>
</head>
<body>
  <h1>Döviz Kurları ve Altın Fiyatları</h1>
  <table id="exchangeTable">
    <thead>
      <th>Birim</th>
      <th>Satış</th>
      <th>Alış</th>
      <th>Değişim</th>
    </thead>
    <tbody>
      <!-- Tablo verileri JavaScript ile doldurulacak -->
    </tbody>
  </table>

  <script>
    function getExchangeRates() {
      fetch("https://api.genelpara.com/embed/doviz.json")
        .then(response => response.json())
        .then(data => {
          const tableBody = document.querySelector("#exchangeTable tbody");
          for (const currency in data) {
            if (data.hasOwnProperty(currency)) {
              const rate = data[currency];
              const row = `
                <tr>
                  <td>${currency}</td>
                  <td>${rate.satis}</td>
                  <td>${rate.alis}</td>
                  <td>${rate.degisim}</td>
                </tr>
              `;
              tableBody.innerHTML += row;
            }
          }
        })
        .catch(error => {
          console.error("Veri alınamadı:", error);
        });
    }

    // Sayfa yüklendiğinde verileri al ve tabloyu doldur
    document.addEventListener("DOMContentLoaded", getExchangeRates);
  </script>
</body>
</html>
