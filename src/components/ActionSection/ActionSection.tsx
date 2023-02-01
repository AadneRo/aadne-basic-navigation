import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { useContext, useState } from "react";
import { LocationContext } from "../../providers/LocationProvider";
import DirectionDescription from "../DirectionDescription/DirectionDescription";

function ActionSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {
    fetchDirections,
    coorddinatesPath,
    directionDescriptionList
  } = useContext(LocationContext);

  return (
    <>
      <div className="action-section-container">
        <Button
          disabled={coorddinatesPath.length === 0}
          fullWidth
          variant="outlined"
          onClick={() => setIsDrawerOpen(true)}
        >
          Start GPS
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
        <DirectionDescription steps={directionDescriptionList} />
      </Drawer>
    </>
  );
}

export default ActionSection;
