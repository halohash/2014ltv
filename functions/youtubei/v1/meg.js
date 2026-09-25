import meg from '../../../data/meg.json';

export async function onRequest(context) {
  const { request } = context
  const method = request.method

return new Response(meg, {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, POST, OPTIONS",
        "access-control-allow-headers": "*"
      }
    })
}
