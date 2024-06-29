import ResetPasswordContainer from "@/src/Components/ForgotPassword/ResetPasswordContainer"
import { CheckLinkApi } from "@/src/ReduxToolkit/Apis/auth.api";
import { GetServerSideProps } from "next";

const index = () => {
  return <ResetPasswordContainer />
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { token } = context.params as { token: string };

  try {
    await CheckLinkApi({ token });
    return {
      props: {},
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

