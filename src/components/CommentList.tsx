import React from 'react'
import { useSelector } from 'react-redux'

function CommentList() {
  const comments = useSelector((state: any) => state.comments)

  const renderComments = () => {
    return (
      <>
        {comments.map((com: any, idx: number) => (
          <li key={idx}>{com}</li>
        ))}
      </>
    )
  }
  return <>{comments.length > 0 ? <ul>{renderComments()}</ul> : <></>}</>
}

export default CommentList
