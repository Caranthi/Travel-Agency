namespace Backend.Contracts.Trip;

// record - immutable object
public record TripResponseDto(
    long ID,
    string Title,
    string Departure,
    int Price,
    string Transport
);