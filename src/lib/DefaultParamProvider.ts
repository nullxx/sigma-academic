import DefaultParam from "../interfaces/DefaultParam";
import CredentialsProvider from "./CredentialsProvider";

export function getTokenDefaults() {
  const dp: Partial<DefaultParam> = {
    multi: true,
  };

  if (CredentialsProvider.token) {
    dp.token = CredentialsProvider.token;
  }
  return dp;
}
