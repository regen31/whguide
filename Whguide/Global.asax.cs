using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Whguide.Infrastructure;

namespace Whguide
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            ViewEngines.Engines.Add(new CustomLocationViewEngine());
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
