export default {
async fetch(request) {
return new Response(
JSON.stringify({
status: "online",
service: "Village Dreams API"
}),
{
headers: {
"content-type": "application/json"
}
}
);
}
}
