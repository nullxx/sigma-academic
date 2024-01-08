import { Login, LoginResponse } from "./interfaces/Login";
import http from "./lib/http";
import { AxiosResponse } from "axios";
import { GetMarks, GetMarksResponse } from "./interfaces/GetMarks";

enum SigmaAcademicEndpoint {
  LOGIN = "/AdvancedProtocolRedirector/resources/identificacion",
  GET_MARKS = "/academic-rest/resources-ext/obtenerCalificacionesExt",
}

interface SigmaAcademicOptions {
  baseURL?: string;
  interceptToken?: boolean;
}

export default class SigmaAcademic {
  constructor(private options?: SigmaAcademicOptions) {
    if (options?.baseURL) http.defaults.baseURL = this.options?.baseURL;
    if (options?.interceptToken) process.env.INTERCEPT_TOKEN = "true"; // FIXME not the best way to do this
  }

  async login(loginParams: Login): Promise<LoginResponse> {
    return (
      await http.post<LoginResponse, AxiosResponse<LoginResponse>, Login>(
        SigmaAcademicEndpoint.LOGIN,
        loginParams
      )
    ).data;
  }

  async getMarks(marksParams: GetMarks) {
    return (
      await http.post<
        GetMarksResponse,
        AxiosResponse<GetMarksResponse>,
        GetMarks
      >(SigmaAcademicEndpoint.GET_MARKS, marksParams)
    ).data;
  }
}

export * from "./interfaces/Login";
export * from "./interfaces/GetMarks";
export * from "./interfaces/Login";
