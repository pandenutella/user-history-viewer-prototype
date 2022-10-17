import ReactDiffViewer from "react-diff-viewer";

const stringifyResourceImage = (resourceImage) =>
  resourceImage ? JSON.stringify(resourceImage, null, 2) : "";

const UserHistoryDiffViewer = ({ previous, current }) => {
  const previousJSON = stringifyResourceImage(previous);
  const currentJSON = stringifyResourceImage(current);

  return (
    <ReactDiffViewer
      oldValue={previousJSON}
      newValue={currentJSON}
      splitView
      disableWordDiff
      extraLinesSurroundingDiff={1}
    />
  );
};

export default UserHistoryDiffViewer;
