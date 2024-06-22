namespace Backend.Contracts.Trip;

// record - immutable object
public record TripResponseDto(
    long ID,
    string Title,
    string Country,
    string Departure,
    int Price,
    string Transport,
    bool Bargain,
    string Description,
    double TravelTime,
    long Hotel
);