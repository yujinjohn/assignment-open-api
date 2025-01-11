# **Video Service API Documentation**

## **Base URL**

http://localhost:3000/video

---

## **Endpoints**

### 1. **Get Video Information**

- **URL:** `/video/info`
- **Method:** `GET`
- **Description:** Fetches details about a specific video by its ID.

#### **Query Parameters:**
| Parameter | Type   | Required | Description           |
|-----------|--------|----------|-----------------------|
| `id`      | string | Yes      | YouTube video ID      |

#### **Headers:**
| Header            | Description            |
|--------------------|------------------------|
| `X-Rapidapi-Host`  | API host for the service |
| `X-Rapidapi-Key`   | API key for authentication |

#### **Example Request:**
```http
GET /video/info?id=PrkNZRd9G88

Example Response:


{
  "videoId": "PrkNZRd9G88",
  "title": "TWICE “Strategy” Special Stage",
  "durationInSeconds": 176,
  "keywords": ["TWICE", "STRATEGY", "트와이스", "Stage video", "Dance Video"],
  "channel": {
    "name": "TWICE",
    "id": "UCzgxx_DM2Dcb9Y1spb9mUJA"
  },
  "description": "TWICE “Strategy” Special Stage\nTWICE 14TH MINI ALBUM"
}

2. Get Channel Information

URL: /video/channel/about
Method: GET
Description: Retrieves information about a specific YouTube channel by its ID.

Query Parameters:
Parameter	Type	Required	Description
id	string	Yes	YouTube channel ID
Headers:
Header	Description
X-Rapidapi-Host	API host for the service
X-Rapidapi-Key	API key for authentication

Example request:

GET /video/channel/about?id=UCzgxx_DM2Dcb9Y1spb9mUJA

Example Response:

{
  "channelId": "UCzgxx_DM2Dcb9Y1spb9mUJA",
  "name": "TWICE",
  "description": "Official channel for TWICE music videos, behind-the-scenes content, and more.",
  "subscriberCount": 12000000,
  "videoCount": 300,
  "createdAt": "2015-07-01",
  "bannerImage": "https://example.com/banner.jpg"
}
