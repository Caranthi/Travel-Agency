namespace Backend.Contracts.Hotel;

public record HotelResponseDto(
    long Id,
    string Name,
    string Country,
    string City,
    int Capacity,
    int Price,
    int Stars
);