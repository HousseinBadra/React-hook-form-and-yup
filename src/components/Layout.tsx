import { ReactNode, Children, useMemo, memo } from "react";
import useMultiForm from "../hooks/useMultiForm";
import LoadingButton from "@mui/lab/LoadingButton";
import "../css/Layout.css";
import Button from "@mui/material/Button";
import FormProgress from "./FormProgress";

interface LayoutProps {
  children: Iterable<ReactNode>;
  loading: boolean;
  handleSubmit: () => void;
}

const steps = ["Personal information", "Skills", "Avaibility"];

const Layout = memo((props: LayoutProps) => {
  const { children, loading, handleSubmit } = props;
  const childrenArray = useMemo(() => Children.toArray(children), [children]);
  const {
    step: currentStep,
    displayNext,
    displayPrev,
    displaySubmit,
    goBack,
    goNext,
  } = useMultiForm(childrenArray.length);

  const currentStepElement = useMemo(
    () => childrenArray[currentStep - 1],
    [childrenArray, currentStep]
  );

  // rendering
  return (
    <div className="Layout">
      <form onSubmit={handleSubmit}>
        <FormProgress step={currentStep - 1} steps={steps}></FormProgress>
        {currentStepElement}
        <div className="form-actions">
          {displayPrev && (
            <Button variant="outlined" onClick={goBack}>
              prev
            </Button>
          )}
          {displayNext && (
            <Button variant="outlined" onClick={goNext}>
              next
            </Button>
          )}
          {displaySubmit && (
            <LoadingButton
              loading={loading}
              variant="outlined"
              type="submit"
            >
              Submit
            </LoadingButton>
          )}
        </div>
      </form>
    </div>
  );
});

export default Layout;
