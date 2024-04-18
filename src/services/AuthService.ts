// import $api from "../http";
import axios, {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";



export default class AuthService {
    static async googleSuccess(): Promise<void> {
        return axios.get("/login/success", (req, res) => {
            if (req.user) {
                res.status(200).json({
                    success: true,
                    message: "successfull",
                    user: req.user,
                    cookies: req.cookies
                })
            }
        })
    }

    static async googleFailed(): Promise<void> {
        return axios.get("/login/failed", (req, res) => {
            res.status(401).json({
                success: false,
                message: "failure"
            })
        })
    }


    // static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    //     return $api.post<AuthResponse>('/login', {email, password})
    // }

    // static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    //     return $api.post<AuthResponse>('/registration', {email, password})
    // }

    // static async logout(): Promise<void> {
    //     return $api.post('/logout')
    // }

}

