import {ServicesInterface} from "src/services/services.interface.ts";

export interface ApiResponse {
    results: ServicesInterface[];
    next: {
        page: number;
        limit: number;
    };
    previous: {
        page: number;
        limit: number;
    };
}