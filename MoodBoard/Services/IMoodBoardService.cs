using System.Collections.Generic;
using MoodBoard.Models;

namespace MoodBoard.Services
{
    public interface IMoodBoardService
    {
        List<MoodBoardModel> GetAllMoods();
        int CreateMood(CreateMoodModel req);
        void UpdateMood(MoodBoardUpdateRequestModel req);
        void DeleteMood(int id);
    }
}