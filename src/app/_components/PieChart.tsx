"use client";
import { ResponsivePie } from "@nivo/pie";
import FaqModal from "./FaqModal";
import { useEffect, useState } from "react";
import FAQ from "./FAQ";

interface FAQItem {
  question: string;
  answers: string[];
}

const classPrefix = process.env.NEXT_PUBLIC_CLASS_PREFIX || "";

const PIE_DATA = [
  {
    id: `${classPrefix}-ik-ga-beginnen`,
    label: "Ik ga beginnen",
    content: "Waar wil je meer over weten?",
    value: 1,
    faqs: [
      { question: "Helpende gedachten", answers: ["Ik heb het nog nooit gedaan, maar ik denk dat ik het wel kan", "Ik wil hier heel erg goed in worden", "Ik ga dit leren, gewoon omdat ik het zelf wil"] },
      { question: "Emotie", answers: ["Zelfvertrouwen: ik kan dit leren"] },
    ],
  },
  {
    id: `${classPrefix}-het-is-moeilijker-dan-ik-dacht`,
    label: "Het is moeilijker dan ik dacht",
    content: "Waar wil je meer over weten?",
    value: 1,
    faqs: [
      { question: "Helpende gedachten", answers: ["Ik mag fouten maken", "Ik zet door, ook wanneer het moeilijk wordt", "Het is niet erg als ik hulp nodig heb"] },
      { question: "Emotie", answers: ["Vertrouwen: ik ga ervan uit dat ik dit kan leren"] },
    ],
  },
  {
    id: `${classPrefix}-ik-weet-niet-hoe-ik-verder-moet`,
    label: "Ik weet niet hoe ik verder moet",
    content: "Waar wil je meer over weten?",
    value: 1,
    faqs: [
      { question: "Helpende gedachten", answers: ["Als ik iets niet weet, zorg ik ervoor dat ik het ga leren. Daarom neem ik de opdracht nog een keer heel goed door", "Ik mag om hulp vragen: eerst aan mijn schoudermaatje en dan aan de juf of meester", "Door te oefenen zal het steeds beter gaan. Als ik iets nog niet kan, herhaal ik de stappen nog een keer"] },
      { question: "Emotie", answers: ["Open: bij leren mag ik laten merken wat ik denk en voel"] },
    ],
  },
  {
    id: `${classPrefix}-ik-ga-door-om-het-doel-te-bereiken`,
    label: "Ik ga door om het doel te bereiken",
    content: "Waar wil je meer over weten?",
    value: 1,
    faqs: [
      { question: "Helpende gedachten", answers: ["Tijdens het leren blijf ik geduldig. Dat betekend dat ik rustig blijf zodat ik goed kan nadenken", "Wanneer ik leer is het niet erg om fouten te maken. Door te proberen ga ik heel veel leren", "Ik weet dat ik het kan, ook al is het moeilijk. Ik blijf vertrouwen houden in mezelf"] },
      { question: "Emotie", answers: ["Moedig: wanneer het lastig is, zet ik toch door"] },
    ],
  },
  {
    id: `${classPrefix}-ik-denk-dat-het-gaat-lukken`,
    label: "Ik denk dat het gaat lukken",
    content: "Waar wil je meer over weten?",
    value: 1,
    faqs: [
      { question: "Helpende gedachten", answers: ["Ik ga ervoor. Zo zorg ik ervoor dat ik leer", "Ik kan het, ik weet wat ik moet doen om mijn doel te bereiken", "Ik weet welke stappen bij leren horen. Wat ik nu doe is goed en ik heb mijn doel bijna behaald"] },
      { question: "Emotie", answers: ["Hoopvol: het komt goed"] },
    ],
  },
  {
    id: `${classPrefix}-het-is-gelukt`,
    label: "Het is gelukt",
    content: "Waar wil je meer over weten?",
    value: 1,
    faqs: [
      { question: "Helpende gedachten", answers: ["Ik heb de juiste stappen gezet tijdens het leren, zo heb ik ervoor gezorgd dat ik veel geleerd heb", "Ik mag trots zijn op mezelf omdat ik het nu weet", "Ik weet nu ook wat ik de volgende keer kan doen om mezelf te verbeteren"] },
      { question: "Emotie", answers: ["Zelfwaardering: ik mag tevreden zijn over mijn manier van leren"] },
    ],
  },

  // Add more FAQ  if necessary  ---------------------------------
];

const PIE_COLORS = [
  "#f5c242",
  "#ea3323",
  "#4fadea",
  "#7eab55",
  "#5e813f",
  "#b9ceab",
];

const formatLabel = (label: string): string => {
  const words = label.split(" ");
  let currentLine = "";
  const lines: string[] = []; // Change this to a string array

  words.forEach((word) => {
    if (currentLine.length + word.length + (currentLine ? 1 : 0) <= 12) {
      currentLine += (currentLine ? " " : "") + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  });

  if (currentLine) {
    lines.push(currentLine);
  }
  
  // Return joined lines with a newline character
  return lines.join("\n");
};

const PieChart = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [label, setLabel] = useState("");
  const [content, setContent] = useState("");
  const [selectedID, setSelectedID] = useState<string>('');
  const [visitQuestion, setVisitQuestion] = useState<number[][]>([[], [], [], [], [], [], []])

  const closeModal = () => {
    setFaqs([]);
    setLabel("");
    setContent("");
  };

  const handleClick = (faqs?: FAQItem[], label?: string, content?: string) => {
    setFaqs(faqs || []);
    setLabel(label || "");
    setContent(content || "");
  };

  useEffect(() => {
    console.log("Selected Slice ID:", selectedID);
  }, [selectedID]);

  // YOU can use ID value of every slices here------------------------------------//

  return (
    <>
      <ResponsivePie
        data={PIE_DATA}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        cornerRadius={0}
        activeOuterRadiusOffset={10}
        arcLabelsRadiusOffset={0.6}
        borderWidth={0}
        // Update arcLabel to call the modified formatLabel
        arcLabel={({ label }) => formatLabel(label as string)}
        borderColor="white"
        colors={PIE_COLORS}
        enableArcLinkLabels={false}
        tooltip={() => <></>}
        onClick={({ id }) => {
          const pieData = PIE_DATA.find((item) => item.id === id);
          if (pieData) {
            handleClick(pieData.faqs, pieData.label, pieData.content);
          }
          setSelectedID(String(id));
        }}
      />
      <FaqModal title={label} isOpen={true} content={content} onClose={closeModal}>
        <FAQ items={faqs} visitQuestion={visitQuestion} setVisitQuestion={setVisitQuestion} selectedID={selectedID} />
      </FaqModal>
    </>
  );
};

export default PieChart;


