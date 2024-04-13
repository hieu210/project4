import React from "react";
import { Typography, Link } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom"; // Import Link as RouterLink
import models from "../../modelData/models";
import "./styles.css";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);
  const user = models.userModel(userId);

  if (!photos || photos.length === 0) {
    return (
      <Typography variant="body1" id= "name" type ="text">B21DCDT096 Vu Minh Hieu</Typography>
    );
  }

  return (
    <div className="user-photos-container">
      <Typography variant="h5">{user.first_name}'s Photos</Typography>
      {photos.map((photo) => (
        <div key={photo._id} className="photo-item">
          {/*import image */}
          <img
            src={require(`../../images/${photo.file_name}`)}
            alt="user photo"
            className="photo-img"
          />

          <Typography variant="body1">
            Date/Time: {new Date(photo.date_time).toLocaleString()}
          </Typography>
          {photo.comments && (
            <div className="comments">
              {photo.comments.map((comment) => (
                <div key={comment._id} className="comment">
                  <Typography variant="body1">
                    <strong>Date/Time:</strong>{" "}
                    {new Date(comment.date_time).toLocaleString()}
                  </Typography>
                  <Typography variant="body1">
                    <strong>User:</strong> {/* Link route */}
                    <Link
                      component={RouterLink}
                      to={`/users/${comment.user._id}`}
                    >
                      {comment.user.first_name} {comment.user.last_name}
                    </Link>
                  </Typography>
                  <Typography variant="body1">
                    <strong>Comment:</strong> {comment.comment}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserPhotos;
