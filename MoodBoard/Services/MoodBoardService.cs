using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using MoodBoard.Models;

namespace MoodBoard.Services
{
    public class MoodBoardService : IMoodBoardService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        public List<MoodBoardModel> GetAll()
        {

            #region
            // 1. create and open a SqlConnection
            // 2. create a SqlCommand
            // 3. Execute the command, which will give us a SqlDataReader
            // 4. We'll use the SqlDataReader to loop over all of the rowas coming back from the query
            #endregion

            // 1. 
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();

                // 2. 
                var command = con.CreateCommand();
                // "var" is exactly the same as: SqlCommand command = con.CreateCommand();

                command.CommandText = "MoodBoard_GetAll";
                command.CommandType = System.Data.CommandType.StoredProcedure;

                // 3. 
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    var results = new List<MoodBoardModel>();

                    while (reader.Read())
                    {
                        // this loop will happen once for every row coming out of the database

                        var moodboard = new MoodBoardModel();
                        moodboard.MoodId = (int)reader["MoodId"];
                        moodboard.SoundByteURL = (string)reader["SoundByteURL"];
                        moodboard.DateCreated = (DateTime)reader["DateCreated"];
                        moodboard.DateModified = (DateTime)reader["DateModified"];

                        results.Add(moodboard);
                    }
                    return results;
                }
            }
            // no more con (thanks to the "using") 
        }
    }
}