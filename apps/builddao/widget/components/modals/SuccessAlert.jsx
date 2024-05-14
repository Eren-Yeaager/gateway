const { Modal, Button } = VM.require("${config_account}/widget/components") || {
  Modal: () => <></>,
  Button: () => <></>,
};
const [open, setOpen] = useState(true);
const showModal = props.showModal;
const toggleModal = props.toggleModal;
const closeModal = props.closeModal;
const toggle = props.toggle;
const daoId = props.daoId ?? "build.sputnik-dao.near";
return (
  <div>
    <Modal
      open={true} // Set open to true to show the modal
      onOpenChange={() => setShowSuccessModal(false)} // Handle modal close
      hideCloseBtn={true}
    >
      <div>
        <p
          style={{
            color: "green",
            textAlign: "center",
            marginLeft: "-10px",
            marginBottom: "30px",
          }}
        >
          <h5>Proposal successfully submitted</h5>
        </p>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Button variant="outline">
            <a
              href={`https://near.org/buildhub.near/widget/Proposals?daoId=${daoId}&proposalId=${proposalId}`}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={(e) => {
                setShowSuccessModal(false); // Close the modal when link is clicked
              }}
            >
              Link to your proposal
            </a>
          </Button>
        </div>
      </div>
    </Modal>
  </div>
);
