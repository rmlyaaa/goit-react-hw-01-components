import {
  CardWrapper,
  MainInfo,
  Avatar,
  NameText,
  SecondaryText,
  StatsWrap,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <CardWrapper>
      <div>
        <MainInfo>
          <Avatar src={avatar} alt={username} width="120" height="120" />
          <NameText> {username} </NameText>
          <SecondaryText> @{tag} </SecondaryText>
          <SecondaryText> {location} </SecondaryText>
        </MainInfo>
        <ul>
          <StatsWrap>
            <SecondaryText>Followers</SecondaryText>
            <span> {stats.followers} </span>
          </StatsWrap>
          <StatsWrap>
            <SecondaryText>Views</SecondaryText>
            <span> {stats.views} </span>
          </StatsWrap>
          <StatsWrap>
            <SecondaryText>Likes</SecondaryText>
            <span> {stats.likes} </span>
          </StatsWrap>
        </ul>
      </div>
    </CardWrapper>
  );
};
