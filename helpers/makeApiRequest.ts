type MakeApiRequest = (
  url: string,
  callback: (data: any) => void,
  setStatus?: (status: boolean) => void
) => Promise<any>;

export const makeApiRequest: MakeApiRequest = (url, callback, setStatus) => {
  setStatus && setStatus(true);
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return { error: true };
        }
      })
      .then((data) => {
        if (!data.error) {
          resolve(callback(data));
        }
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        setTimeout(() => {
          setStatus && setStatus(false);
        }, 500);
      });
  });
};
