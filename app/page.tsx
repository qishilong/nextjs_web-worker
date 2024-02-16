"use client";
import { useEffect, useRef } from "react";
import type { FC } from "react";
import Worker from "worker-loader!../workers/worker";

const Page: FC = () => {
  const workerRef = useRef<Worker>(new Worker());

  useEffect(() => {
    workerRef.current.postMessage("page");

    workerRef.current.onmessage = (e: MessageEvent) => {
      console.log(e.data, "page message");
    };
    return () => {
      workerRef.current.terminate();
    };
  }, []);
  return <h1>Hello, Next.js!</h1>;
};

export default Page;
