const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const uuid = require('uuid');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'mySecret', resave: false, saveUninitialized: false }));

let users = {};
let messages = [];

app.use((req, res, next) => {
    if (!req.cookies.clientId) {
        res.cookie('clientId', uuid.v4(), { maxAge: 900000, httpOnly: true });
    }
    next();
});

app.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('main', { username: req.session.username, messages, canPost: users[req.session.username].role === 'admin' });
    } else {
        res.redirect('/login');
    }
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const role = Object.keys(users).length === 0 ? 'admin' : 'user';
    users[username] = { password, role };
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
        req.session.loggedIn = true;
        req.session.username = username;
        res.redirect('/');
    } else {
        res.send('Invalid credentials');
    }
});

app.post('/post-message', (req, res) => {
    if (req.session.loggedIn && users[req.session.username].role === 'admin') {
        const message = req.body.message;
        messages.push(message);
    }
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
