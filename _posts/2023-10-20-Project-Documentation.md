---
toc: true
comments: false
layout: post
title: Favorites/Search Project Documentation
description: What classes in the backend and the errors.
type: plans
courses: { compsci: {week: 9} }
permalink: /documentation
---

# Project Documentation - Celestial Data Management
## 1. Introduction

This project documentation provides an overview of the Celestial Data Management project, which is a Spring Boot-based application designed to fetch, store, and manage celestial data. The project utilizes various classes and services to handle data retrieval from an external API, storage in a database, and data manipulation.

## 2. Project Overview

The Celestial Data Management project aims to perform the following key functions:

- Fetch celestial data from an external API.
- Store the fetched data in a database.
- Retrieve celestial data from the database.
- Update celestial data in the database.
- Delete celestial data from the database.
- List all celestial data stored in the database.

## 3. Project Structure

The project's structure is organized as follows:

- `CelestialDataController`: Handles HTTP requests related to celestial data.
- `CelestialDataRepository`: Provides data access methods for the database.
- `CelestialDataService`: Manages database operations and data retrieval.
- `CelestialObject`: Represents a celestial object.
- `DataParserService`: Parses external API data and converts it into a list of `CelestialData` objects.

## 4. Class Descriptions
### CelestialDataController

- **Description**: This controller class defines API endpoints to fetch and store celestial data. It uses the `CelestialDataService` to handle data storage and retrieval.

### CelestialDataRepository

- **Description**: This repository interface extends `CrudRepository` and provides data access methods to interact with the database. It includes methods to find celestial data by ID, retrieve all data, and filter data by date.

### CelestialDataService

- **Description**: This service class manages operations related to celestial data. It interacts with the `CelestialDataRepository` to store, retrieve, update, and delete data. It also contains methods to get all data and filter data by date.

### CelestialObject

- **Description**: This class represents a celestial object and includes attributes such as ID, name, and type. It is used for data representation in the application.

### DataParserService

- **Description**: This service class is responsible for parsing external API data. It uses Jackson's `ObjectMapper` to convert JSON data into a list of `CelestialData` objects.

## 5. API Endpoints

- `GET /api/celestial-data/fetch-and-store`: Fetches celestial data from an external API, parses it, and stores it in the database.

- `GET /api/celestial-data/{id}`: Retrieves celestial data by its ID.

- `GET /api/celestial-data/list`: Lists all celestial data stored in the database.

- `POST /api/celestial-data/update/{id}`: Updates celestial data with the provided ID.

- `DELETE /api/celestial-data/delete/{id}`: Deletes celestial data by its ID.

## 6. Dependencies

The project relies on the following dependencies:

I included this because I ran into some errors relating to project dependencies and the `pom.xml` file

- Spring Boot: Provides the foundation for the application.
- Spring Data JPA: Simplifies database interactions.
- Jackson: Handles JSON serialization and deserialization.
- Java HTTP Client: Enables HTTP requests.
- H2 Database: An in-memory database for development purposes.
- Spring Web: Facilitates web-based functionality.

## 7. Common Errors and Troubleshooting 

Here are some common errors that were encountered during the development of this project and tips on how to troubleshoot them:

### Error 1: Dependency Resolution Errors 

- **Description**: Dependency resolution errors can occur when Maven or Gradle fails to download required dependencies. This might result in compilation issues and runtime errors.

- **Troubleshooting**: 
  - Check your project's `pom.xml` (for Maven) or `build.gradle` (for Gradle) files to ensure that dependencies and versions are correctly specified.
  - Verify your internet connection and any proxy settings that might block dependency downloads.
  - Use the `mvn clean install` (for Maven) or `gradle clean build` (for Gradle) commands to force dependency resolution.

### Error 2: Database Configuration Issues 

- **Description**: Database configuration errors can lead to issues when connecting to the database. This might result in data storage and retrieval problems.

- **Troubleshooting**:
  - Ensure that your database URL, username, and password are correctly configured in your `application.properties` or `application.yml` file.
  - Check that the database server is running and accessible from your application.

### Error 3: External API Key Problems 

- **Description**: Errors related to external API keys can prevent successful data retrieval from the API.

- **Troubleshooting**:
  - Verify that you have a valid API key for the external service and that it is correctly provided in the HTTP request header.
  - Check that the API key is not expired or rate-limited.

### Error 4: Data Parsing Errors

- **Description**: Data parsing errors may occur when the format of the data returned by the external API does not match the expected format for parsing.

- **Troubleshooting**:
  - Inspect the format of the data returned by the external API and ensure it matches the expected format for successful parsing.
  - Review your parsing code for any potential issues.

### Error 5: HTTP Request Failures 

- **Description**: Failures in HTTP requests can disrupt data fetching from external APIs.

- **Troubleshooting**:
  - Check your network connectivity and ensure that your application can make external HTTP requests.
  - Verify the correctness of the endpoint URL, HTTP headers, and HTTP method used in your request.

## 8. Conclusion

The Celestial Data Management project demonstrates how to create a Spring Boot application for fetching, storing, and managing celestial data. By addressing common errors and troubleshooting, you can set up and run the project effectively.