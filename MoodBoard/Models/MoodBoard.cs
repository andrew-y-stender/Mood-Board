using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoodBoard.Models
{
    public class MoodBoardModel
    {
        public int MoodId { get; set; }
        public string SoundByteURL { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}