import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true;
        this._user = {
         
        };
        this._coins = 0;
        this._id = 0;
        this._timeAction = 0;

        makeAutoObservable(this);
    }

    setId(int) {
        this._id = int;
    }

    setisAuth(bool) {
        this._isAuth = bool;
    }

    setCoins(int) {
        this._coins = int;
    }


    setUser(user) {
        this._user = user;
    }

    setAction(time) {
        this._timeAction = time;
    }
    
    
    get timeAction() {
        return this._timeAction;
    }

    get isAuth() {
        return this._isAuth;
    }

    get id() {
        return this._id;
    }

    get user() {
        return this._user;
    }

    get coins() {
        return this._coins;
    }
} 