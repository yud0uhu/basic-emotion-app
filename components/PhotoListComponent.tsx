import styled from "@emotion/styled";
import { css } from "@emotion/react";

const containerStyle = css`
  margin: 0 auto;
  padding: 15px;
  max-width: 585px;
`;

const textStyles = css`
  color: var(--hiContrast);
`;

const imageContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const imageStyle = css`
  width: 100px;
  height: auto;
  border-radius: var(--1);
`;

const Container = styled.div`
  ${containerStyle}
`;

const Text = styled.h1`
  ${textStyles}
`;

const ImageContainer = styled.div`
  ${imageContainerStyle}
`;

const Image = styled.img`
  ${imageStyle}
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledLi = styled.li`
  list-style: none;
`;
interface Photo {
  id: number;
  thumbnailUrl: string;
  title: string;
}

interface PhotoListComponentProps {
  text: string;
  photoList: Photo[];
}

const PhotoListComponent: React.FC<PhotoListComponentProps> = ({
  text,
  photoList,
}) => {
  return (
    <Container>
      <Text>PhotoListComponent from emotion</Text>
      <p style={{ margin: 0 }}>text: {text}</p>

      <StyledUl>
        {photoList.map((photo) => (
          <StyledLi key={photo.id}>
            <ImageContainer>
              <Image src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </ImageContainer>
          </StyledLi>
        ))}
      </StyledUl>
    </Container>
  );
};

export default PhotoListComponent;
