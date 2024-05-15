const { Modal, Button } = VM.require("${config_account}/widget/components") || {
  Modal: () => <></>,
  Button: () => <></>,
};
const [display, setDisplay] = useState(true);
const [copied, setCopied] = useState(false);
const url =
  "https://www.nearbuilders.org/buildhub.near/widget/app?page=feed&tab=proposals";

const handleCopy = () => {
  clipboard
    .writeText(url)
    .then(() => {
      setCopied(true);
    })
    .catch((error) => {
      console.error("Failed to copy:", error);
    });
};
useEffect(() => {
  let timeoutId;

  if (copied) {
    timeoutId = setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return () => {
    clearTimeout(timeoutId);
  };
}, [copied]);

return (
  <div>
    <Modal open={display} onOpenChange={setDisplay} hideCloseBtn={true}>
      <div>
        <p
          style={{
            color: "white",
            textAlign: "center",
            marginLeft: "-10px",
            marginBottom: "20px",
          }}
        >
          <h5>
            After approval, the proposal will appear in the Proposals feed.
            Please copy the link of the feed beforehand.
          </h5>
        </p>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Button variant="outline" onClick={handleCopy}>
            Copy
          </Button>

          <Button variant="outline" onClick={() => setDisplay(false)}>
            Cancel
          </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          {copied && <span style={{ color: "green" }}>Copied!!</span>}
        </div>
      </div>
    </Modal>
  </div>
);
