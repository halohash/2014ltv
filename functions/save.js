export async function onRequest(context) {
  try {
    const response = await fetch("https://web.archive.org/save/https://2014ltv.pages.dev/", {
      method: "POST",
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        "referrer": "https://web.archive.org/save"
      },
      body: "url=https%3A%2F%2F2014ltv.pages.dev%2F&capture_outlinks=1&capture_all=on&capture_screenshot=on"
    });

    const data = await response.text();
    
    // Return the raw text or parse it into JSON if the archive API actually returns JSON
    return new Response(data, {
      headers: { "content-type": "text/html; charset=utf-8" }
    });

  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
