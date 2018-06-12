using System.Collections.Generic;
using MoodBoard.Models;

namespace MoodBoard.Services
{
    public interface IMoodBoardService
    {
        List<MoodBoardModel> GetAll();
    }
}