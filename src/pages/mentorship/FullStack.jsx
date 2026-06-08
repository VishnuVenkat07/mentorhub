import { FaLayerGroup } from 'react-icons/fa'
import { mentorships } from '../../data/mentorships'
import MentorshipSubPage from './MentorshipSubPage'

const program = { ...mentorships.find(m => m.id === 'full-stack'), icon: FaLayerGroup }
export default function FullStack() { return <MentorshipSubPage program={program} /> }
