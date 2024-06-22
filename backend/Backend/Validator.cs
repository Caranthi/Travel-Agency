using Backend.Models;

namespace Backend;

public class Validator
{
    public static bool ValidateTrip(Trip trip)
    {
        if (trip.Title.Equals(""))
        {
            return false;
        }
        if (trip.Country.Equals(""))
        {
            return false;
        }
        if (trip.Departure.Equals(""))
        {
            return false;
        }
        if (trip.Price < 1)
        {
            return false;
        }
        if (trip.Transport != "Plane" && trip.Transport != "Bus" && trip.Transport != "Ship")
        {
            return false;
        }
        if (trip.Bargain.GetType() != typeof(bool))
        {
            return false;
        }
        if (trip.TravelTime < 0.1)
        {
            return false;
        }
        if (trip.Hotel < 1)
        {
            return false;
        }

        return true;
    }

    public static bool ValidateUser(User user)
    {
        if (user.Login.Equals(""))
        {
            return false;
        }
        if (user.PasswordHash.Equals(""))
        {
            return false;
        }

        return true;
    }

    public static bool ValidateHotel(Hotel hotel)
    {
        if (hotel.Name.Equals(""))
        {
            return false;
        }
        if (hotel.Country.Equals(""))
        {
            return false;
        }
        if (hotel.City.Equals(""))
        {
            return false;
        }
        if (hotel.Capacity < 1)
        {
            return false;
        }
        if (hotel.Price < 1)
        {
            return false;
        }
        if (hotel.Stars < 1 || hotel.Stars > 5)
        {
            return false;
        }

        return true;
    }
}