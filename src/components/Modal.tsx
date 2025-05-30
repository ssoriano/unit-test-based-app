import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    max-width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const Title = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 601px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color: #333;
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Modal = ({ isOpen, onClose, title, children, ...rest }: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return isOpen ? (
    <Container
      role="dialog"
      aria-modal="true"
      onClick={handleClickOutside}
      {...rest}
    >
      <Content>
        {title && <Title role="heading">What is Lorem Ipsum?</Title>}
        <Button onClick={onClose} aria-label="Close">
          <FontAwesomeIcon icon={faXmark} />
        </Button>
        <div>{children}</div>
      </Content>
    </Container>
  ) : null;
};
