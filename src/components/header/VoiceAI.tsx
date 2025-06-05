"use client";
import { useState, useRef, useEffect } from "react";
export default function VoiceAI({
  setIsRecording,
  isRecording,
}: {
  setIsRecording: (value: boolean) => void;
  isRecording: boolean;
}) {
  const [transcript, setTranscript] = useState("");
  // const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const deepgramSocketRef = useRef<WebSocket | null>(null);
  const audioBufferRef = useRef<Blob[]>([]); // Buffer to store audio chunks
  // const [annswer, setAnswer] = useState("");

  // useEffect(() => {
  //   const postendPoint =
  //     "https://nbttrereyf.execute-api.us-east-1.amazonaws.com/prod/api/chatbot";
  //   try {
  //   } catch (error) {
  //     console.log("see the error", error);
  //   }
  // }, [transcript]);

  // Start real-time audio streaming
  const startRecording = async () => {
    try {
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "audio/webm",
      });

      // WebSocket connection to Deepgram
      deepgramSocketRef.current = new WebSocket(
        `wss://api.deepgram.com/v1/listen`,
        ["token", process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY || ""]
      );

      deepgramSocketRef.current.onopen = () => {
        console.log("WebSocket connected to Deepgram");
        // Send any buffered audio chunks
        audioBufferRef.current.forEach((chunk) => {
          if (deepgramSocketRef.current?.readyState === WebSocket.OPEN) {
            deepgramSocketRef.current.send(chunk);
          }
        });
        audioBufferRef.current = []; // Clear buffer after sending
      };

      deepgramSocketRef.current.onmessage = (message) => {
        const data = JSON.parse(message.data);
        const transcriptText = data.channel?.alternatives[0]?.transcript || "";
        console.log("Received transcript:", transcriptText);
        if (transcriptText) {
          setTranscript((prev) => prev + " " + transcriptText);
        }
      };

      deepgramSocketRef.current.onerror = (event) => {
        console.error("WebSocket error:", event);
        setError("WebSocket error occurred");
      };

      deepgramSocketRef.current.onclose = () => {
        console.log("WebSocket closed");
      };

      // Handle audio chunks
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          if (deepgramSocketRef.current?.readyState === WebSocket.OPEN) {
            // Send directly if WebSocket is open
            deepgramSocketRef.current.send(event.data);
          } else {
            // Buffer the chunk if WebSocket is not yet open
            audioBufferRef.current.push(event.data);
          }
        }
      };

      // Start recording with 250ms chunks
      mediaRecorderRef.current.start(250);
      setIsRecording(true);
      setError("");
      /* eslint-disable @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      console.error("Error starting recording:", error);
      setError("Failed to start recording: " + error.message);
      setIsRecording(false);
    }
  };

  // Stop real-time audio streaming
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }
    if (deepgramSocketRef.current) {
      deepgramSocketRef.current.close();
    }
    setIsRecording(false);
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stream
          ?.getTracks()
          .forEach((track) => track.stop());
      }
      if (deepgramSocketRef.current) {
        deepgramSocketRef.current.close();
      }
    };
  }, []);

  return (
    <div className="p-6 rounded-lg  w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Voice AI Transcription</h2>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={startRecording}
          disabled={isRecording}
          className={`px-4 py-2 rounded-md text-white font-semibold ${
            isRecording
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#2563eb] via-[#2ca2f4] to-[#34e5ff] hover:bg-blue-700"
          }`}
        >
          Start Recording
        </button>

        <button
          onClick={stopRecording}
          disabled={!isRecording}
          className={`px-4 py-2 rounded-md text-white font-semibold ${
            !isRecording
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Stop Recording
        </button>
      </div>

      <div className="mt-4">
        <div className="p-4 rounded-md min-h-[100px] dark:text-[#FFFFFF] text-gray-800">
          {transcript || "No transcript yet. Start recording to see results."}
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
}
