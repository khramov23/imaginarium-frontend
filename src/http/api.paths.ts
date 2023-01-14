import * as process from "process";

export const apiPath = (path: string) => `${process.env.REACT_APP_API_URL}${path}`


