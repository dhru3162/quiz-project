import { GetServerSideProps } from 'next';
import { GetOneQuiz } from '@/src/ReduxToolkit/Apis/quiz.api';
import EditQuizContainer from '@/src/Components/EditQuiz/EditQuizContainer';

const editquiz = ({ data, id }: any) => {

    return (
        <EditQuizContainer
            {...{
                data,
                id,
            }}
        />
    )
}

export default editquiz

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

    if (query.q) {
        try {
            const cookie: any = req.headers.cookie
            const decodedCookie = decodeURIComponent(cookie.replace('auth=', ''));
            const auth = JSON.parse(decodedCookie);

            const payload = {
                Authorization: `Bearer ${auth?.token}`
            }
            const res = await GetOneQuiz(query.q, payload)
            const data = res.data.data

            return {
                props: {
                    data,
                    id: query.q,
                },
            };
        } catch (error) {
            return {
                redirect: {
                    destination: '/dashboard',
                    permanent: false,
                },
            };
        }
    } else {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            },
        };
    }
}