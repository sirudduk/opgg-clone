export enum HTTP_METHOD {
  GET = "GET",
  POST = "POST",
}

const BASE_URL = "https://codingtest.op.gg/api";

export default function request(url: string, options: HTTP_METHOD) {
  return fetch(`${BASE_URL}/${url}`, {
    method: options,
  }).then((response) => {
    return response.json();
  });
}
