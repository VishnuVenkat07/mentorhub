import { useParams, Navigate } from 'react-router-dom'
import { subCourses } from '../../data/mentorshipSubCourses'
import MentorshipSubPage from './MentorshipSubPage'

export default function SubCourseDetail() {
  const { courseId } = useParams()
  const course = subCourses.find(c => c.id === courseId)
  if (!course) return <Navigate to="/" replace />
  return <MentorshipSubPage program={course} />
}
