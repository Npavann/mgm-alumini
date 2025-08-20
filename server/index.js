const express = require('express');
const mongoose = require('mongoose');   // ✅ correct import
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Compass (Local) URI
// Default local MongoDB runs at mongodb://127.0.0.1:27017
const mongoURI = "mongodb://127.0.0.1:27017/alumniDB";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected to Compass (local)"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Schema and Model
const alumniSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  batch: String,
});

const Alumni = mongoose.model('Alumni', alumniSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Alumni Backend with MongoDB Compass!');
});

app.post('/register', async (req, res) => {
  console.log('📩 Received data:', req.body);

  try {
    const alumni = new Alumni(req.body);
    await alumni.save();
    console.log('✅ Alumni saved successfully');
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error('❌ Error during registration:', err.message);
    res.status(500).json({ message: 'Error during registration', error: err.message });
  }
});

app.get('/api/alumni', async (req, res) => {
  try {
    const alumniList = await Alumni.find();
    res.json(alumniList);
  } catch (err) {
    console.error("❌ Error fetching alumni list:", err.message);
    res.status(500).json({ message: 'Error fetching alumni list', error: err.message });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
