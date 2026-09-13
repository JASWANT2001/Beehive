import { CONTACT } from '../data/site'

export default function UtilBar() {
  return (
    <div className="util">
      <div className="wrap util-in">
        <div>
          <span>Authorised Cambridge English Training Partner</span>
          <span>Virudhunagar, Tamil Nadu</span>
        </div>
        <div>
          <span>
            <b>Call</b> {CONTACT.phones[0]}
          </span>
          <span>
            <b>Email</b> {CONTACT.email}
          </span>
        </div>
      </div>
    </div>
  )
}
