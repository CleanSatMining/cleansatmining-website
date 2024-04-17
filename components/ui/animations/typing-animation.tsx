"use client";
import React, { useState, useEffect } from "react";

const TypingAnimation: React.FC<{ phrase1: string; phrase2: string }> = ({
  phrase1,
  phrase2,
}) => {
  const [typedPhrase, setTypedPhrase] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phrase, setPhrase] = useState(phrase1);

  useEffect(() => {
    let currentLetterIndex = isDeleting ? phrase.length - 1 : 0;
    let timeoutId: NodeJS.Timeout | null = null;
    //console.log("phrase", isDeleting, currentLetterIndex);

    const typeLetters = () => {
      timeoutId = setTimeout(
        () => {
          if (!isDeleting) {
            if (currentLetterIndex <= phrase.length) {
              setTypedPhrase((prevTypedPhrase) =>
                phrase.substring(0, currentLetterIndex)
              );
              currentLetterIndex++;
            } else {
              setIsDeleting(true);
              currentLetterIndex = phrase.length - 1;
              clearTimeout(timeoutId!);
              timeoutId = null;
            }
          } else {
            if (currentLetterIndex >= 0) {
              setTypedPhrase(
                (prevTypedPhrase) =>
                  phrase.substring(0, currentLetterIndex) + "."
              );
              currentLetterIndex--;
            } else {
              setIsDeleting(false);
              setPhrase(phrase === phrase1 ? phrase2 : phrase1);
              setTypedPhrase(".");
              currentLetterIndex = 0;
              clearTimeout(timeoutId!);
              timeoutId = null;
            }
          }
          typeLetters();
        },
        isDeleting ? 10 : currentLetterIndex === phrase.length ? 5000 : 60
      ); // Temps entre chaque lettre (en millisecondes) pendant la suppression/ajout
    };

    typeLetters();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [phrase, isDeleting]);

  return <>{typedPhrase}</>;
};

export default TypingAnimation;
