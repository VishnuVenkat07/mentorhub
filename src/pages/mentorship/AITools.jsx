import { FaBrain } from 'react-icons/fa'
import { mentorships } from '../../data/mentorships'
import MentorshipSubPage from './MentorshipSubPage'

const program = { ...mentorships.find(m => m.id === 'ai-tools'), icon: FaBrain }
export default function AITools() { return <MentorshipSubPage program={program} /> }
