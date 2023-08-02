/**
 * dovizKur.php
 *
 * Bu dosya, genelpara.com API'sinden döviz kurları ve altın fiyatlarını alarak gösterir.
 *
 * Coder: [enesehs]
 * E-posta: [enes.ehs@protonmail.com]
 * Tarih: [T02.08.2023]
 * Sürüm: [V.1]
 *


<!DOCTYPE html>
<html lang="tr" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>Kur Gösterimi</title>
</head>
<body>
<?php
function getExchangeRates() {
    $api_url = "https://api.genelpara.com/embed/doviz.json";
    $data = file_get_contents($api_url);
    return json_decode($data);
}

$exchange_rates = getExchangeRates();
?>

<h1>Döviz Kurları ve Altın Fiyatları</h1>
<table>
    <thead>
        <th>Birim</th>
        <th>Satış</th>
        <th>Alış</th>
        <th>Değişim</th>
    </thead>
    <tbody>
        <?php foreach ($exchange_rates as $currency => $rate) : ?>
            <tr>
                <td><?php echo $currency ?></td>
                <td><?php echo $rate->satis ?></td>
                <td><?php echo $rate->alis ?></td>
                <td><?php echo $rate->degisim ?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>
</body>
</html>
