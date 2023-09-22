import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
  max-width: 585px;
`;

const Text = styled.h1`
  color: var(--hiContrast);
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: var(--1);
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledLi = styled.li`
  list-style: none;
`;

const PhotoListComponent = ({ text, photoList }) => {
  return (
    <Container>
      <Text>PhotoListComponent from emotion.</Text>
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
