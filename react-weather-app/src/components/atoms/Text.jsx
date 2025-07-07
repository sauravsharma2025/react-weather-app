const Text = ({ content, id, className }) => {
  return (
    <p id={id} className={className}>
      {content}
    </p>
  );
};

export default Text;
