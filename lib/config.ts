import dotenv from "dotenv";
import * as process from "process";
import {number} from "prop-types";

dotenv.config()

const URL: string = process.env.URL || '';

const config = {
    backend: {
        url: URL
    }
}

export default config