import { PropsBanner } from './types';
import './CallToAction.css';

export default function CallToAction({
  header,
  subtitle,
  buttonName,
}: PropsBanner): JSX.Element {
  return (
    <article className="banner-block">
      <h2 className="banner-title">{header}</h2>
      {Boolean(subtitle) && <h3 className="banner-subtitle">{subtitle}</h3>}
      <a className="banner-button">{buttonName || 'Reserve'}</a>
    </article>
  );
}
