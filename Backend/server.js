import express from 'express';
import cors from 'cors';
import { Database } from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

// initialize sqlite db
const db = new Database(path.join(__dirname, 'dev_portfolio.db'));

//create profile table if it doesn't exist
db.exec(
    `
    CREATE TABLE IF NOT EXISTS profile(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    profileIMG TEXT NOT NULL, 
    profileDesc TEXT NOT NULL,
    profileText TEXT NOT NULL,
    UPDATE_at DATETIME DEFAULT CURRENT_TIMESTAMP  
)`
);

// insert default data if table is empty
const countData = db.prepare('SELECT COUNT(*) as count FROM profile');
if(countData.count === 0){
    db.prepare(
        `
        INSERT INTO profile (profileIMG, profileDesc, profileText) VALUES(?,?,?)
     `).run(
        'https://media.licdn.com/dms/image/v2/D5603AQGS98YdBL-omA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730503740910?e=2147483647&v=beta&t=RtbnZMXQtu7KaDALzQs0wguz_a_Qvy3b-gZngjYfGZo',

        'welcome to my portfolio',

        "I'm really exited to finally make this."
     );
}

//middleware
app.use(cors());
app.use(express.json());

//routes

//get 
app.get('/api/profile', (req,res) => {
    try{
        const profile = db.prepare(`SELECT * FROM profile ORDER BY id DESC LIMIT 1`).get();
        res.json(profile);
    }catch(err){
        res.status(500).json({err: 'failed to fetch profile data.'})
    }
});

// update profile data

