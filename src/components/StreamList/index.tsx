import React from "react";

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from "./styles";
import streamThumbnail from "../../images/stream_thumbnail.jpg";

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}>sirzes02</StreamUserName>
          </StreamHeader>

          <StreamDescription>Desarrollador VR</StreamDescription>

          <StreamCategory numberOfLines={1}>
            Ciencia & Tecnología
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Español</TagText>
          </TagView>
          <TagView>
            <TagText>Desarrollo web</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
