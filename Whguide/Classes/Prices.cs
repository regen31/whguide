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
        private static string jsonresult;
        private static List<ESIitem> items = new List<ESIitem>();


        public static GasPricesViewModel GetGasPrices()
        {
            GasPricesViewModel gasprices = new GasPricesViewModel();

            try
            {
                GetPricesFromESI();

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
            catch
            {
                gasprices.c28 = 0;
                gasprices.c32 = 0;
                gasprices.c50 = 0;
                gasprices.c60 = 0;
                gasprices.c70 = 0;
                gasprices.c72 = 0;
                gasprices.c84 = 0;
                gasprices.c320 = 0;
                gasprices.c540 = 0;

                return gasprices;
            }
        }

        public static OrePricesViewModel GetOrePrices()
        {
            OrePricesViewModel oreprices = new OrePricesViewModel();

            try
            {
                GetPricesFromESI();

                var arkonor = items.First(x => x.type_id == 28367); // Arkonor
                oreprices.Arkonor = arkonor.average_price / 100;
                oreprices.ArkonorIskm3 = arkonor.average_price / 100 / 16;

                var bistot = items.First(x => x.type_id == 28388); // Bistot
                oreprices.Bistot = bistot.average_price / 100;
                oreprices.BistotIskm3 = bistot.average_price / 100 / 16;

                var crokite = items.First(x => x.type_id == 28391); // Crokite
                oreprices.Crokite = crokite.average_price / 100;
                oreprices.CrokiteIskm3 = crokite.average_price / 100 / 16;

                var darkochre = items.First(x => x.type_id == 28394); // DarkOchre
                oreprices.DarkOchre = darkochre.average_price / 100;
                oreprices.DarkOchreIskm3 = darkochre.average_price / 100 / 8;

                var gneiss = items.First(x => x.type_id == 28397); // Gneiss
                oreprices.Gneiss = gneiss.average_price / 100;
                oreprices.GneissIskm3 = gneiss.average_price / 100 / 5;

                var hedbergite = items.First(x => x.type_id == 28401); // Hedbergite
                oreprices.Hedbergite = hedbergite.average_price / 100;
                oreprices.HedbergiteIskm3 = hedbergite.average_price / 100 / 3;

                var hemorphite = items.First(x => x.type_id == 28403); // Hemorphite
                oreprices.Hemorphite = hemorphite.average_price / 100;
                oreprices.HemorphiteIskm3 = hemorphite.average_price / 100 / 3;

                var jaspet = items.First(x => x.type_id == 28406); // Jaspet
                oreprices.Jaspet = jaspet.average_price / 100;
                oreprices.JaspetIskm3 = jaspet.average_price / 100 / 2;

                var kernite = items.First(x => x.type_id == 28410); // Kernite
                oreprices.Kernite = kernite.average_price / 100;
                oreprices.KerniteIskm3 = kernite.average_price / 100 / 1.2;

                var mercoxit = items.First(x => x.type_id == 28413); // Mercoxit
                oreprices.Mercoxit = mercoxit.average_price / 100;
                oreprices.MercoxitIskm3 = mercoxit.average_price / 100 / 40;

                var omber = items.First(x => x.type_id == 28416); // Omber
                oreprices.Omber = omber.average_price / 100;
                oreprices.OmberIskm3 = omber.average_price / 100 / 0.6;

                var plagioclase = items.First(x => x.type_id == 28422); // Plagioclase
                oreprices.Plagioclase = plagioclase.average_price / 100;
                oreprices.PlagioclaseIskm3 = plagioclase.average_price / 100 / 0.35;

                var pyroxeres = items.First(x => x.type_id == 28424); // Pyroxeres
                oreprices.Pyroxeres = pyroxeres.average_price / 100;
                oreprices.PyroxeresIskm3 = pyroxeres.average_price / 100 / 0.3;

                var scordite = items.First(x => x.type_id == 28429); // Scordite
                oreprices.Scordite = scordite.average_price / 100;
                oreprices.ScorditeIskm3 = scordite.average_price / 100 / 0.15;

                var spodumain = items.First(x => x.type_id == 28420); // Spodumain
                oreprices.Spodumain = spodumain.average_price / 100;
                oreprices.SpodumainIskm3 = spodumain.average_price / 100 / 16;

                var veldspar = items.First(x => x.type_id == 28432); // Veldspar
                oreprices.Veldspar = veldspar.average_price / 100;
                oreprices.VeldsparIskm3 = veldspar.average_price / 100 / 0.1;
                
                return oreprices;
            }
            catch
            {

                oreprices.Arkonor = 0;
                oreprices.Bistot = 0;
                oreprices.Crokite = 0;
                oreprices.DarkOchre = 0;
                oreprices.Gneiss = 0;
                oreprices.Hedbergite = 0;
                oreprices.Hemorphite = 0;
                oreprices.Jaspet = 0;
                oreprices.Kernite = 0;
                oreprices.Mercoxit = 0;
                oreprices.Omber = 0;
                oreprices.Plagioclase = 0;
                oreprices.Pyroxeres = 0;
                oreprices.Scordite = 0;
                oreprices.Spodumain = 0;
                oreprices.Veldspar = 0;

                return oreprices;
            }
        }

        private static void GetPricesFromESI() // Eve Swagger Interface (API)
        {
            using(var client = new WebClient())
            {
                jsonresult = client.DownloadString("https://esi.evetech.net/latest/markets/prices/");
                // client.QueryString.Add("datasource", "tranquility");                
            }
            items = JsonConvert.DeserializeObject<List<ESIitem>>(jsonresult);
        }        
    }
}