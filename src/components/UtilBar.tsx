import { CONTACT } from '../data/site'

export default function UtilBar() {
  return (
    <div className="util">
      <div className="wrap util-in">
        <div className="util-info">
          <span>Authorised Cambridge English Training Partner</span>
          <span>Virudhunagar, Tamil Nadu</span>
        </div>
        <div>
          <a href={`tel:+91${CONTACT.phones[0].replace(/\s/g, '')}`}>
            <b>Call</b> {CONTACT.phones[0]}
          </a>
          <a href={`mailto:${CONTACT.email}`}>
            <b>Email</b> {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  )
}
