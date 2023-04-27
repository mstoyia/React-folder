import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
    const comments = selectCommentsByCampsiteId(campsiteId);

    if(comments && comments.length > 0) {
        return (
            <Col md='5' className='md-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
            </Col>
        );
    }

    return (
        <Col md='5' className='md-1'>
            There are no comments for this website yet.
        </Col>
    );
};

export default CommentsList;