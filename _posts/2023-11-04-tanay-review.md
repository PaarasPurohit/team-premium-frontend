---
hide: false
toc: true
layout: post
title: Tanay Patel's Individual Review
description: My individual review ticket
type: tangibles
courses: { compsci: {week: 6} }
permalink: /tanay-individual-review
---


## Class 1: AstronomyData
The AstronomyData class is a Java class designed to structure astronomy data received from an external source. It uses a set of nested classes to represent different aspects of the data in a hierarchical manner. Let's break down its components:

- Data Class (Data): This class represents the main data structure and contains three attributes:
     - observer: An instance of the Observer class, which holds information about the observer of the celestial data.
     - dates: An instance of the Dates class, which holds date-related information.
     - table: An instance of the Table class, which represents tabular data associated with the celestial objects.
- Observer Class: This class contains the observer's location details and is represented by the Location class, which includes attributes for longitude, elevation, and latitude.
- Dates Class: The Dates class holds information about date ranges associated with the celestial data, specifically from and to dates.
- Table Class: This class is responsible for representing tabular data. It contains a list of rows, and each row is defined by the Row class.
- Row Class: The Row class represents a single row in the table and contains a list of cells, which are instances of the Cell class.
- Cell Class: The Cell class represents individual cells within a row of tabular data. It is not explicitly shown in the provided code, but it likely includes properties relevant to the celestial object's characteristics.
In summary, the AstronomyData class is a comprehensive structure for handling and organizing astronomy-related data. It offers a systematic approach to managing data received from an external source, facilitating easier data retrieval and processing.

```java
package com.nighthawk.spring_portfolio.mvc.astronomy;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import groovyjarjarpicocli.CommandLine.Help.TextTable.Cell;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class AstronomyData {

    private Data data;

    public Data getData() {
        return data;
    }

    public void setData(Data data) {
        this.data = data;
    }

    public static class Data {
        private Observer observer;
        private Dates dates;
        private Table table;

        public Observer getObserver() {
            return observer;
        }

        public void setObserver(Observer observer) {
            this.observer = observer;
        }

        public Dates getDates() {
            return dates;
        }

        public void setDates(Dates dates) {
            this.dates = dates;
        }

        public Table getTable() {
            return table;
        }

        public void setTable(Table table) {
            this.table = table;
        }
    }

    public static class Observer {
        private Location location;

        public Location getLocation() {
            return location;
        }

        public void setLocation(Location location) {
            this.location = location;
        }
    }

    public static class Location {
        private double longitude;
        private double elevation;
        private double latitude;

        public double getLongitude() {
            return longitude;
        }

        public void setLongitude(double longitude) {
            this.longitude = longitude;
        }

        public double getElevation() {
            return elevation;
        }

        public void setElevation(double elevation) {
            this.elevation = elevation;
        }

        public double getLatitude() {
            return latitude;
        }

        public void setLatitude(double latitude) {
            this.latitude = latitude;
        }
    }

    public static class Dates {
        private String from;
        private String to;

        public String getFrom() {
            return from;
        }

        public void setFrom(String from) {
            this.from = from;
        }

        public String getTo() {
            return to;
        }

        public void setTo(String to) {
            this.to = to;
        }
    }

    public static class Table {
        private List<Row> rows;

        public List<Row> getRows() {
            return rows;
        }

        public void setRows(List<Row> rows) {
            this.rows = rows;
        }
    }

    public static class Row {
        private List<Cell> cells;

        public List<Cell> getCells() {
            return cells;
        }

        public void setCells(List<Cell> cells) {
            this.cells = cells;
        }
    }
}
```

## Class 2: AstronomyFavoritesController
The AstronomyFavoritesController class is a Java class that functions as a controller in a Spring Boot application. Its main purpose is to manage a list of favorite celestial objects, allowing users to add, remove, and retrieve their favorite objects. Here's a detailed breakdown of the class:

- Attributes:
     - favorites: This attribute is a list that stores instances of the CelestialObject class, representing the favorite celestial objects.
