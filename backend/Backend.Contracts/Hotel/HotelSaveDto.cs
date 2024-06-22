namespace Backend.Contracts.Hotel;

public record HotelSaveDto(
    string Name,
    string Country,
    string City,
    int Capacity,
    int Price,
    int Stars
);