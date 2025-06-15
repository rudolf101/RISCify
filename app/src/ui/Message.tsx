import "./Message.css";

export const Message = (props: {
  header: string;
  text: string;
  error?: boolean;
}) => {
  return (
    <>
      <div className={"header " + (props.error ? "error" : "")}>
        {props.header}
      </div>
      <div className={"message " + (props.error ? "error" : "")}>
        {props.text}
      </div>
    </>
  );
};
