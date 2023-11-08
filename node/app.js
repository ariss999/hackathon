const express = require("express");
const morgan = require("morgan");
const { connect, sync } = require("./config/database");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/users");
const customerFavRoutes = require("./routes/customerFavs");
const informationRoutes = require("./routes/informations");
const productRoutes = require("./routes/products");
const packageRoutes = require("./routes/packages");
const notiRoutes = require("./routes/notis");
const listChatRoutes = require("./routes/listChat");
const chatRoutes = require("./routes/chats");

const app = express();

// const { OpenAIApi } = require("openai");
const API_KEY = "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";

// const openai = new OpenAIApi({ apiKey: API_KEY });

async function initializeDatabase() {
  await connect();
  await sync();
}
initializeDatabase();

// Setting up middleware
// app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000", // อนุญาตเฉพาะต้นทางนี้เท่านั้น
    methods: ["PUT", "DELETE", "POST"], // อนุญาตให้ใช้วิธี DELETE
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // อนุญาตเฉพาะต้นทางนี้เท่านั้น
    methods: ["PUT", "POST"],
  },
});

app.post("/completions", async (req, res) => {
  const options = {
    method: "POST", // ระบุว่าเป็น HTTP POST
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.messages }],
      temperature: 0.7,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// app.post('/completions', async (req, res) => {
//     const { prompt } = req.body;

//     const data = await openai.createCompletion({
//       model: "text-davinci-003",
//       max_tokens: 512,
//       temperature: 0,
//       prompt, prompt,
//     })

//     res.send(data.data.choices[0].text);

// });

// Setting up routes
app.use("/users", userRoutes);
app.use("/informations", informationRoutes);
app.use("/customerFavs", customerFavRoutes);
app.use("/products", productRoutes);
app.use("/packages", packageRoutes);
app.use("/notis", notiRoutes);
app.use("/listChats", listChatRoutes);
app.use("/chats", chatRoutes);

// Creating a server
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3002, () => {
  console.log("SERVER RUNNING");
});
