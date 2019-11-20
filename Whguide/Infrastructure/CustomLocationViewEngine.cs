using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Whguide.Infrastructure
{
    public class CustomLocationViewEngine : RazorViewEngine
    {
        public CustomLocationViewEngine() {
            PartialViewLocationFormats = new string[] { "~/Views/Anomalies/C1/{0}.cshtml", "~/Views/Anomalies/C2/{0}.cshtml", "~/Views/Anomalies/C3/{0}.cshtml", "~/Views/Anomalies/C4/{0}.cshtml", "~/Views/Anomalies/C5/{0}.cshtml", "~/Views/Anomalies/C6/{0}.cshtml", "~/Views/Anomalies/GasSigs/{0}.cshtml", "~/Views/Anomalies/OreAnoms/{0}.cshtml", };
        }
    }
}

