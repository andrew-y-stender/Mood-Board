using MoodBoard.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoodBoard.Controllers
{
    public class MoodBoardController : ApiController
    {
        readonly MoodBoardService moodBoardService = new MoodBoardService();


        [Route("api/moodboard"), HttpGet]
        public HttpResponseMessage GetAll()
        {
            var results = moodBoardService.GetAll();

            return Request.CreateResponse(HttpStatusCode.OK, results);
        }
    }
}
