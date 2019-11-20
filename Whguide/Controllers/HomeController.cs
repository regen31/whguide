using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.Mvc;
using Whguide.Classes;
using Whguide.Models;

namespace Whguide.Controllers
{
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult C1()
        {
            return View();
        }

        public ActionResult C2()
        {
            return View();
        }

        public ActionResult C3()
        {
            return View();
        }

        public ActionResult C4()
        {
            return View();
        }

        public ActionResult C5()
        {
            return View();
        }

        public ActionResult C6()
        {
            return View();
        }

        //[OutputCache(Duration = 1800, Location = OutputCacheLocation.Downstream)]
        public ActionResult GasSigs()
        {           
                return View(Prices.GetGasPrices());            
        }

        public ActionResult OreAnoms()
        {
            return View(Prices.GetOrePrices());
        }

        public ActionResult Search(Anomaly anomaly)
        {
            if (anomaly.Type == "combat")
                return PartialView(anomaly.Name);
            if (anomaly.Type == "gas")
                return PartialView(anomaly.Name, Prices.GetGasPrices());
            if (anomaly.Type == "ore")
                return PartialView(anomaly.Name, Prices.GetOrePrices());
            else
                return PartialView();
        }
    }
}