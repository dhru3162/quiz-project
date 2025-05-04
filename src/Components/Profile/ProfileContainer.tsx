import ProfilePage from "./ProfilePage";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { GetScoreApi } from "@/src/ReduxToolkit/Apis/users.api";
import toast from "react-hot-toast";
import { SEO_DATA } from "../SeoComponent/SeoData";
import SeoComponent from "../SeoComponent/SeoComponent";

const ProfileContainer = () => {
  const { loggedInData, role } = useSelector((state: any) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const [totalScore, setTotalScore] = useState(0);
  const router = useRouter();
  const [{ auth }, setCookie] = useCookies(["auth"]);

  useEffect(() => {
    if (auth && role !== "admin") {
      getScore();
    }
    // eslint-disable-next-line
  }, []);

  const getScore = async () => {
    setIsLoading(true);
    try {
      const res = await GetScoreApi();
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
      <SeoComponent {...SEO_DATA.profile} />
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
