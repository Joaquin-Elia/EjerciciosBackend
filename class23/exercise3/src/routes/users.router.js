import Router from "./router.js";

export default class UsersRouter extends Router {
    init() {
        this.get('/', ['PUBLIC'], (req, res) => {
            res.sendServerError('Incomplete values');
        });

        this.get('/current-user', ['ADMIN', 'USER_PREMIUM', 'USER'], (req, res) => {
            res.sendSuccess(req.user);
        });
    }
}