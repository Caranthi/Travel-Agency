# Use the .NET SDK image for the build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /App

# Copy the solution file and individual project files to leverage layer caching
COPY Backend.sln ./
COPY Backend/Backend.csproj ./Backend/
COPY Backend.Contracts/Backend.Contracts.csproj ./Backend.Contracts/

# Restore dependencies as distinct layers
RUN dotnet restore

# Copy the entire solution
COPY . .

# Build and publish the Backend project
RUN dotnet publish Backend/Backend.csproj -c Release -o /App/Backend/publish

# Use the ASP.NET runtime image for the final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /App

# Copy the published Backend project from the build stage
COPY --from=build-env /App/Backend/publish ./

# Expose the port
EXPOSE 8080

# Set the entry point to run the application
ENTRYPOINT ["dotnet", "Backend.dll"]
