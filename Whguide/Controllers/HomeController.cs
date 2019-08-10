using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.Mvc;
using Whguide.Classes;

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
    }
}