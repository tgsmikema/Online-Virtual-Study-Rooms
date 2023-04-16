import { Box } from "@mui/material";
import RoomCard from "../RoomCard.jsx";
import StudyRoombackground from "../../assets/study-room-bg.svg";
import React from "react";

const PublicRoomsContainer = () => {
  const handleOpenRoom = () => {
    alert("open");
  };
  return (
    <Box className="flex flex-row flex-wrap h-full">
      <Box
        sx={{ minWidth: 200, maxHeight: 250, minHeight: 200 }}
        className="w-5/12 h-1/2 m-5"
      >
        <RoomCard
          title="Study Room 1"
          showLockIcon={false}
          showPeopleAmount={true}
          image={StudyRoombackground}
          amount={1356}
          showVagueBackground={true}
          onClick={handleOpenRoom}
        />
      </Box>
      <Box
        sx={{ minWidth: 200, maxHeight: 250, minHeight: 200 }}
        className="w-5/12 h-1/2 m-5"
      >
        <RoomCard
          title="Study Room 2"
          showLockIcon={false}
          showPeopleAmount={true}
          image={StudyRoombackground}
          amount={1356}
          showVagueBackground={true}
          onClick={handleOpenRoom}
        />
      </Box>
      <Box
        sx={{ minWidth: 200, maxHeight: 250, minHeight: 200 }}
        className="w-5/12 h-1/2 m-5"
      >
        <RoomCard
          title="Study Room 3"
          showLockIcon={false}
          showPeopleAmount={true}
          image={StudyRoombackground}
          amount={1356}
          showVagueBackground={true}
          onClick={handleOpenRoom}
        />
      </Box>
      <Box
        sx={{ minWidth: 200, maxHeight: 250, minHeight: 200 }}
        className="w-5/12 h-1/2 m-5"
      >
        <RoomCard
          title="Study Room 4"
          showLockIcon={false}
          showPeopleAmount={true}
          image={StudyRoombackground}
          amount={1356}
          showVagueBackground={true}
          onClick={handleOpenRoom}
        />
      </Box>
    </Box>
  );
};

export default PublicRoomsContainer;
