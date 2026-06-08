import { FaFileAlt } from 'react-icons/fa'
import { mentorships } from '../../data/mentorships'
import MentorshipSubPage from './MentorshipSubPage'

const program = { ...mentorships.find(m => m.id === 'resume-building'), icon: FaFileAlt }
export default function ResumeBuilding() { return <MentorshipSubPage program={program} /> }
