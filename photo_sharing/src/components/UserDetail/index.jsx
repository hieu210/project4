import React from "react";
import { Typography, Link } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography variant="body1">User not found</Typography>;
  }

  return (
    <div className="user-detail-container">
      <Typography variant="h4">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body1">
        <strong>Location:</strong> {user.location}
      </Typography>
      <Typography variant="body1">
        <strong>Description:</strong> {user.description}
      </Typography>
      <Typography variant="body1">
        <strong>Occupation:</strong> {user.occupation}
      </Typography>
      {/* route link */}
      <Typography variant="body1">
        <Link component={RouterLink} to={`/photos/${userId}`}>
          View {user.first_name}'s photos
        </Link>
      </Typography>
    </div>
  );
}

export default UserDetail;
