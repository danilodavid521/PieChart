"use client";
import FaqModal from './FaqModal';

interface HelpProps {
  isOpen: boolean;
  onClose: () => void;
}

const Help: React.FC<HelpProps> = ({ isOpen, onClose }) => {


  return (
    <FaqModal
      title="Help"
      content=""
      onClose={onClose}  // Handler passed to Modal
      isOpen={isOpen}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <div class="prose prose-lg">
          <p>Wat fijn dat je met de Breincirkel werkt. Op deze manier leer je wat het betekent om te leren. Je leert hoe je moet doorzetten om het beste uit jezelf te halen en je weet welke emoties horen bij leren. Hoe gaaf is dat!</p>

        <p>Hoe werkt het?<br>De cirkel bestaat uit verschillende vlakken die elk een stapje zijn van het proces dat leren heet. Zo leer je welke stappen bij een leerproces horen. Met de muis kun je over de vlakken heen bewegen. Wanneer je een vraag hebt over het leren bij het maken van een opdracht kun je zelf een vlak kiezen van de Breincirkel.</p>

        <p>Als je op een vlak klikt kun je kiezen uit twee mogelijkheden. Wil je helpende gedachten of wil je weten welke emotie bij deze stap hoort. Als weet wat je wilt weten klik je op een van deze twee keuzes. Door deze informatie te lezen leer je veel over jezelf en zul je steeds meer vertrouwen krijgen in jouw mogelijkheden. Je begint altijd bij het vlak met: ik ga beginnen en eindigt bij: het is gelukt!</p>

        <p>Ik ga beginnen: nu is het belangrijk dat je weet wat het doel is van de opdracht die je wilt gaan maken.</p>

        <p>Het is moeilijker dan ik dacht: je gaat merken hoe het voelt als je iets nog niet kent of kunt maar je wilt het wel wilt leren.</p>

        <p>Ik weet niet hoe ik verder moet: je wordt uitgedaagd om op onderzoek uit te gaan, wat er weer voor kan zorgen dat je tevreden bent over jezelf, ook wel het eurekagevoel.</p>

        <p>Ik ga door om het doel te bereiken: je krijgt inzicht in oorzaak en gevolg (dat wat je doet zorgt ervoor dat je de opdracht wel of niet kan maken), wat er weer voor kan zorgen dat je een nieuw inzicht krijgt. Je weet hoe je verder moet.</p>

        <p>Ik denk dat het gaat lukken: je krijgt het gevoel van voldoening, je bent trots op jezelf.</p>

        <p>Het is gelukt: wanneer je tevreden bent op wat je geleerd hebt kun je terugkijken op de stappen die je hebt gezet en na gaan denken over wat jij gedaan hebt om het doel te bereiken.</p>

        <p>Weet dat jij kunt leren hoe leren werkt. Je zult zien dat jij steeds beter zal worden in het zelf oplossen van vragen die tegenkomt bij leren. Het is niet erg om iets nog niet te weten.</p>
        <p>Leer omdat je het zelf wilt!</p>
        <p>Veel succes met het werken met de Breincirkel.</p>
        </div>
          `,
        }}
      />
    </FaqModal>
  );
};

export default Help;