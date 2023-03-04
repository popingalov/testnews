import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
const portal: HTMLElement = document.getElementById('portal')!;

interface IProp {
  children: ReactNode;
}
export default function Portal({ children }: IProp) {
  return createPortal(children, portal);
}
