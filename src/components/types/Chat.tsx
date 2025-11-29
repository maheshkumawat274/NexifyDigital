// src/types/chat.ts
// Chat message types and Sender union used by components.
// No runtime logic here — purely TypeScript typings.

export type Sender = 'user' | 'bot' | 'system';

export interface ChatMessage {
  id: string;      // unique id like 'u_12345' or 'b_12345'
  sender: Sender;  // who sent it (user/bot/system)
  text: string;    // message content
  time: number;    // epoch ms
}
