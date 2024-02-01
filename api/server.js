const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
// const queryString = require('query-string')

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userDb = require('./models/user');

const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const gigRoute = require('./routes/gig.route');

dotenv.config();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URL)
    .then(console.log('Connect to MongoDB'))
    .catch((err) => {
        console.log('Lost connected to MongoDB', err);
    });

//* ROUTE
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/gig', gigRoute);

// Setup session
app.use(session({
    secret: '1feqwdw3',
    resave: false,
    saveUninitialized: true,
}));

// Setup passport
app.use(passport.initialize());
app.use(passport.session());


passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
        callbackURL: '/auth/google/callback', // same as Authorized redirect URIs at google Cloud
        scope: ['profile', 'email']
    },
        async (accessToken, refreshToken, profile, done) => {
            console.log('profile', profile);

            try {
                let user = await userDb.findOne({ googleId: profile.id });

                if (!user) {
                    user = new userDb({
                        googleId: profile.id,
                        username: profile.displayName, // need to match the authname
                        email: profile.emails[0].value,
                        password: profile.password,
                        userImg: profile.photos[0].value,
                        isSeller: profile.isSeller,
                    });

                    await user.save();
                }

                return done(null, user);
            } catch (error) {
                return done(error, null);
            };
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:5173/become-a-seller/overview',
    failureRedirect: 'http://localhost:5173'
}));

app.get('/api/auth/login', async (req, res) => {
    //console.log('', req.user);

    if (req.user) {
        // res.status(200).json({ message: 'User logged in', user: req.user });
        res.status(200).json(req.user);
    } else {
        res.status(400).json({ message: 'Not authorized!' });
    };
});

app.listen(PORT, () => {
    console.log(`Backend is running at port ${PORT}`);
});