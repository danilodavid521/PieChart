// FAQ.tsx
import React, { Dispatch, SetStateAction, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';

interface FAQItem {
  question: string;
  answers: string[];
}

interface FAQProps {
  items: FAQItem[];
  visitQuestion?: number[][];
  setVisitQuestion?: Dispatch<SetStateAction<number[][]>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedID?: any;
}

const FAQ: React.FC<FAQProps> = ({
  items,
  visitQuestion,
  setVisitQuestion,
  selectedID = -1, // Set a default value for selectedID
}) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleOpen = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
    if(selectedID === "-ik-ga-beginnen") selectedID = 1;
        if(selectedID === "-het-is-moeilijker-dan-ik-dacht") selectedID = 2;
        if(selectedID === "-ik-weet-niet-hoe-ik-verder-moet") selectedID = 3;
        if(selectedID === "-ik-ga-door-om-het-doel-te-bereiken") selectedID = 4;
        if(selectedID === "-ik-denk-dat-het-gaat-lukken") selectedID = 5;
        if(selectedID === "-het-is-gelukt") selectedID = 6;
  
        if(openIndex === index) return;
        if(!visitQuestion || !setVisitQuestion || !selectedID) return;
        if(visitQuestion[selectedID] && visitQuestion[selectedID][index]) visitQuestion[selectedID][index] += 1;
        else visitQuestion[selectedID][index] = 1;
        setVisitQuestion(visitQuestion);
        console.log(visitQuestion);
  };

  return (
    <div>
      {/* Changed to item.question as key */}
      {items.map((item) => (
        <div
          className="my-2"
          key={item.question}
        >
          <div
            className="flex w-full cursor-pointer items-center justify-between rounded bg-green-600 p-4 text-white"
            onClick={() => toggleOpen(item.question)}
          >
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <span>
              {openIndex === item.question ? <ChevronUpIcon className="size-6" /> : <ChevronDownIcon className="size-6" />}
            </span>
          </div>
          {openIndex === item.question && (
            <div className="prose prose-lg mt-2">
              <ul>
                {item.answers.map((answer, answerIndex) => (
                  <li key={answerIndex}>{answer}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;