import { useState, FormEvent } from 'react';
import { ChatInput } from './ChatInput';
import { ChatWelcome } from './ChatWelcome';
import { ChatMessage } from './ChatMessage';
import type { Message, ChatResponse } from '@/types/chat';

const DUMMY_RESPONSE: ChatResponse = {
  success: true,
  query: "Can a divorced women re marry her former husband?",
  matchedVerses: [
    {
      score: 0.533438504,
      verseKey: "2:230",
      chapterId: 2,
      chapterName: "Al-Baqarah",
      verse: 230,
      text: "And if he has divorced her [for the third time], then she is not lawful to him afterward until [after] she marries a husband other than him. And if the latter husband divorces her [or dies], there is no blame upon the woman and her former husband for returning to each other if they think that they can keep [within] the limits of Allah. These are the limits of Allah, which He makes clear to a people who know",
      language: "en",
      arabicText: "فَإِن طَلَّقَهَا فَلَا تَحِلُّ لَهُۥ مِنۢ بَعۡدُ حَتَّىٰ تَنكِحَ زَوۡجًا غَيۡرَهُۥۗ فَإِن طَلَّقَهَا فَلَا جُنَاحَ عَلَيۡهِمَآ أَن يَتَرَاجَعَآ إِن ظَنَّآ أَن يُقِيمَا حُدُودَ ٱللَّهِۗ وَتِلۡكَ حُدُودُ ٱللَّهِ يُبَيِّنُهَا لِقَوۡمٖ يَعۡلَمُونَ"
    },
    {
      score: 0.525052369,
      verseKey: "2:232",
      chapterId: 2,
      chapterName: "Al-Baqarah",
      verse: 232,
      text: "And when you divorce women and they have fulfilled their term, do not prevent them from remarrying their [former] husbands if they agree among themselves on an acceptable basis. That is instructed to whoever of you believes in Allah and the Last Day. That is better for you and purer, and Allah knows and you know not",
      language: "en",
      arabicText: "وَإِذَا طَلَّقۡتُمُ ٱلنِّسَآءَ فَبَلَغۡنَ أَجَلَهُنَّ فَلَا تَعۡضُلُوهُنَّ أَن يَنكِحۡنَ أَزۡوَٰجَهُنَّ إِذَا تَرَٰضَوۡاْ بَيۡنَهُم بِٱلۡمَعۡرُوفِۗ ذَٰلِكَ يُوعَظُ بِهِۦ مَن كَانَ مِنكُمۡ يُؤۡمِنُ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِۗ ذَٰلِكُمۡ أَزۡكَىٰ لَكُمۡ وَأَطۡهَرُۚ وَٱللَّهُ يَعۡلَمُ وَأَنتُمۡ لَا تَعۡلَمُونَ"
    }
  ],
  generatedResponse: "Yes, according to the Quranic verses provided, a divorced woman can remarry her former husband under certain conditions. If a woman has been divorced three times by her husband, she is not lawful to him afterward until she marries another husband, and if that marriage ends, she can remarry her former husband if they both agree and are able to keep within the limits set by Allah. It is important for them to act in accordance with what is acceptable and within the bounds of Allah's guidance."
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    const query = input.value.trim();

    if (!query) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: query
    };

    setMessages(prev => [...prev, userMessage]);
    input.value = '';

    // Simulate API call
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: DUMMY_RESPONSE.generatedResponse,
        response: DUMMY_RESPONSE
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="w-[85%] h-[calc(100vh-8rem)] rounded-lg glass-effect p-6">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 -mr-4">
          {messages.length === 0 ? (
            <ChatWelcome />
          ) : (
            <div className="space-y-4">
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>
          )}
        </div>
        <ChatInput onSubmit={handleSubmit} />
      </div>
    </div>
  );
}