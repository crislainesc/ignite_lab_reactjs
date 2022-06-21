import {gql, useQuery} from '@apollo/client';

import {Lesson} from '@shared/interfaces';

const GET_LESSONS_QUERY = gql`
    query {
        lessons {
            id
            title
        }
    }
`;

function App() {
    const {data} = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);

    return (
        <ul>
            {data?.lessons.map((lesson) => (
                <li key={lesson.id}>{lesson.title}</li>
            ))}
        </ul>
    );
}

export default App;