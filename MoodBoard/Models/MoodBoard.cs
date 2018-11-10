using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoodBoard.Models
{
    public class MoodBoardModel
    {
        public int Id { get; set; }
        public string Mood { get; set; }
        public string SoundByteURL { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public string Icon { get; set; }
    }
}