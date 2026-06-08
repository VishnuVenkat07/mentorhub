import { FaGraduationCap } from 'react-icons/fa'
import { mentorships } from '../../data/mentorships'
import MentorshipSubPage from './MentorshipSubPage'

const program = { ...mentorships.find(m => m.id === 'college-placement'), icon: FaGraduationCap }
export default function CollegePlacement() { return <MentorshipSubPage program={program} /> }
