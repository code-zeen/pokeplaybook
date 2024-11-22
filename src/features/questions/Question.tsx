import Answers from '@/features/questions/answer/Answers.tsx'
import type { QuestionType } from '@/features/questions/types/questionType.ts'
import QuestionTitle from './QuestionTitle.tsx'

interface QuestionProps {
    question: QuestionType
}

function Question({ question }: QuestionProps) {
    return (
        <div className="flex flex-col gap-1 border rounded overflow-hidden">
            <QuestionTitle id={question.id} title={question.title} />
            <Answers qId={question.id} answerConfig={question.answer_config} options={question.options} />
        </div>
    )
}

export default Question