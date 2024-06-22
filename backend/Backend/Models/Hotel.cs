using System.ComponentModel.DataAnnotations;

namespace Backend.Models;

public class Hotel
{
    public long Id { get; init; }
    public string Name { get; set; }
    public string Country { get; set; }
    public string City { get; set; }
    public int Capacity { get; set; }
    public int Price { get; set; }
    public int Stars { get; set; }
}