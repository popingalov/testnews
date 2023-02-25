import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
const portal: HTMLDivElement = document.querySelector('#portal')!;

interface IProp {
  children: ReactNode;
}
export default function Portal({ children }: IProp) {
  return createPortal(children, portal);
}
