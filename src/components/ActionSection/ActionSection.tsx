import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { useContext, useState } from "react";
import { LocationContext } from "../../providers/LocationProvider";

function ActionSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [targetInputHidden, setTargetInputHidden] = useState(true);
  const { fetchDirections, coorddinatesPath } = useContext(LocationContext);

  return (
    <>
      <div className="action-section-container">
        <Button
          disabled={coorddinatesPath.length === 0}
          fullWidth
          variant="outlined"
          onClick={() => setIsDrawerOpen(true)}
        >
          Get
        </Button>
        <Button fullWidth variant="outlined" onClick={fetchDirections}>
          Get directions
        </Button>
      </div>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div>Hello</div>
      </Drawer>
    </>
  );
}

export default ActionSection;
