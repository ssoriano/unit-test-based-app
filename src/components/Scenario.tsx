import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { Modal } from "./Modal";

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  p {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    padding: 10px;
    p {
      font-size: 1em;
    }
  }
`;

type Props = {
  onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const Scenario = ({ onClose, ...rest }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = useCallback(() => {
    onClose?.();
    setIsModalOpen(false);
  }, []);

  return (
    <Container>
      <p>This is a sample app that includes unit tests.</p>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="What is Lorem Ipsum?"
        {...rest}
      >
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Modal>
    </Container>
  );
};
