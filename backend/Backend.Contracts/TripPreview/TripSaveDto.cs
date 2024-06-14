namespace Backend.Contracts.TripPreview;

public record TripSaveDto(
    string Title,
    string Location,
    string Departure,
    int Price,
    string Transport,
    bool Bargain
);