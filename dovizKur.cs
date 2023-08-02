using System;
using System.Net;
using System.IO;
using System.Text.Json;

class Program
{
    static void Main()
    {
        dynamic exchangeRates = GetExchangeRates();

        Console.WriteLine("Döviz Kurları ve Altın Fiyatları");
        Console.WriteLine("================================");

        Console.WriteLine("{0,-10} {1,-10} {2,-10} {3,-10}", "Birim", "Satış", "Alış", "Değişim");
        Console.WriteLine("------------------------------------------------------");

        foreach (var rate in exchangeRates)
        {
            string currency = rate.Name;
            decimal satis = rate.satis;
            decimal alis = rate.alis;
            decimal degisim = rate.degisim;

            Console.WriteLine("{0,-10} {1,-10} {2,-10} {3,-10}", currency, satis, alis, degisim);
        }
    }

    static dynamic GetExchangeRates()
    {
        string api_url = "https://api.genelpara.com/embed/doviz.json";
        string data = string.Empty;

        using (WebClient client = new WebClient())
        {
            data = client.DownloadString(api_url);
        }

        dynamic exchangeRates = JsonSerializer.Deserialize<dynamic>(data);
        return exchangeRates;
    }
}
