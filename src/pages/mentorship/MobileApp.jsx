import { FaMobileAlt } from 'react-icons/fa'
import { mentorships } from '../../data/mentorships'
import MentorshipSubPage from './MentorshipSubPage'

const program = { ...mentorships.find(m => m.id === 'mobile-app'), icon: FaMobileAlt }
export default function MobileApp() { return <MentorshipSubPage program={program} /> }
