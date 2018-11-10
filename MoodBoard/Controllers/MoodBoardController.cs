using MoodBoard.Models;
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
        readonly IMoodBoardService moodBoardService = new MoodBoardService();
            
        public MoodBoardController(IMoodBoardService moodBoardService)
        {
            this.moodBoardService = moodBoardService;
        }

        [Route("api/moodboard"), HttpGet]
        public HttpResponseMessage GetAllMoods()
        {
            var results = moodBoardService.GetAllMoods();

            return Request.CreateResponse(HttpStatusCode.OK, results);
        }

        [Route("api/moodboard"), HttpPost]
        public HttpResponseMessage CreateMood(CreateMoodModel model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", "You did not send any mood data!");
            }

            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest,
                    ModelState
                    );
            }

            IMoodBoardService moodBoardService = new MoodBoardService();

            int id = moodBoardService.CreateMood(model);

            return Request.CreateResponse(HttpStatusCode.Created, id);
        }

        [Route("api/moodboard"), HttpPut]
        public HttpResponseMessage UpdateMood(MoodBoardUpdateRequestModel model)
        {
            if (model == null)
            {
                ModelState.AddModelError("", "You did not send any mood data!");
            }

            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest,
                    ModelState
                    );
            }

            IMoodBoardService moodBoardService = new MoodBoardService();
            moodBoardService.UpdateMood(model);

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [Route("api/moodboard/{id}"), HttpDelete]
        public HttpResponseMessage DeleteMood(int id)
        {
            IMoodBoardService moodBoardService = new MoodBoardService();
            moodBoardService.DeleteMood(id);

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}