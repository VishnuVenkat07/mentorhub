import { FaPalette } from 'react-icons/fa'
import { mentorships } from '../../data/mentorships'
import MentorshipSubPage from './MentorshipSubPage'

const program = { ...mentorships.find(m => m.id === 'design'), icon: FaPalette }
export default function Design() { return <MentorshipSubPage program={program} /> }
