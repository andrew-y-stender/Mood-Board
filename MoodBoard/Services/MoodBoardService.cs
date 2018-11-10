using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using MoodBoard.Models;

namespace MoodBoard.Services
{
    public class MoodBoardService : IMoodBoardService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;


        public List<MoodBoardModel> GetAllMoods()
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
                        moodboard.Mood = (string)reader["Mood"];
                        moodboard.SoundByteURL = (string)reader["SoundByteURL"];
                        moodboard.DateCreated = (DateTime)reader["DateCreated"];
                        moodboard.DateModified = (DateTime)reader["DateModified"];
                        moodboard.Icon = (string)reader["Icon"];
                        moodboard.Id = (int)reader["Id"];

                        results.Add(moodboard);
                    }
                    return results;
                }
            }
            // no more con (thanks to the "using") 
        }

        public int CreateMood(CreateMoodModel req)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();

                SqlCommand cmd = new SqlCommand("MoodBoard_Create", con);

                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@mood", req.Mood);
                cmd.Parameters.AddWithValue("@soundByteURL", req.SoundByteUrl);
                cmd.Parameters.AddWithValue("@icon", req.Icon);

                cmd.Parameters.Add("@id", SqlDbType.Int).Direction = ParameterDirection.Output;
                
                cmd.ExecuteNonQuery();
                int id = (int)cmd.Parameters["@id"].Value;
                return id;
            }
        }

        public void UpdateMood(MoodBoardUpdateRequestModel req)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("MoodBoard_Update", con);

                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@mood", req.Mood);
                cmd.Parameters.AddWithValue("@soundByteURL", req.SoundByteUrl);
                cmd.Parameters.AddWithValue("@icon", req.Icon);
                cmd.Parameters.AddWithValue("@id", req.Id);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }

        public void DeleteMood(int id)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("MoodBoard_Delete", con);

                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }
    }
}