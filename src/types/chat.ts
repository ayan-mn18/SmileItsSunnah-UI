export interface MatchedVerse {
  score: number;
  verseKey: string;
  chapterId: number;
  chapterName: string;
  verse: number;
  text: string;
  language: string;
  arabicText: string;
}

export interface ChatResponse {
  success: boolean;
  query: string;
  matchedVerses: MatchedVerse[];
  generatedResponse: string;
}

export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  response?: ChatResponse;
}