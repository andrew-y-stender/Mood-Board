using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MoodBoard.Models
{
    public class MoodBoardUpdateRequestModel
    {
        [Required]
        public int? Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Mood { get; set; }

        [Required]
        public string SoundByteUrl { get; set; }

        public DateTime DateModified { get; set; }

        [Required]
        [MaxLength(50)]
        public string Icon { get; set; }
    }
}