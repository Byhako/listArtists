{
    "version": 2,
    "name": "listArtis",
    "builds": [{ "src": "index.html", "use": "@now/node-server" }]
    "routes": [
      { "src": "^/static/(.*)", "headers": { "cache-control": "s-maxage=31536000,immutable" }, "dest": "/static/$1" },
      { "src": "^/favicon.ico", "dest": "/favicon.ico" },
      { "src": "^/asset-manifest.json", "dest": "/asset-manifest.json" },
      { "src": "^/manifest.json", "dest": "/manifest.json" },
      { "src": "^/precache-manifest.(.*)", "dest": "/precache-manifest.$1" },
      { "src": "^/service-worker.js", "headers": { "cache-control": "s-maxage=0" }, "dest": "/service-worker.js" },
      { "src": "^/(.*)", "headers": {"cache-control": "s-maxage=0"}, "dest": "/index.html" }
    ]
}