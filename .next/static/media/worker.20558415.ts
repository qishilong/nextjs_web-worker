const text: string = "我是 worker";

self.onmessage = (e) => {
  console.log(e.data);
  self.postMessage(text);
};
