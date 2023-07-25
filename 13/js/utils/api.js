const getData = (url, onSuccess, onError) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = (url, body, onSuccess, onError) => {
  fetch(url, {
    method: 'POST',
    body
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch(() => {
      onError();
    });
};

export{getData, sendData};
