/* import express from 'express';
import router from './route.js'
import pkg  from 'body-parser';
import multer from 'multer';
const { urlencoded }=pkg
const app = express();

const PORT = 3000 */

/* app.get('/', (req, res) => {
    res.send('Hello pandu  World!')
}) */


/* 
app.get('/about', (req, res) => {
    res.send('Hello About')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact')
}) */

//dynamic


/* app.get('/user/:username', (req, res) => {
    const username = req.params.username
    res.send(`Hello  ${username}!`)
}
) */

//app.get('/user/:username',usernameController )


//query string
//app.get('/search/:query', searchController);
/* app.get('/search', (req, res) => {
    const query = req.query.q
    res.send(`You searched for ${query}`)
}
) */


//app.use('/user', router)//for external controller 

//post

/* app.use(express.json())

app.post('/user', (req, res) => {
    const { name, email } = req.body
    res.send(`Hello ${name} with email ${email}`)
})


app.put('/user/:id',(req, res) => {
    const userId=req.params.id
    const { name, email } = req.body
    res.send(`Hello ${name} with email ${email} and id ${userId}`)
})


app.delete('/user/:id',(req,res)=>{
    const userId=req.params.id
    res.json({
        Message:`userWith id ${userId} deleted Surface`
    })
}) */



/* app.get('/user/:name/:id(\\d{5})', (req, res) => {
    const { name, id } = req.params;
    res.json({ name, id });
}); */



//middleware


/* app.use('/welcome',(req,res,next)=>{
    console.log('Welcome to my app' + Date.now())
    next();
})

app.get('/',(req,res)=>{
    res.send('Hello Express')
})


app.get('/welcome',(req,res)=>{
    res.send('Hello Welcome')
}) */


//Start end middle 
/* 
app.use((req,res,next)=>{
    console.log('Start')

    res.on('finish',()=>{
        console.log('End')
    })

    next()
})

app.get('/',(req,res)=>{
    console.log('Middle')
    res.send('Hello Express')
}) */


//Ejs template Dynamiclly 
/* 
app.set('view engine','ejs')

app.get('/', (req,res)=>{
const userName='Pandu'
res.render('index',{userName})
}) */


//Service Static Files

//app.use(express.static('public'))




//Handling form Data

/* const storage =multer.diskStorage({
    destination:'upload',
    filename:(req,file,cd)=>{
        cd(null,file.fieldname+'_'+Date.now()+file.originalname)
    }
})
const upload=multer({storage,limits:{fileSize:1024000 }})
app.use(urlencoded({extended:true}))
app.use(upload.single('image'))

app.post('/form',(req,res)=>{
    console.log(req.body)
    console.log(req.file);

    res.send('Form Received');
});

app.get('*',(req,res)=>{
    res.send('Sorry This iS Invalid URL')
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
}) */
//Database Connection
/*  import { Client } from 'pg';

const con = new Client({
 user: 'postgres',
 host: 'localhost',
 database: 'Express',
 password: 'Pandu@2000$',
 port: 5432,
});

con.connect()
 .then(() => console.log("Connected"))
 .catch(err => console.error("Connection error:", err));
*/


/*

import express from 'express';
import { Client } from 'pg';

const app = express();
app.use(express.json());


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Express',
    password: 'Pandu@2000$',
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));


//  CREATE - Add a new user
app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await client.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Insert error:", err);
        res.status(500).json({ error: err.message });
    }
});

//  READ - Get all users
app.get('/users', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//  UPDATE - Update a user
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const result = await client.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
            [name, email, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//  DELETE - Remove a user
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await client.query('DELETE FROM users WHERE id = $1', [id]);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
*/


//Cookies

/* import express from 'express';
import cookieParser from 'cookie-parser';

const app=express()
const PORT=3000

app.use(cookieParser())

app.get('/',(req,res)=>{
res.cookie('name','express-app',{maxAge:36000})
    res.send('Hello World')
})

app.get('/fetch',(req,res)=>{
    console.log(req.cookies);
    res.send('API Called')
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
}) */


//session and page views     

/* import cookieParser from 'cookie-parser';
import express from 'express';

import session, { Cookie } from 'express-session';


const app = express()
const PORT = 3000

app.use(cookieParser())
app.use(session({
    secret: 'sample-secret',
    resave: false,
    saveUninitialized: false,
}))


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/visit', (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send(`You Visited This Page ${req.session.page_views} times`)
    }
    else {
        req.session.page_views = 1;
        res.send('Welcome to our page for First time')
    }
})

app.get('/remove-visit', (req, res) => {
    req.session.destroy()
    res.send('station removed')
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
}) */


    //Normal Login
/* import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use(cookieParser());
app.use(session({
    secret: 'sample-secret',
    resave: false,
    saveUninitialized: false,
}));

const users = [];

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Register Route
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).send('User already exists');
    }
    users.push({ username, password });
    res.send('User Registered');
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).send('Not Authorized');
    }
    req.session.user = user;
    res.send('User Logged In');
});

// Protected Dashboard Route
app.get('/dashboard', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('Not Authorized');
    }
    res.send(`Welcome to Dashboard, ${req.session.user.username}`);
});

// Logout Route (optional)
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.send('Logged out');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 */


//JWT Authentication
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const app = express();
const PORT = 3000;


app.use(express.json()); 


const users = [];

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Register Route
app.post('/register', async(req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).send('User already exists');
    }
    users.push({ username, password:hashedPassword });
    res.send('User Registered');
});

// Login Route
app.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user || !(await bcrypt.compare(password,user.password))) {
        return res.status(401).send('Not Authorized');
    }
    const token=jwt.sign({username},'test#secret')
    res.json({token})
    
});

// Protected Dashboard Route
app.get('/dashboard', (req, res) => {
const token=req.header('Authorization')
const decodeToken=jwt.verify(token,'test#secret')
if (decodeToken.username) {
    res.send(`Welcome to the Dashboard,${decodeToken.username}`);
    } else {
        res.status(401).send('Not Authorized');
        }
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
