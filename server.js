const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (fra root-mappen eller fx dist/)
app.use(express.static(path.join(__dirname, "."))); // "." = root, ellers brug "dist"

// MQTT WebSocket proxy
app.use(
  "/mqtt",
  createProxyMiddleware({
    target: "ws://mqtt-plain.nextservices.dk:9001",
    changeOrigin: true,
    ws: true,
    pathRewrite: { "^/mqtt": "" },
  })
);

// Start serveren
app.listen(PORT, () => {
  console.log(`🌐 Server kører på http://localhost:${PORT}`);
});