- Endpoints:
     - addFavorite(): This method is mapped to a POST request at the /api/favorites/add endpoint. It allows users to add a celestial object to their list of favorites. The object is received as a JSON payload in the request body.
     - removeFavorite(): This method is mapped to a DELETE request at the /api/favorites/remove/{id} endpoint. It allows users to remove a celestial object from their list of favorites using the object's ID.
     - getAllFavorites(): This method is mapped to a GET request at the /api/favorites/all endpoint. It returns a list of all favorite celestial objects.
This class acts as the central point for managing users' favorite celestial objects, making it easy to perform CRUD (Create, Read, Update, Delete) operations on these objects.

```java
package com.nighthawk.spring_portfolio.mvc.astronomy;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class AstronomyFavoritesController {

    private List<CelestialObject> favorites = new ArrayList<>();

    // Endpoint to add a celestial object to favorites
    @PostMapping("/add")
    public String addFavorite(@RequestBody CelestialObject celestialObject) {
        favorites.add(celestialObject);
        return "Added to favorites: " + celestialObject.getName();
    }

    // Endpoint to remove a celestial object from favorites by ID
    @DeleteMapping("/remove/{id}")
    public String removeFavorite(@PathVariable String id) {
        for (CelestialObject celestialObject : favorites) {
            if (celestialObject.getId().equals(id)) {
                favorites.remove(celestialObject);
                return "Removed from favorites: " + celestialObject.getName();
            }
        }
        return "Object with ID " + id + " not found in favorites.";
    }

    // Endpoint to get all favorite celestial objects
    @GetMapping("/all")
    public List<CelestialObject> getAllFavorites() {
        return favorites;
    }
}
```

## Class 3: CelestialData
The CelestialData class is a Java class designed to represent data structures associated with celestial objects. It includes nested classes to structure and organize various aspects of celestial data in a hierarchical manner. Let's dive into its components:

- CelestialData Class: This is the main class that represents celestial data. It contains two attributes:
     - data: An instance of the nested CelestialDataInfo class, which holds detailed information about the celestial object.
     - id: A string identifier for the celestial object.
     - CelestialDataInfo Class: This nested class contains attributes for observer details, dates, and the table associated with the celestial object.
- Nested Classes: The CelestialData class includes several nested classes, each responsible for a specific aspect of the celestial data, such as observer details, location, dates, table, rows, and cells.
     - Observer: This class contains attributes for the observer's location details, such as longitude, elevation, and latitude.
     - Location: This is an inner class of the Observer class, containing the observer's geographical coordinates.
     - Dates: The Dates class represents date-related information, including from and to dates.
     - Table: This class represents tabular data associated with the celestial object and includes a list of rows.
     - Row: The Row class represents an individual row within the table and contains a list of cells.
     - Cell: The Cell class represents individual cells within a row and includes properties such as date, distance, position, name, and extra information related to the celestial object.
The CelestialData class provides a structured way to represent and manage celestial data, making it easier to work with various attributes and substructures associated with celestial objects.

```java
package com.nighthawk.spring_portfolio.mvc.astronomy;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CelestialData {
    @JsonProperty("data")
    private CelestialDataInfo data;
    private String id;

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class CelestialDataInfo {
        private Observer observer;
        private Dates dates;
        private Table table;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Observer {
        private Location location;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Location {
        private double longitude;
        private double elevation;
        private double latitude;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Dates {
        private String from;
        private String to;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Table {
        private List<Row> rows;
        private Row entry;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Row {
        private List<Cell> cells;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Cell {
        private String date;
        private Distance distance;
        private Position position;
        private String name;
        private ExtraInfo extraInfo;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Distance {
        @JsonProperty("fromEarth")
        private FromEarth fromEarth;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class FromEarth {
        private String km;
        private String au;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Position {
        private Horizontal horizontal;
        private Azimuth azimuth;
        private Constellation constellation;
        private Equatorial equatorial;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Horizontal {
        private Altitude altitude;
        private Azimuth azimuth;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Altitude {
        @JsonProperty("string")
        private String stringValue;
        private String degrees;
    } 

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Azimuth {
        private String azimuth;
        private String degrees;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Constellation {
        @JsonProperty("short")
        private String shortName;
        private String name;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Equatorial {
        @JsonProperty("rightAscensionString")
        private String rightAscensionString;
        private String declinationString;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class ExtraInfo {
        private String magnitude;
        private String elongation;
        private String distanceKm;
    }
}
```

