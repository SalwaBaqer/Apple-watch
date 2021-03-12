//bootstarp
import Carousel from "react-bootstrap/Carousel";

//state
import { useState } from "react";

//images

import watch from "../images/watch.png";
import apple1 from "../images/apple1.png";
import apple2 from "../images/apple2.png";
import apple3 from "../images/apple3.png";
import apple4 from "../images/apple4.png";
import apple5 from "../images/apple5.png";
import apple6 from "../images/apple6.png";

//styles
import { ImageStyled, ImageWatchStyled, BackgroundDiv } from "../styles";

function SlideShow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <ImageWatchStyled src={watch} alt="Second slide" />
      {/* image 1  */}
      <Carousel.Item>
        <BackgroundDiv></BackgroundDiv>
      </Carousel.Item>
      {/* image 2  */}
      <Carousel.Item>
        <ImageStyled src={apple2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* image 3 */}
      <Carousel.Item>
        <ImageStyled src={apple3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* image 4 */}
      <Carousel.Item>
        <ImageStyled src={apple4} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* image 5 */}
      <Carousel.Item>
        <ImageStyled src={apple5} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* image 6 */}
      <Carousel.Item>
        <ImageStyled src={apple6} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;
