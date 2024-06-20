import "./styles.css";

type Props = {
  labelIcon: string;
  text: string;
  onClick(): void;
  isDisable: boolean;
};

const QuizOptionButton = ({ labelIcon, text, onClick, isDisable }: Props) => {
  return (
    <div
      className={`buttonContainer ${isDisable ? "buttonContainerDisable" : ""}`}
      onClick={() => {
        if (!isDisable) {
          onClick();
        }
      }}
    >
      <div
        className={`iconContainer ${isDisable ? "iconContainerDisable" : ""}`}
      >
        <p>{labelIcon}</p>
      </div>
      <div className="textContainer">{text}</div>
    </div>
  );
};

export default QuizOptionButton;
