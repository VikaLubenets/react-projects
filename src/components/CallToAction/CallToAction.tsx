import { PropsBanner } from './types';
import './CallToAction.css';
import { Link } from 'react-router-dom';

export default function CallToAction({
  header,
  subtitle,
  buttonName,
}: PropsBanner): JSX.Element {
  return (
    <article className="banner-block">
      <h2 className="banner-title">{header}</h2>
      {Boolean(subtitle) && <h3 className="banner-subtitle">{subtitle}</h3>}
      <Link to={'/booking'} className="banner-button">
        {buttonName || 'Reserve'}
      </Link>
    </article>
  );
}
