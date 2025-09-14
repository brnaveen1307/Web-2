import { useState, useMemo } from 'react'

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];

for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(Math.random() * words.length)] + " ";
  }

  ALL_WORDS.push(sentence.trim());
}

export function Assignment2() {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");

  // useMemo so we only recompute when sentences or filter change
  const filteredSentences = useMemo(() => {
    const q = filter.toLowerCase();
    return sentences.filter((x) => x.toLowerCase().includes(q));
  }, [sentences, filter]);

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Type to filter..."
      />

      {filteredSentences.map((word, idx) => (
        <div key={idx}>{word}</div>
      ))}
    </>
  )
}