namespace Backend.Contracts.User;

public record UserResponseDto(
    long Id,
    string Login,
    string PasswordHash
);