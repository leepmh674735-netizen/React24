import React from 'react';

const CommentList = ({ boardData, plusLike, deleteComment, editComment }) => {
    return (
        <>
            {boardData.map((row) => {
                return (
                    <ul className="list-group mt-3" key={row.idx}>
                        <li className="list-group-item">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <strong>{row.writer}</strong>
                                    <small className="ms-2 text-muted">{row.postdata}</small>
                                </div>
                                <div>
                                    <button 
                                        className="btn btn-outline-success btn-sm me-1"
                                        onClick={() => plusLike(row.idx)}
                                    >
                                        좋아요 ({row.likes})
                                    </button>
                                    <button 
                                        className="btn btn-outline-warning btn-sm me-1"
                                        data-bs-toggle="modal" 
                                        data-bs-target="#commentModal"
                                        onClick={() => editComment(row.idx)}
                                    >
                                        수정
                                    </button>
                                    <button 
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => deleteComment(row.idx)}
                                    >
                                        삭제
                                    </button>
                                </div>
                            </div>
                            <p className="mt-2 mb-0" style={{ whiteSpace: 'pre-wrap' }}>
                                {row.contents}
                            </p>
                        </li>
                    </ul>
                );
            })}
        </>
    );
};

export default CommentList;