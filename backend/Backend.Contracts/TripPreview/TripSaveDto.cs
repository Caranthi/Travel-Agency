namespace Backend.Contracts.Trip;

public record TripSaveDto(
    long Id,
    string Title,
    string Location,
    string Departure,
    int Price,
    string Transport
);