export async function onRequest(context) {
  const { request } = context
  const method = request.method

return new Response(`{
  "contents": {
    "sectionListRenderer": {
      "contents": [
        {
          "itemSectionRenderer": {
            "contents": [
              {
  "videoRenderer": {
    "videoId": "PLACEHOLDER",
                      "thumbnail": {
                        "thumbnails": [
                          {
                            "url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                          }
                        ]
                      },
                      "shortBylineText": {
                        "runs": [
                          {
                            "text": "Unknown"
                          }
                        ]
                      },
"publishedTimeText":"12 Dozen Donuts ago",
"viewCountText": "1,234 views",
    "title": {
      "runs": [
        {
          "text": "video 1"
        }
      ]
    }
  }
},{
  "videoRenderer": {
    "videoId": "PLACEHOxDE2",
                      "thumbnail": {
                        "thumbnails": [
                          {
                            "url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hq1.jpg",
                            "width": 480,
                            "height": 360
                          }
                        ]
                      },
                      "shortBylineText": {
                        "runs": [
                          {
                            "text": "Unknown"
                          }
                        ]
                      },
"publishedTimeText":"15 Dozen Donuts ago",
"viewCountText": "0 views",
    "title": {
      "runs": [
        {
          "text": "video 2"
        }
      ]
    }
  }
}
            ]
          }
        }
      ]
    }
  }
}`, {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, OPTIONS",
        "access-control-allow-headers": "*"
      }
    })
}