## Class 4: CelestialDataController
The CelestialDataController class is a Spring Boot controller responsible for handling HTTP requests related to celestial data. It provides endpoints to fetch and store data from an external API, retrieve celestial data by ID, and list all available celestial data. Here's a detailed explanation of this class:

- Attributes:
     - celestialDataService: This attribute is used for dependency injection, and it represents the service responsible for managing celestial data.
- Endpoints:
     - fetchAndStoreData(): This method is mapped to a GET request at the /api/celestial-data/fetch-and-store endpoint. It sends a request to an external API to fetch celestial data and stores it in a structured format. If the data is successfully fetched and stored, it returns a success message.
     - getCelestialDataById(): This method is mapped to a GET request at the /api/celestial-data/{id} endpoint. It allows users to retrieve celestial data by providing the celestial object's ID.
     - listAllCelestialData(): This method is mapped to a GET request at the /api/celestial-data/list endpoint. It returns a list of all available celestial data.
This class serves as the controller for celestial data, allowing users to interact with the data through a set of well-defined endpoints.

```java
package com.nighthawk.spring_portfolio.mvc.astronomy;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:4100")
@RequestMapping("/api/celestial-data")
public class CelestialDataController {

    @Autowired
    private CelestialDataService celestialDataService;

    @GetMapping("/fetch-and-store")
    public ResponseEntity<String> fetchAndStoreData() {
        try {
            // Define the API endpoint and headers
            String apiUrl = "https://astronomy.p.rapidapi.com/api/v2/bodies/positions?latitude=33.775867&longitude=-84.39733&from_date=2017-12-20&to_date=2017-12-21&elevation=166&time=12%3A00%3A00";
            String apiKey = "942fdd6377msh4fafe17c31e732ep15056bjsnf025c595bbdc";
            String apiHost = "astronomy.p.rapidapi.com";

            // Log the request information
            System.out.println("Sending request to the API:");
            System.out.println("API URL: " + apiUrl);
            System.out.println("API Key: " + apiKey);

            // Create and send the HTTP request
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(apiUrl))
                    .header("X-RapidAPI-Key", apiKey)
                    .header("X-RapidAPI-Host", apiHost)
                    .method("GET", HttpRequest.BodyPublishers.noBody())
                    .build();

            // Log the response information
            System.out.println("Response from the API:");
            HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());

            if (response.statusCode() == 200) {
                // Return the response body as data
                String data = response.body();

                // Parse the JSON data into a CelestialData object
                ObjectMapper objectMapper = new ObjectMapper();
                CelestialData celestialData = objectMapper.readValue(data, CelestialData.class);

                // Store the CelestialData object
                celestialDataService.storeData(celestialData);

                return ResponseEntity.ok("Data fetched and stored successfully.");
            } else {
                throw new RuntimeException("Failed to fetch data from the external API");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to fetch and store data: " + e.getMessage());
        }
    }

    // Sample endpoint to get celestial data by ID
    @GetMapping("/{id}")
    public ResponseEntity<CelestialData> getCelestialDataById(@PathVariable String id) {
        CelestialData data = celestialDataService.getDataById(id);
        if (data != null) {
            return ResponseEntity.ok(data);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Sample endpoint to list all celestial data
    @GetMapping("/list")
    public ResponseEntity<List<CelestialData>> listAllCelestialData() {
        List<CelestialData> dataList = celestialDataService.getAllData();
        return ResponseEntity.ok(dataList);
    }
}
```

## Class 5: CelestialDataService
The CelestialDataService class is a service class in a Spring Boot application responsible for managing celestial data. It includes methods to store, retrieve, update, and delete celestial data objects. Here's an in-depth breakdown of the class:

- Attributes:
     - celestialDataList: This list stores instances of the CelestialData class, representing celestial data objects.
     - idCounter: This counter keeps track of unique IDs for celestial data objects.
