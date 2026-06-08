import { FaReact } from 'react-icons/fa'
import { mentorships } from '../../data/mentorships'
import MentorshipSubPage from './MentorshipSubPage'

const program = { ...mentorships.find(m => m.id === 'mern'), icon: FaReact }
export default function MERN() { return <MentorshipSubPage program={program} /> }
