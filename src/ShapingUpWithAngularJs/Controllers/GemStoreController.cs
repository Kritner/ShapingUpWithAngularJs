using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace ShapingUpWithAngularJs.GemStore.Controllers
{
    public class GemStoreController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
