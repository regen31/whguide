using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using Whguide.Models;
using Newtonsoft.Json;

namespace Whguide.Classes
{
    public class Prices
    {

        public static GasPricesViewModel GetGasPrices()
        {
            GasPricesViewModel gasprices = new GasPricesViewModel();

            using (var client = new WebClient())
            {
                string jsonresult = client.DownloadString("https://esi.evetech.net/latest/markets/prices/");
                client.QueryString.Add("datasource", "tranquility");
                
                List<ESIitem> items = JsonConvert.DeserializeObject<List<ESIitem>>(jsonresult);

                var c28 = items.First(x => x.type_id == 30375); // Fullerite-C28
                gasprices.c28 = c28.average_price;
                var c32 = items.First(x => x.type_id == 30376); // Fullerite-C32
                gasprices.c32 = c32.average_price;
                var c50 = items.First(x => x.type_id == 30370); // Fullerite-C50
                gasprices.c50 = c50.average_price;
                var c60 = items.First(x => x.type_id == 30371); // Fullerite-C60
                gasprices.c60 = c60.average_price;
                var c70 = items.First(x => x.type_id == 30372); // Fullerite-C70
                gasprices.c70 = c70.average_price;
                var c72 = items.First(x => x.type_id == 30373); // Fullerite-C72
                gasprices.c72 = c72.average_price;
                var c84 = items.First(x => x.type_id == 30374); // Fullerite-C84
                gasprices.c84 = c84.average_price;
                var c320 = items.First(x => x.type_id == 30377); // Fullerite-C320
                gasprices.c320 = c320.average_price;
                var c540 = items.First(x => x.type_id == 30378); // Fullerite-C540
                gasprices.c540 = c540.average_price;

                return gasprices;
            }
        }
    }
}