- Constructor:
     - The class includes a constructor that initializes the attributes.
- initialize() Method:
     - This method is annotated with @PostConstruct, indicating that it is called after the bean is created. It can be used to add initial data to the celestialDataList if needed.
- Service Methods:
     - storeData(): This method takes a CelestialData object as input, assigns it a unique ID, and adds it to the celestialDataList. It returns the stored object.
     - getAllData(): This method returns a list of all celestial data objects.
     - getDataById(): This method takes an ID as input and retrieves the corresponding celestial data object. It returns null if the object is not found.
The CelestialDataService class acts as a data management service for celestial data, allowing data storage and retrieval operations.

```java
package com.nighthawk.spring_portfolio.mvc.astronomy;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

@Service
public class CelestialDataService {
    private List<CelestialData> celestialDataList = new ArrayList<>();
    private Long idCounter = 1L;

    @Autowired
    public CelestialDataService() {
    }

    @PostConstruct
    public void initialize() {
        // You can add initial data here if needed
    }

    public CelestialData storeData(CelestialData celestialData) {
        celestialData.setId(String.valueOf(idCounter)); // Set id as a string
        celestialDataList.add(celestialData);
        idCounter++;
        return celestialData;
    }

    public List<CelestialData> getAllData() {
        return celestialDataList;
    }

    public CelestialData getDataById(String name) { // Change parameter and return type to String
        Optional<CelestialData> result = celestialDataList.stream()
                .filter(data -> data.getId().equals(name))
                .findFirst();
        return result.orElse(null);
    }

    public CelestialData updateData(String id, CelestialData updatedData) { // Change parameter to String
        for (int i = 0; i < celestialDataList.size(); i++) {
            CelestialData data = celestialDataList.get(i);
            if (data.getId().equals(id)) {
                updatedData.setId(id); // Set id as a string
                celestialDataList.set(i, updatedData);
                return updatedData;
            }
        }
        return null;
    }

    public boolean deleteData(String id) { // Change parameter to String
        for (int i = 0; i < celestialDataList.size(); i++) {
            CelestialData data = celestialDataList.get(i);
            if (data.getId().equals(id)) {
                celestialDataList.remove(i);
                return true;
            }
        }
        return false;
    }
}
```

## Class 6: CelestialObject
The CelestialObject class is a simple Java class that defines the structure of a celestial object. It includes properties for ID, name, and type. Here's a detailed explanation:

- Attributes:
     - id: This attribute represents the unique identifier of the celestial object.
     - name: This attribute stores the name of the celestial object.
     - type: This attribute specifies the type or category of the celestial object.
- Constructors:
     - The class provides both a default constructor and a parameterized constructor. The parameterized constructor allows you to initialize the id, name, and type properties when creating a CelestialObject instance.
- Getter and Setter Methods:
     - The class includes getter and setter methods for each attribute, allowing you to get and set their values.
- toString() Method:
     - The toString() method is overridden to provide a string representation of the CelestialObject instance. It returns a string that includes the ID, name, and type of the celestial object.
This class serves as a blueprint for creating celestial objects, making it easy to represent and work with individual celestial objects.
```java
package com.nighthawk.spring_portfolio.mvc.astronomy;

public class CelestialObject {

    private String id;
    private String name;
    private String type;

    public CelestialObject() {
        // Default constructor
    }

    public CelestialObject(String id, String name, String type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    // Getter and Setter methods for id
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    // Getter and Setter methods for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter methods for type
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "CelestialObject{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
```

## Class 7: DataParserService
The DataParserService class is a service class that plays a crucial role in parsing external data, typically in JSON format, and converting it into a list of CelestialData objects. Here's an in-depth explanation of this class:

- Constructor:
     - The class includes a constructor, but it is empty since it doesn't require any initialization.
- Service Method:
     - parseData(): This method takes a string (externalData) as input, representing JSON data from an external source. It uses the Jackson library to parse the JSON data and convert it into a list of CelestialData objects.
