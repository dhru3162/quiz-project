import TitleComponent from "../TitleComponent/TitleComponent";
import { APP_TITLE_DATA } from "@/src/lib/const";
import ProfilePage from "./ProfilePage";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { GetScoreApi } from "@/src/ReduxToolkit/Apis/history.api";
import toast from "react-hot-toast";

const ProfileContainer = () => {
  const { loggedInData, role } = useSelector((state: any) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const [totalScore, setTotalScore] = useState(0);
  const router = useRouter();
  const [{ auth }, setCookie] = useCookies(["auth"]);

  useEffect(() => {
    if (auth) {
      getScore();
    }
  }, []);

  const getScore = async () => {
    setIsLoading(true);
    try {
      const payload = {
        Authorization: `Bearer ${auth?.token}`,
      };
      const res = await GetScoreApi(payload);
      setTotalScore(res?.data?.totalScore);
    } catch (err) {
      setTotalScore(0);
      toast.error("Error getting score");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <TitleComponent title={APP_TITLE_DATA.profile} />
      <ProfilePage
        {...{
          loggedInData,
          router,
          role,
          isLoading,
          totalScore,
          getScore,
        }}
      />
    </>
  );
};

export default ProfileContainer;
