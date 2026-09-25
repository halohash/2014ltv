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
    "title": {
      "runs": [
        {
          "text": "PLACEHOLDER."
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
