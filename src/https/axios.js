import axios from 'axios';

// config timeout
axios.defaults.timeout = 5 * 10000;

// config cookie
// axios.defaults.withCredentials = true

// config request header
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

// config base url
axios.defaults.baseURL = 'https://api.yanceyleo.com/api/';


// config request interceptors
axios.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
      // config.data = qs.stringify(config.data);
    }
    return config;
  },
  err => Promise.reject(err),
);
// config response interceptors
axios.interceptors.response.use(
  res => res,
  err => Promise.reject(err),
);

// GET
export function GET(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// POST
export function POST(url, params, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        },
      )
      .catch((err) => {
        reject(err);
      });
  });
}

// PUT
export function PUT(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// DELETE
export function DELETE(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { data: params })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
