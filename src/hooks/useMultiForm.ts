import { useCallback, useMemo, useState } from "react";

export default function useMultiForm(steps: number) {
  const [step, setStep] = useState(1);

  const goNext = useCallback(() => {
    setStep((p) => {
      return Math.min(p + 1, steps);
    });
  }, [steps]);

  const goBack = useCallback(() => {
    setStep((p) => {
      return Math.max(p - 1, 1);
    });
  }, []);

  const displaySubmit = useMemo(() => step === steps, [step, steps]);
  const displayNext = useMemo(() => step !== steps, [step, steps]);
  const displayPrev = useMemo(() => step !== 1, [step]);

  return {
    step: step,
    goNext: goNext,
    goBack: goBack,
    displaySubmit,
    displayPrev,
    displayNext,
  };
}
