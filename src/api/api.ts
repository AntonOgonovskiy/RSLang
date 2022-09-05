import axios from "axios";
import {
  settings,
  statistics,
  user,
  userLogin,
  WordBody,
} from "../types/types";


export const axiosClient = axios.create({
  baseURL: 'https://react-learnwords-rslangg.herokuapp.com',

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const token = null;

export async function getAllWords(group: number, page: number) {
  const response = await axiosClient.get(`/words?group=${group}&page=${page}`);
  return response.data;
}

export async function getWordById(id: string) {
  return axiosClient.get(`/words/${id}`);
}

export async function createUser(data: user) {
  return axiosClient.post("/users", JSON.stringify(data));
}

export async function signInAPI(data: userLogin) {
  return axiosClient
    .post(`/signin`, JSON.stringify(data))
    .catch((err: Error) => {
      console.error(err);
      return { data: "error" };
    });
}

export async function getUserById(id: string) {
  return axiosClient.get(`/users/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateUserById(id: string, data: user) {
  return axiosClient.put(`/users/${id}`, JSON.stringify(data), {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function deleteUserById(id: string) {
  return axiosClient.delete(`/users/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getUserTokens(id: string, tokens: string) {
  return axiosClient.get(`/users/${id}/${tokens}`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getAllUserWords(id: string) {
  return axiosClient.get(`/users/${id}/words`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function setUserWord(
  userId: string | null,
  wordId: string,
  body: WordBody,
  token: string | null
) {
  return axiosClient.post(
    `/users/${userId}/words/${wordId}`,
    JSON.stringify(body),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).catch((e) => e.message);
}

export async function getUserWordById(userId: string | null, wordId: string | undefined, token: string | null) {
  return axiosClient.get(`/users/${userId}/words/${wordId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((e) => e.status);
}

export async function deleteUserWord(userId: string | null, wordId: string, token: string | null) {
  return axiosClient.delete(`/users/${userId}/words/${wordId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((e) => e.message);
}

export async function updateUserWord(
  userId: string | null,
  wordId: string | undefined,
  body: WordBody,
  token: string | null
) {
  return axiosClient.put(
    `/users/${userId}/words/${wordId}`,
    JSON.stringify(body),
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).catch((e) => e.message);
}

export async function getUserAggregatedWords(id: string | null, token: string | null, group = 0, page = 0, wordsPerPage = 20,) {
  const response = await axiosClient.get(
    `/users/${id}/aggregatedWords?group=${group}&page=${page}&wordsPerPage=${wordsPerPage}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).catch((e) => e.message);
  return response.data
}

export async function getUserHardWords(userId: string | null, token: string | null) {
  let filter = `{"$and": [{ "userWord.difficulty": "hard"}]}`
  const response = await axiosClient.get(`/users/${userId}/aggregatedWords`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        filter: filter
      }
    }).catch((e) => e.message);
  return response.data
}

export async function getUserStatistic(userId: string) {
  return axiosClient.get(`/users/${userId}/statistics`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateUserStatistics(userId: string, data: statistics) {
  return axiosClient.put(`/users/${userId}/statistics`, JSON.stringify(data), {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getUserSettings(userId: string) {
  return axiosClient.get(`/users/${userId}/settings`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function updateUserSettings(userId: string, data: settings) {
  return axiosClient.put(`/users/${userId}/settings`, JSON.stringify(data), {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
