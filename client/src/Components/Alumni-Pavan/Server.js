const express = require('express');
const mongoose=require('cors');
const cors = require('cors'); // Add this if frontend is on a different port
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB URI
mongoose.connect("mongodb+srv://cluster1:atlascluster@cluster0.mongodb.net/alumniDB?retryWrites=true&w=majority")

mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));
// Schema and Model
const alumniSchema = new mongoose.Schema({
  name:String, 
  email:String,
  phone:String, 
  batch:String,
});

const Alumni = mongoose.model('Alumni', alumniSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Alumni Backend with MongoDB!');
});

app.post('/register', async (req, res) => {
  console.log(' Received data:', req.body);

  try {
    const alumni = new Alumni(req.body);
    await alumni.save();
    console.log(' Alumni saved successfully');
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error(' Error during registration:', err.message);
    res.status(500).json({ message: 'Error during registration', error: err.message });
  }
});

app.get('/api/alumni', async (req, res) => {
  try {
    const alumniList = await Alumni.find();
    res.json(alumniList);
  } catch (err) {
    console.error("Error fetching alumni list:", err.message);
    res.status(500).json({ message: 'Error fetching alumni list', error: err.message });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});