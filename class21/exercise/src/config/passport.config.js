import passport from 'passport';
import userModel from '../models/users.model.js';
import GithubStrategy from 'passport-github2';

const initializePassport = () => {
    passport.use ('github', new GithubStrategy({
        clientID: "insert client id",
        clientSecret: "Insert client secret",
        callbackURL: "http://localhost:8080/api/sessions/github-callback",
        scope: ["user:email"]
    }, async ( accessToken, refreshToken, profile, done) => {
        try {
            const email = profile.emails[0].value;
            const user = await userModel.findOne({email})
            if(!user) {
                const newUser = {
                    first_name: profile._json.name,
                    last_name: '',
                    age: 18,
                    email, 
                    password: ''
                }

                const result = await userModel.create(newUser);
                done(null, result);
            } else {
                done(null, user)
            }
        } catch (error) {
            return done(error)
        }
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id);
        done(null, user);
    });
}

export default initializePassport;