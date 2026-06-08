import { FaChartBar } from 'react-icons/fa'
import { mentorships } from '../../data/mentorships'
import MentorshipSubPage from './MentorshipSubPage'

const program = { ...mentorships.find(m => m.id === 'data-analytics'), icon: FaChartBar }
export default function DataAnalytics() { return <MentorshipSubPage program={program} /> }