- JSON Parsing and Conversion:
    - Inside the parseData() method, the Jackson library is used to read the JSON data (externalData) and parse it into a structured format.
     - The method checks if the JSON data contains specific fields, such as data, table, and rows, to ensure it is structured correctly.
     - It then extracts data from the JSON and maps it to CelestialData objects. The resulting objects are added to a list and returned.
- Error Handling:
     - The method includes error handling to manage JSON parsing exceptions or any other unexpected exceptions. If an exception occurs, the method returns an empty list.
The DataParserService class is responsible for taking raw external data and transforming it into a structured format that can be easily processed and stored as CelestialData objects. It simplifies the data preparation process for further use in the application.

```java
package com.nighthawk.spring_portfolio.mvc.astronomy;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class DataParserService {

    @Autowired
    public DataParserService() {
    }

    public List<CelestialData> parseData(String externalData) {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            // Parse the JSON response and convert it into a list of CelestialData
            JsonNode jsonNode = objectMapper.readTree(externalData);
            List<CelestialData> celestialDataList = new ArrayList<>();

            if (jsonNode.has("data") && jsonNode.get("data").has("table") && jsonNode.get("data").get("table").has("rows")) {
                JsonNode rows = jsonNode.get("data").get("table").get("rows");

                for (JsonNode row : rows) {
                    CelestialData celestialData = objectMapper.treeToValue(row, CelestialData.class);
                    celestialDataList.add(celestialData);
                }
            }

            return celestialDataList;
        } catch (JsonProcessingException e) {
            // Handle JSON parsing exceptions
            e.printStackTrace();
            return Collections.emptyList();
        } catch (Exception e) {
            // Handle other exceptions
            e.printStackTrace();
            return Collections.emptyList();
        }
    }
}
```

## Collegeboard Quiz
I did pretty well on the quiz, 38/40, but I did work with other people and spend a lot of time on the questions. The quiz made me realize how important really understanding the course is and applying the knowledge from our project to the collegeboard questions is.

### Question 1 
I selected A(5), but I didn't iterate enough times, it needs to iterate the whole length of the array. I don't really know why I did that tbh.

<img src="https://user-images.githubusercontent.com/111466916/281156712-84881ba8-c3fe-42e4-b0b6-71f75cb0491d.png">

### Question 36
A is incorrect because we need to test when x is odd and greater than 9 as well, which A doesn't address. C does test this condition.

<img src="https://user-images.githubusercontent.com/111466916/281160932-32774e72-9fea-425d-bf78-88355257d33a.png">

## Key Commit + Analytics

(Frontend analytics)[https://github.com/PaarasPurohit/team-premium-frontend/graphs/contributors]
(Backend analytics)[https://github.com/PaarasPurohit/team-premium-backend-final/graphs/contributors]

(Key Commit)[https://github.com/PaarasPurohit/team-premium-backend-final/commit/df1a875e29b4025039fd70bd18186500c2278fa8]

There was another commit that was basically all the files for my backend, because I forgot to commit. I know that this doesn't really show the iterative programming, and I should commit much more often which is an important thing to get better at. For this commit, the things that I actually added was ignoring the unused JSON properties because I was reading the response data wrong, so I just decided to ignore those.

## Student Grades

|Unit|Grade|
|----|-----|
|1|**1/1**|
|2|**0.97/1**|
|3|**1/1**|
|4|**0.9/1**|
|5|**0.96/1**|
|6|**0.55/1**|
|7|our hacks|
|8|**0.55/1**|
|9|not released/1|
|10|not released/1|
|Total|**5.93/7**|
|Average|**0.85/1**|


## Trimester Reflection

When I think about the course and our project, I realize that time, planning, and teamwork are super important. One thing I've learned is not to leave things to the last minute because it makes everything stressful and rushed. In the future, I want to set clear goals, make deadlines, and stick to a schedule to avoid last-minute stress. Being organized is a big deal too. Having a plan with tasks, who's responsible for them, and when they're due is a great help. Using tools and methods for projects can help keep everything in order. Working with others is a big part of being successful. Teamwork, talking well, and sharing ideas helped us a lot. I want to work with others more and share ideas in future projects. This way, we can learn from each other and do better. I'll use these ideas to do better in future projects. I know I should pick something I really like and get into it to learn more from the course.