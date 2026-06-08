import { FaServer } from 'react-icons/fa'
import { mentorships } from '../../data/mentorships'
import MentorshipSubPage from './MentorshipSubPage'

const program = { ...mentorships.find(m => m.id === 'devops'), icon: FaServer }
export default function DevOps() { return <MentorshipSubPage program={program} /> }
