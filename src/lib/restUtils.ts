import { getTokenDefaults } from "./DefaultParamProvider";
import CredentialsProvider from "./CredentialsProvider";
import crypto from "crypto";
import DefaultParam from "../interfaces/DefaultParam";

const hashStringSeparator = "~";

export function prepareBody<T = unknown>(
  preBody: T,
  toDelete: string[] = [],
  method: string
): Partial<DefaultParam> & T {
  const interBody: Partial<DefaultParam> & T = {
    ...getTokenDefaults(),
    ...preBody,
  };
  const body = { ...interBody };

  let k: keyof typeof interBody;
  for (k of Object.keys(interBody) as (keyof typeof interBody)[]) {
    if (typeof k === "string" && toDelete.includes(k)) {
      delete interBody[k];
    }
  }

  interBody.metodo = method;
  interBody.secreto = CredentialsProvider.secreto;
  body.hash = generateHash<T>(interBody);
  return body;
}

export function getPreHash<T = unknown>(interBody: Partial<DefaultParam> & T) {
  const keys = Object.keys(interBody).sort();
  const values = keys.map((key) => interBody[key as keyof DefaultParam]);
  return values;
}

export function generateHash<T = unknown>(interBody: Partial<DefaultParam> & T) {
  const preHashStr = getPreHash<T>(interBody).join(hashStringSeparator);

  const hash = crypto.createHash("MD5").update(preHashStr).digest("hex");
  return hash;
}
