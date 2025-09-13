import { StreamChat } from "stream-chat";

if (!process.env.NEXT_PUBLIC_STREAM_API_KEY) {
  throw new Error("Missing NEXT_PUBLIC_STREAM_API_KEY");
}

// Initialize Stream Chat client
const streamClient = StreamChat.getInstance(
  process.env.NEXT_PUBLIC_STREAM_API_KEY,
);

export default streamClient;
