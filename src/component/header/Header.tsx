import { LanguageSelection } from 'component';
import s from './style.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <LanguageSelection />
    </header>
  );
}
