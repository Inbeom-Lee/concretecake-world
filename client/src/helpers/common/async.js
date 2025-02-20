export const promise_ForEach = async (array, handler) =>
  await new Promise((resolve, reject) => {
    let count = 0;

    array?.forEach(async (data) => {
      try {
        await handler(data);
      } catch (err) {
        reject(err);
      } finally {
        count++;
        array.length === count && resolve();
      }
    });
  });
