import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid'
interface FAQItem {
  question: string;
  answers: string[];
}

interface FAQProps {
    items: FAQItem[];
  }

  const FAQ: React.FC<FAQProps> = ({ items}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
  
        // ------------You can use visitQuestion here------------
      
    };
  
    return (
      <div>
        {items.map((item, index) => (
          <div key={index} className="my-2">
            <div
              className="flex w-full cursor-pointer items-center justify-between rounded bg-green-600 p-4 text-white"
              onClick={() => toggleOpen(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span>
                {openIndex === index ? <ChevronUpIcon className="size-6" /> : <ChevronDownIcon className="size-6" />}
              </span>
            </div>
            {openIndex === index && (
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